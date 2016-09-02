


(function ( window, angular, undefined ) {
/*jshint globalstrict:true*/
'use strict';



function _utilRetireMotsInutiles(result) {
	result = result
			.replace(
					/allee|avenue|bas chemin|basse tenue|boulevard|chemin|cours|esplanade|hameau|haute impasse|impasse|jardin|mail|nouvelle impasse|parvis|passage|petit chemin|petite avenue|petite rue|place|pont|promenade|quai|rond-point|route|rue|ruelle|sentier|square|venelle|voie/g,
					"");
	//NOUVEAU !!
	//On supprime aussi les prépositions en francais (uniquement avec espace avant et après)
	result = result.replace(/ de | des | du | la | de la | d\' /g," ");

	return result;
}



/**
 * Met un nom au singulier : retire les s à la fin, ou les 'x' Exemple :
 * "emmaus,as,b" renvoie "emmau,emmaus,a,as,b," RM_RE_MODE_RECH_07
 */
function _utilMettreNomAuSingulier(mots) {
	// supprime le 's' en caractÃ¨re final
	// result = result.replace(/([^]*)s,$/, '$1,');
	var result = "";
	var codesCles = mots.split(',');
	var taille = codesCles.length;
	for (var j = 0; j < taille; j++) {
		var codeCle = codesCles[j];
		var fin = codeCle.substring(codeCle.length - 1, codeCle.length);
		var debut = codeCle.substring(0, codeCle.length - 1);
		if (fin == "s") {
			result = result + debut + "," + codeCle + ",";
		} else {
			result = result + codeCle + ",";
		}
	}
	return result;
}



/* -------------------- */
/* MODULE               */
/* -------------------- */
angular.module('mtn.common',['angular.filter'])
  .filter('searchTextClean', function($filter) {
    return function (texte) {
     
     		//SUPPRESSION ACCENTS via la LIB angular-filter qui est déja fait pour ça
    		var result = $filter('latinize')(texte);

		   	result = _utilRetireMotsInutiles(result);
			result = result.trim().toLowerCase();

			if (result != '') {
				// RM_RE_MODE_RECH_06, RM_RE_MOTS_CLES_02
				// Remplace les " " et les "+" par des virgules
				result = result.replace(/[ +]/g, ",");
				result = _utilMettreNomAuSingulier(result);
			}

    		return result;
    }

  })
  .filter('searchTextCleanAdresse', function($filter) {
    return function (texte) {
     
     		//SUPPRESSION ACCENTS via la LIB angular-filter qui est déja fait pour ça
    		var result = $filter('latinize')(texte);

		   	result = _utilRetireMotsInutiles(result);
			result = result.trim().toLowerCase();

    		return result;
    }

  })
     	/* -------------------- */
 	/* DIRECTIVE DEFINITION */
	/* -------------------- */
  .directive('mtnEtatRecyclable', function() {
   

    return {

        restrict: 'EA',

        replace: true,

        transclude: true,

        scope: {etat: '@etat'},

        template: function(tElem, tAttrs){

        	return '<div class="{{cssClass}}">{{labelRecyclable}}</div>';
        },

        link: function(scope, element, attrs){

        	var labelKey = scope.etat;
        	//TODO : Ajout translate
        	var labels = { 

        		OUI : 'Recyclable',
        		NON : 'Non Recyclable',
        		PAS_POUBELLE : 'Non Recyclable (ne pas mettre à la poubelle)',
        		OUI_ET_NON : 'Recycable (Bacs jaunes à Nantes uniquement)'
 
        	}; 

        	if (labels.hasOwnProperty(labelKey)) {

        		scope.labelRecyclable  = labels[labelKey];
        		var cssClass = 'recyclable_' + labelKey;
        		scope.cssClass = cssClass.toLowerCase();
        	}
        	else {

        		scope.labelRecyclable  = '';

        	}


        }

    };

  });




})( window, window.angular );







