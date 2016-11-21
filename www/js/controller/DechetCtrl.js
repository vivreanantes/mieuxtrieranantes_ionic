/* DECHETS */

var myCtrl = angular.module('starter.controllers');
	
	myCtrl.$inject = ['$scope', '$stateParams'];
	
	myCtrl.controller('DechetCatCtrl', function($scope, $state, RechercheService, ParamService, $rootScope) {
		
		//GLOBAL DATA SOURCE
		$scope.categories = _usualCategoriesDatas;
		$scope.itemPerRow = 3;

		$rootScope.collectmodsfilter = ParamService.getValueInLocalStorage("collectmodsfilter");
		
		//FORM MODEL : DEFAULTS
        $scope.formParam = {
			searchkey : ''
        };	
        //INIT RESULTS
        // $scope.results = RechercheService.searchDechet('');
        $scope.onChangeType = function() {
            $scope.results = RechercheService.searchDechet($scope.formParam.searchkey);
        };

        $scope.onSearchSubmit = function() {
					// var searchString = $scope.formParam.searchkey;
					$state.go('tab.dechet-result', { searchString: $scope.formParam.searchkey});
        };

	});

  myCtrl.controller('DechetResultCtrl', function($scope, $stateParams, RechercheService) {
		$scope.searchString = $stateParams.searchString;
		// $scope.results = RechercheService.searchDechet($scope.searchString);
		$scope.results = RechercheService.searchDechet($scope.searchString);

	});
	
	myCtrl.controller('DechetCatSubCtrl', function($scope, $stateParams, $filter, RechercheService) {
			var categorie_usuelle = RechercheService.getCategorieDechet($stateParams.code);
			$scope.categorie = categorie_usuelle;
			$scope.dechets = $filter('filter')(_garbagesDatas, {
						cat_usuel : categorie_usuelle.code
					});

		}
	);

	myCtrl.controller('DechetDetailCtrl', function($scope, $stateParams, $filter, RechercheService, $translate) {

		// On récupère le déchet qui correspondant au code 
		var dechet = RechercheService.getDechet($stateParams.code);

		// On récupère les conseils
		if (dechet.hasOwnProperty('cons')) {
			$scope.conseils = RechercheService.getConseils(dechet.cons);
		}

		// On récupère les modes de collecte
		if (dechet.hasOwnProperty('modco')) {
			$scope.modesDeCollecte = RechercheService.getModeDeCollectes(dechet.modco);
		}

			//Array modes collectes (split de la chaine)
			/*var modesCollectes = dechet.modco.split(",");

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
			});*/

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
		
		if (dechet.recyc === "PAS_POUBELLE") {
				dechet.recyc_color = "orange";
				dechet.recyc2 = "recyclable_pas_poubelle";
		} else if (dechet.recyc === "NON") {
				dechet.recyc_color = "red";
				dechet.recyc2 = "non";
		} else {
				dechet.recyc_color = "green";
				dechet.recyc2 = "oui";
		}
	
		//SCOPE
		$scope.dechet = dechet;

	});
