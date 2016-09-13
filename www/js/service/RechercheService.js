

function ServiceRecherche($filter) {

	//GLOBAL DATA
	var structuresData = _structuresDatas;
	var collecteDomicileData = _homeCollectModsDatas;
	var advicesData = _advicesDatas;
	var categoriesData = _usualCategoriesDatas;
	var garbagesData = _garbagesDatas;
	var collectModsDatas = _collectModsDatas;

	var structureCollecteType = [{
				name : 'Tous',
				value : '.*'
			}, {
				name : "Déchèteries / Ecopoints",
				value : "modco_decheterie|modco_ecopoint"
			}, {
				name : "Encombrants",
				value : "modco_encombrants_resume"
			}, {
				name : "Réemploi",
				value : "smco_reemp"
			}, {
				name : "Vente vrac",
				value : "ventevrac"
			}];

	this._escapeRegExp = function(str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}

	/*  RECHERCHE de structures basé sur un type de structure et un mot-clé
	 * 
	 *  @example ServiceRecherche.searchStructure('modco_decheterie|modco_ecopoint','vélo')
	 * 
	 */
	this.searchStructure = function(structureType, searchKeyword) {

		var searchKeyWordCleaned = $filter('searchTextClean')(searchKeyword);
		var stTypeRegexp = new RegExp(structureType);
		var my = this;

		var results = $filter('filter')(structuresData,

				//CUSTOM FILTER
				function(item, index) {

			var textTest = new RegExp(my._escapeRegExp(searchKeyWordCleaned),
					'ig');

			//Analyse du type uniquement
			if (searchKeyWordCleaned == '') {

				return stTypeRegexp.test(item.modesCollecte);

			}
			//Analyse type et mot-clé
			else {

				return (stTypeRegexp.test(item.modesCollecte) && textTest
						.test(item.mots_cles));

			}

		});

		return results;

	};

	this.getStructure = function(code) {

		var expFilter = {
			code : code
		};

		//On récupère la structure qui correspondant au code 
		var filterResult = $filter('filter')(structuresData, expFilter);

		if (filterResult.length > 0) {
			return filterResult[0];
		} else
			return null;

	};

	/*  RECHERCHE du mode de collecte pour l'adresse en paramètre
	 * 
	 *  @example ServiceRecherche.searchCollecte('rue des récollets')
	 * 
	 */
	this.searchCollecteDomicile = function(adresse) {

		var searchKeyWordCleaned = $filter('searchTextCleanAdresse')(adresse);
		var myRegexp = new RegExp(searchKeyWordCleaned, 'ig');

		//console.log(searchKeyWordCleaned);

		//On récupère la fiche qui correspondant au code 
		var filterResult = $filter('filter')(collecteDomicileData,

				//CUSTOM FILTER
				function(item, index) {

			return (myRegexp.test(item.mots_cles));

		}

		);

		return filterResult;

	};

	/*  Récupération d'un conseil à partir de son code
	 * 
	 *  @example ServiceRecherche.getConseil('cons_encombrants')
	 * 
	 */
	this.getConseil = function(code) {

		var expFilter = {
			code : code
		};

		//On récupère la fiche qui correspondant au code 
		var filterResult = $filter('filter')(advicesData, expFilter);

		if (filterResult.length > 0) {
			return filterResult[0];
		} else
			return null;

	}

	/*  Récupération de conseils à partir de leurs codes (séparés par des virgules)
	 * 
	 *  @example ServiceRecherche.getConseils('cons_sansbouchon,cons_bouchonamour,cons_ferraille,cons_acier')
	 * 
	 */
	this.getConseils = function(codes) {

		var expFilter = function(item, index, array) {

			var test = codes.indexOf(item.code);
			return (test >= 0);

		};

		//On récupère la fiche qui correspondant au code 
		var filterResult = $filter('filter')(advicesData, expFilter);

		return filterResult;

	}

	/*  Récupération des modes de collecte à partir de leurs codes (séparés par des virgules)
	 * 
	 *  @example ServiceRecherche.getConseils('cons_sansbouchon,cons_bouchonamour,cons_ferraille,cons_acier')
	 * 
	 */
	this.getModeDeCollectes = function(codes) {

		var expFilter = function(item, index, array) {
			var test = codes.indexOf(item.code);
			return (test >= 0);
		};

		//On récupère la fiche qui correspondant au code 
		var filterResult = $filter('filter')(collectModsDatas, expFilter);

		return filterResult;

	}

	/*  Récupération d'une categorie déchet à partir de son code
	 * 
	 *  @example ServiceRecherche.getCategorieDechet('cu_plastique')
	 * 
	 */
	this.getCategorieDechet = function(codeCategorie) {

		var expFilter = {
			code : codeCategorie
		};

		//On récupère la fiche qui correspondant au code 
		var filterResult = $filter('filter')(categoriesData, expFilter);

		if (filterResult.length > 0) {
			return filterResult[0];
		} else
			return null;

	}

	/*  Récupération d'un déchet à partir de son code
	 * 
	 *  @example ServiceRecherche.getDechet('dec_potPeinture')
	 * 
	 */
	this.getDechet = function(code) {

		var expFilter = {
			code : code
		};

		//On récupère la fiche qui correspondant au code 
		var filterResult = $filter('filter')(garbagesData, expFilter);

		if (filterResult.length > 0) {
			return filterResult[0];
		} else
			return null;

	}

	/*
	 this.search = function (typeParam, searchkeyParam) {
	
	 console.time("search_structures");
	 var stTypeRegexp = new RegExp(typeParam.value);
	 var stSearchRegexp = new RegExp(Transliteration(searchkeyParam), 'ig');

	 var results=$filter('filter')(structuresData, 
	
	 //CUSTOM FILTER
	 function (item, index, fullarray) {
	
	 //Analyse du type uniquement
	 if (searchkeyParam == '') {
	
	 return stTypeRegexp.test(item.modesCollecte);
	
	 }
	 //Analyse type et mot-clé
	 else {
	
	 var nomNormalize=Transliteration(item.nom);
	
	 //Mots-clés sur la donnée ??
	 var keywordsNormalize='';                    
	 if (typeof item.mots_cles !== "undefined") keywordsNormalize=Transliteration(item.mots_cles);
	
	 return stTypeRegexp.test(item.modesCollecte) && (stSearchRegexp.test(nomNormalize) || stSearchRegexp.test(keywordsNormalize));
	
	 }          
	
	 }
	 );

	 console.timeEnd("search_structures");  

	 return results;
	 }; */

	this.getTypeCollecte = function() {

		return structureCollecteType;

	};

};

angular.module('starter.services', []).service('ServiceRecherche',
		ServiceRecherche);