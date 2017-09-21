angular.module('starter.controllers')
.factory('RechercheService', function ($filter, $translate, ParamService) {

	//GLOBAL DATA
	var structuresData = _structuresDatas;
	var collecteDomicileData = _homeCollectModsDatas;
	var advicesData = _advicesDatas;
	var categoriesData = _usualCategoriesDatas;
	var garbagesData = _garbagesDatas;
	var collectModsDatas = _collectModsDatas;
	var newsDatas = _newsDatas;
	var zeroDechetNantesDatas = _zeroDechetNantesDatas;
	var compagniesAdvicesDatas = _compagniesAdvicesDatas;
	var infosDatas = _infosDatas;
	var filterTypeLieux = _paramFilterTypePlacesDatas;
	var filterTypeFiches = _paramFilterTypeFiches;
	var filterTypeCarte = _paramFilterTypeMapDatas;
	var _escapeRegExp = function (str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}

	/**
	 * Renvoie le nom complet d'un paramètre.
	 * Exemples : "descr_en", "descr"
	 */
	 // RM-LA_LANGUE_07 : Les données présentées sont celles de la langue courante.
	var _getKeyWord = function (key) {
		var result = key;
		// RM-LA_LANGUE_06 : Les recherches s’effectuent sur les mots clés dans la langue courante.
		var currentlanguage = $translate.proposedLanguage();
		// RM-LA_LANGUE_08 : Si la langue courante n'est pas définie, on prend le français.
		var defaultlanguage = ParamService.getParam("defaultlanguage", "fr");
		if (currentlanguage !== defaultlanguage) {
			result = key + "_" + currentlanguage;
		}
		return result;
	};

	/*  RECHERCHE de structures basé sur un type de structure et un mot-clé
	 *
	 *  @example RechercheService.searchStructure('modco_decheterie|modco_ecopoint','vélo')
	 *
	 */
	var _searchStructure = function (structureType, searchKeyword) {

		var searchKeyWordCleaned = $filter('searchTextClean')(searchKeyword);

		var stTypeRegexp = new RegExp(structureType);
		var my = this;

		var motsClesComplet = _getKeyWord("mots_cles");
		var results = $filter('filter')(structuresData,

				//CUSTOM FILTER
				function (item, index) {

				var textTest = new RegExp(_escapeRegExp(searchKeyWordCleaned), 'ig');
				var result = "";

				//Analyse du type uniquement
				if (searchKeyWordCleaned == '') {
					result = stTypeRegexp.test(item.modesCollecte);
				}
				//Analyse type et mot-clé
				else {
					var currentlanguage = $translate.proposedLanguage();
					result = (stTypeRegexp.test(item.modesCollecte) && textTest.test(item[motsClesComplet]));

				}
				return result;
			});

		// RM-RE_RESULT_REC_01 : Pour les lieux, on présente par les lieux présentés en fonction de la distance vis à vis de la localisation actuelle.
		
		// fonctionne mais trop lent
		var lat2 = ParamService.getValueInLocalStorageWithDefault("latitude", "geo.defaultLat");
		var lng2 = ParamService.getValueInLocalStorageWithDefault("longitude", "geo.defaultLong");
		var latlngInit = L.latLng(lat2, lng2);
		for (var i = 0; i < results.length; i++) {
			var container = results[i];
			var distance = 100000;
			if (typeof container.latitude !== 'undefined' && typeof container.longitude !== 'undefined') {
				var latlngcurrent = L.latLng(parseFloat(container.latitude), parseFloat(container.longitude));
				distance = parseInt(latlngcurrent.distanceTo(latlngInit));
			}
			container.distance = distance;
		}

		return results;

	};

	/*  RECHERCHE de déchets basé sur  un mot-clé
	 *
	 *  @example RechercheService.searchStructure('modco_decheterie|modco_ecopoint','vélo')
	 *
	 */
	var _searchDechet = function (searchKeyword) {

		var searchKeyWordCleaned = $filter('searchTextClean')(searchKeyword);
		var my = this;

		var motsClesComplet = _getKeyWord("mots_cles");
		var results = $filter('filter')(garbagesData,

				//CUSTOM FILTER
				function (item, index) {

				var textTest = new RegExp(_escapeRegExp(searchKeyWordCleaned), 'ig');
				var result = "";
				var currentlanguage = $translate.proposedLanguage();
				result = textTest.test(item[motsClesComplet]);
				return result;
			});

		return results;

	};

	/*  RECHERCHE de fiche basé sur  un mot-clé
	 *
	 *  @example RechercheService.searchStructure('modco_decheterie|modco_ecopoint','vélo')
	 *
	 */
	var _searchFiche = function (structureType, searchKeyword) {

		var searchKeyWordCleaned = $filter('searchTextClean')(searchKeyword);
		var stTypeRegexp = new RegExp(structureType);
		var my = this;
		var motsClesComplet = _getKeyWord("mots_cles");
		var results = $filter('filter')(infosDatas,

				//CUSTOM FILTER
				function (item, index) {

				var textTest = new RegExp(_escapeRegExp(searchKeyWordCleaned), 'ig');
				var result = "";

				//Analyse du type uniquement
				if (searchKeyWordCleaned == '') {
					result = stTypeRegexp.test(item.categorie);
				}
				//Analyse type et mot-clé
				else {
					var currentlanguage = $translate.proposedLanguage();
					result = (stTypeRegexp.test(item.categorie) && textTest.test(item[motsClesComplet]));

				}
				return result;
			});

		return results;

	};

	var _getStructure = function (code) {
		return _getOneData(code, structuresData);
	};

	/*  RECHERCHE du mode de collecte pour l'adresse en paramètre
	 *
	 *  @example RechercheService.searchCollecte('rue des récollets')
	 *
	 */
	var _searchCollecteDomicile = function (adresse) {

		var searchKeyWordCleaned = $filter('searchTextCleanAdresse')(adresse);

		//console.log(searchKeyWordCleaned);

		//On récupère la fiche qui correspondant au code
		var filterResult = $filter('filter')(collecteDomicileData,

				//CUSTOM FILTER
				function (item, index) {
					// il faut bien recréer l'expression régulière à chaque fois
					var myRegexp = new RegExp(searchKeyWordCleaned, 'ig');
					return (myRegexp.test(item.mots_cles));

			});

		return filterResult;

	};

	/*  Récupération d'un conseil à partir de son code
	 *
	 *  @example RechercheService.getConseil('cons_encombrants')
	 *
	 */
	var _getConseil = function (code) {
		return _getOneData(code, advicesData);
	}

	/*  Récupération de conseils à partir de leurs codes (séparés par des virgules)
	 *
	 *  @example RechercheService.getConseils('cons_sansbouchon,cons_bouchonamour,cons_ferraille,cons_acier')
	 *
	 */
	var _getConseils = function (codes) {

		var expFilter = function (item, index, array) {

			var test = codes.indexOf(item.code);
			return (test >= 0);

		};

		//On récupère la fiche qui correspondant au code
		var filterResult = $filter('filter')(advicesData, expFilter);

		return filterResult;

	}

	/*  Récupération des actualités
	 *
	 *  @example RechercheService.getNews()
	 *
	 */
	var _getNews = function () {
		return newsDatas;
	}

	/*  Récupération d'une actualité à partir de son code
	 *
	 *  @example RechercheService.getOneNews('news1')
	 *
	 */
	var _getOneNews = function (code) {
		return _getOneData(code, newsDatas);
	}

	var _getOneData = function (code, data) {
		var expFilter = {
			code: code
		};
		//On récupère la fiche qui correspondant au code
		var filterResult = $filter('filter')(data, expFilter);
		if (filterResult.length > 0) {
			return filterResult[0];
		} else
			return null;
	}

	/*  Récupération des actualités
	 *  @example RechercheService.getNews()
	 */
	var _getAllZeroDechet = function () {
		return zeroDechetNantesDatas;
	}

	/*  Récupération d'un conseil zéro déchet à partir de son code
	 *  @example RechercheService.getOneNews('news1')
	 *
	 */
	var _getAZeroDechet = function (code) {
		return _getOneData(code, zeroDechetNantesDatas);
	}

	/*  Récupération des actualités
	 *  @example RechercheService.getNews()
	 */
	var _getAllCompaniesAdvices = function () {
		return compagniesAdvicesDatas;
	}

	/*  Récupération d'un conseil zéro déchet à partir de son code
	 *  @example RechercheService.getOneNews('news1')
	 *
	 */

	var _getACompaniesAdvice = function (code) {
		return _getOneData(code, compagniesAdvicesDatas);
	}

	/*  Récupération des modes de collecte à partir de leurs codes (séparés par des virgules)
	 *
	 *  @example RechercheService.getConseils('cons_sansbouchon,cons_bouchonamour,cons_ferraille,cons_acier')
	 *
	 */
	var _getModeDeCollectes = function (codes) {

		var mco_filter_not = ParamService.getValueInLocalStorage("mco_filter_not");

		var expFilter = function (item, index, array) {
			var test = codes.indexOf(item.code);

			if (test >= 0) {

				if (mco_filter_not == null) {
					// Si le filtre mco_filter_not n'est pas paramétré, on accepte tout.
					return true;
				}

				var test2 = mco_filter_not.indexOf(item.code);
				if (test2 >= 0) {
					return false;
				} else {
					return true;
				}
			} else {
				return false;
			}
		};
		//On récupère la fiche qui correspondant au code
		var filterResult = $filter('filter')(collectModsDatas, expFilter);

		return filterResult;

	}

	/*  Récupération d'une categorie déchet à partir de son code
	 *
	 *  @example RechercheService.getCategorieDechet('cu_plastique')
	 *
	 */
	var _getCategorieDechet = function (codeCategorie) {
		return _getOneData(codeCategorie, categoriesData);
	}

	/*  Récupération d'un déchet à partir de son code
	 *
	 *  @example RechercheService.getDechet('dec_potPeinture')
	 *
	 */
	var _getDechet = function (code) {
		return _getOneData(code, garbagesData);
	}

	var _getTypeCollecte = function () {
		return structureCollecteType;
	}

	var _getAFilter = function (filterName) {
		var result = [];
		if (filterName === "filter_collect_types") {
			result = filterTypeLieux;
		} else if (filterName === "filter_fiches_types") {
			result = filterTypeFiches;
		} else if (filterName === "filter_map") {
			result = filterTypeCarte;
		}
		return result;
	}

	return {
		escapeRegExp: _escapeRegExp,
		searchDechet: _searchDechet,
    searchFiche: _searchFiche,
		searchStructure: _searchStructure,
		getStructure: _getStructure,
		searchCollecteDomicile: _searchCollecteDomicile,
		getConseil: _getConseil,
		getConseils: _getConseils,
		getNews: _getNews,
		getOneNews: _getOneNews,
		getAZeroDechet: _getAZeroDechet,
		getAllZeroDechet: _getAllZeroDechet,
		getACompaniesAdvice: _getACompaniesAdvice,
		getAllCompaniesAdvices: _getAllCompaniesAdvices,
		getModeDeCollectes: _getModeDeCollectes,
		getCategorieDechet: _getCategorieDechet,
		getDechet: _getDechet,
		getTypeCollecte: _getTypeCollecte,
		getAFilter: _getAFilter
	};
});