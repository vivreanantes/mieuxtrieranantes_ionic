angular.module('starter.controllers')
.factory ('RechercheService', function ($filter, $translate, ParamService) {
  
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
   
  /*var structureCollecteType = [{
        name : 'Tous les lieux',
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
    }];*/

    var _escapeRegExp = function (str) {
    	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

	/**
	 * Renvoie le nom complet d'un paramètre.
	 * Exemples : "descr_en", "descr"
	 */
	var _getKeyWord = function(key) {
	 	var result = key;
		var currentlanguage = $translate.proposedLanguage();
		var defaultlanguage = ParamService.getParam("defaultlanguage", "fr");
		if (currentlanguage!==defaultlanguage) {
			result = key + "_"+ currentlanguage;
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
		var results=$filter('filter')(structuresData, 
        
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
            }
        );

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
		var results=$filter('filter')(garbagesData, 
        
            //CUSTOM FILTER
            function (item, index) {
      
            	var textTest = new RegExp(_escapeRegExp(searchKeyWordCleaned), 'ig');
            	var result = "";
				var currentlanguage = $translate.proposedLanguage();
               	result = textTest.test(item[motsClesComplet]);
                return result;
            }
        );

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
        var myRegexp = new RegExp(searchKeyWordCleaned, 'ig');

        //console.log(searchKeyWordCleaned);

        
        //On récupère la fiche qui correspondant au code 
        var filterResult = $filter('filter')(collecteDomicileData, 

            //CUSTOM FILTER
            function (item, index) {

                return (myRegexp.test(item.mots_cles));
                   
            }

        );

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

        var expFilter =  function(item, index, array) {

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
    
    var _getOneData = function(code, data) {
       var expFilter =  { code : code };
        //On récupère la fiche qui correspondant au code 
        var filterResult = $filter('filter')(data, expFilter);
        if (filterResult.length > 0) {
            return filterResult[0];
        }
        else return null;
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
	var _getModeDeCollectes = function(codes) {

    var mco_filter_not = ParamService.getValueInLocalStorage("mco_filter_not");
 

		var expFilter = function(item, index, array) {
			var test = codes.indexOf(item.code);
      
			if (test >= 0) {
           
        if (mco_filter_not==null) {
          // Si le filtre mco_filter_not n'est pas paramétré, on accepte tout.
          return true;
        }
        
				var test2 = mco_filter_not.indexOf(item.code);
        if (test2>=0) {
          return false;
        }
        else {
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
      if (filterName==="filter_collect_types") {
        result = [
          { "id" : "1", "code" : "smco_reemp|modco_decheterie|modco_ecopoint|modco_encombrants_resume|ventevrac", "nom" : "Tous les lieux" },
          { "id" : "2", "code" : "smco_reemp", "nom" : "Réemploi" },
          { "id" : "3", "code" : "modco_decheterie|modco_ecopoint", "nom" : "Déchèteries / Ecopoints", "nom_en" : "Déchèteries / Ecopoints"},
          { "id" : "4", "code" : "modco_encombrants_resume", "nom" : "Encombrants", "nom_en" : "Containers"},
          { "id" : "5", "code" : "ventevrac", "nom" : "Vente vrac", "nom_en" : "No packaging shops"}
        ];
      } else if (filterName==="filter_map") {
        result = [
          { "id" : "1", "code" : "smco_reemp", "nom" : "Réemploi", "image" : "resources/icons/marker-icon-blue.png" },
          { "id" : "2", "code" : "modco_contmpb,modco_contverre,modco_contembjournmag,modco_contomr,modco_dechetssecs", "nom" : "Conteneurs", "nom_en" : "Containers", "image" : "resources/icons/marker-icon-brown.png"},
          { "id" : "3", "code" : "modco_ecopoint,modco_decheterie", "nom" : "Déchèteries / Ecopoints", "nom_en" : "Déchèteries / Ecopoints", "image" : "resources/icons/marker-icon-green.png"},
          { "id" : "4", "code" : "modco_compostage", "nom" : "Composteurs", "nom_en" : "Composting", "image" : "resources/icons/marker-icon-yellow.png"},
          { "id" : "5", "code" : "smco_conteneurlerelais", "nom" : "Conteneurs vêtements", "nom_en" : "Containers clothes", "image" : "resources/icons/marker-icon-pink.png"},
          { "id" : "6", "code" : "ventevrac", "nom" : "Vente vrac", "nom_en" : "No packaging shops", "image" : "resources/icons/marker-icon-red.png"},
          { "id" : "7", "code" : "trisacs", "nom" : "Trisac", "nom_en" : "Trisac", "image" : "resources/icons/marker-icon-purple.png"},
          { "id" : "8", "code" : "modco_bouchons", "nom" : "Collecteurs (bouchons)", "nom_en" : "Collector (corks)", "image" : "resources/icons/marker-icon-grey.png"}
        ];        
      }
      return result;
    }

  return {
    escapeRegExp : _escapeRegExp,
    searchDechet : _searchDechet,
    searchStructure : _searchStructure,
    getStructure : _getStructure,
    searchCollecteDomicile : _searchCollecteDomicile,
    getConseil : _getConseil,
    getConseils : _getConseils,
    getNews : _getNews,
    getOneNews : _getOneNews,
    getAZeroDechet : _getAZeroDechet,
    getAllZeroDechet : _getAllZeroDechet,
    getACompaniesAdvice : _getACompaniesAdvice,
    getAllCompaniesAdvices : _getAllCompaniesAdvices,
    getModeDeCollectes : _getModeDeCollectes,
    getCategorieDechet : _getCategorieDechet,
    getDechet : _getDechet,
    getTypeCollecte : _getTypeCollecte,
    getAFilter : _getAFilter
  };
});
