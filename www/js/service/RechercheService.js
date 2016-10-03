angular.module('starter.controllers')
.factory ('RechercheService', function ($filter, $translate, ParamService) {
  
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
		var defaultlanguage = ParamService.getParam("defaultlanguage");
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


    var _getStructure = function (code) {

        var expFilter =  { code : code };

        //On récupère la structure qui correspondant au code 
        var filterResult = $filter('filter')(structuresData, expFilter);

        if (filterResult.length > 0) {
            return filterResult[0];
        }
        else return null;

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

        var expFilter =  { code : code };

        //On récupère la fiche qui correspondant au code 
        var filterResult = $filter('filter')(advicesData, expFilter);

        if (filterResult.length > 0) {
            return filterResult[0];
        }
        else return null;

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


	/*  Récupération des modes de collecte à partir de leurs codes (séparés par des virgules)
	 * 
	 *  @example RechercheService.getConseils('cons_sansbouchon,cons_bouchonamour,cons_ferraille,cons_acier')
	 * 
	 */
	var _getModeDeCollectes = function(codes) {

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
     *  @example RechercheService.getCategorieDechet('cu_plastique')
     * 
     */
    var _getCategorieDechet = function (codeCategorie) {

        var expFilter =  { code : codeCategorie };

        //On récupère la fiche qui correspondant au code 
        var filterResult = $filter('filter')(categoriesData, expFilter);

        if (filterResult.length > 0) {
            return filterResult[0];
        }
        else return null;

    }

    /*  Récupération d'un déchet à partir de son code
     * 
     *  @example RechercheService.getDechet('dec_potPeinture')
     * 
     */
    var _getDechet = function (code) {

        var expFilter =  { code : code };

        //On récupère la fiche qui correspondant au code 
        var filterResult = $filter('filter')(garbagesData, expFilter);

        if (filterResult.length > 0) {
            return filterResult[0];
        }
        else return null;

    }

    var _getTypeCollecte = function () {
        
        return structureCollecteType;
        
    }   



return {
    escapeRegExp : _escapeRegExp,
    searchStructure : _searchStructure,
    getStructure : _getStructure,
    searchCollecteDomicile : _searchCollecteDomicile,
    getConseil : _getConseil,
    getConseils : _getConseils,
    getModeDeCollectes : _getModeDeCollectes,
    getCategorieDechet : _getCategorieDechet,
    getDechet : _getDechet,
    getTypeCollecte : _getTypeCollecte
  };
});
