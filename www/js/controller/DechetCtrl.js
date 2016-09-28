/* DECHETS */

var myCtrl = angular.module('starter.controllers');

myCtrl.controller('DechetCatCtrl', function($scope) {

			//GLOBAL DATA SOURCE
			$scope.categories = _usualCategoriesDatas;
			$scope.itemPerRow = 3;

		}

);

myCtrl.controller('DechetCatSubCtrl', function($scope, $stateParams, $filter, RechercheService) {
			var categorie_usuelle = RechercheService
					.getCategorieDechet($stateParams.code);
			$scope.categorie = categorie_usuelle;
			$scope.dechets = $filter('filter')(_garbagesDatas, {
						cat_usuel : categorie_usuelle.code
					});

		}

);

myCtrl.controller('DechetDetailCtrl', function($scope, $stateParams, $filter, RechercheService) {

			// On récupère le déchet qui correspondant au code 
			var dechet = RechercheService.getDechet($stateParams.code);

			// On récupère les conseils
			if (dechet.hasOwnProperty('cons')) {
				$scope.conseils = RechercheService.getConseils(dechet.cons);
			}

			// On récupère les modes de collecte
			if (dechet.hasOwnProperty('modco')) {
				$scope.modesDeCollecte = RechercheService
						.getModeDeCollectes(dechet.modco);
			}

			//Array modes collectes (split de la chaine)
			var modesCollectes = dechet.modco.split(",");

			//RE-FILTER sur les modes de collecte
			var modesCollectesFilter = $filter('filter')(_collectModsDatas,
			//CUSTOM INLINE FILTER
			function(value, index, fullarray) {
			            //Modes de collecte déchet           
			            myindex = modesCollectes.indexOf(value.code);
			            if (myindex >= 0)
			                    return true;
			            else
			                    return false;
			});

			    // CRN
			    // Tableau des conseils (découpage de la chaine)
			    if (dechet.cons != null) {
			            var conseils = dechet.cons.split(",");

			            // RE-FILTER sur les conseils
			            var conseilsFilter = $filter('filter')(_advicesDatas,
			            // CUSTOM INLINE FILTER
			            function(value, index, fullarray) {
			                    // Conseils déchet           
			                    myindex = conseils.indexOf(value.code);
			                    if (myindex >= 0) {
			                            return true;
			                    } else {
			                            return false;
			                    }
			            });
			    }
			    /*
			    if (dechet.recyc === "PAS_POUBELLE") {
			            dechet.recyc_color = "orange";
			            dechet.recyc = "Ne pas mettre à la poubelle";
			            dechet.recyc = _translate("label_NON")
			                            + _translate("label_pas_poubelle");
			    } else if (dechet.recyc === "NON") {
			            dechet.recyc_color = "red";
			            dechet.recyc = _translate("label_NON");
			    } else {
			            dechet.recyc_color = "green";
			            dechet.recyc = _translate("label_OUI");
			    }*/

			//SCOPE
			$scope.dechet = dechet;

		});
