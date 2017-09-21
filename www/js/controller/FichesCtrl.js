/* FICHES */

angular.module('starter.controllers')
.controller('FichesCtrl', function ($scope, $stateParams, $ionicPopup, RechercheService) {

     	    $scope.debug = false;
            
            //SELECT Type de structures                 
            $scope.typeFiches = RechercheService.getAFilter("filter_fiches_types");
           
            //FORM MODEL : DEFAULTS
            $scope.formParam = {
                type : $scope.typeFiches[0],
                searchkey : ''
            };


            //INIT RESULTS
            $scope.results = RechercheService.searchFiche($scope.typeFiches[0].code, '');


            $scope.onSearchSubmit = function() {          
                $scope.results = RechercheService.searchFiche($scope.formParam.type.code, $scope.formParam.searchkey);
            };


            //Choix du type de lieu (popup)
            $scope.selectType = function () {
              
              $ionicPopup.show({
              template: '<div ng-repeat="obj in typeFiches"> <ion-radio ng-model="formParam.type" ng-value="obj">{{obj.nom}}</ion-radio> </div>',
              cssClass: 'popup-fiches',
              title: 'Type de solutions',
              scope: $scope,
              buttons: [
                {
                  text: 'OK',
                  type: 'button-positive',
                  onTap: function(e) {

                    $scope.onSearchSubmit();
                    
                  }
                }
              ]
            });

          };



/*            
    // SELECT Type de structures
    $scope.typeFiches = RechercheService.getAFilter("filter_fiches_types");

	//FORM MODEL : DEFAULTS
	$scope.formParam = {
		type: $scope.typeFiches[0],
		searchkey: ''
	};

	$scope.fiches = RechercheService.searchFiche($scope.typeFiches[0].code, '');

	$scope.onSearchSubmit = function () {
		$scope.fiches = RechercheService.searchFiche($scope.formParam.type.code, '');
		$scope.onlyOneResult = null;
	};
	
	// Choix du type
	$scope.selectType = function () {

		$ionicPopup.show({
			template: '<div ng-repeat="obj in typeFiches"> <ion-radio ng-model="formParam.type" ng-value="obj">{{obj.nom}}</ion-radio> </div>',
			cssClass: 'popup-fiches',
			title: 'Type de solutions',
			scope: $scope,
			buttons: [{
					text: 'OK',
					type: 'button-positive',
					onTap: function (e) {

						$scope.onSearchSubmit();

					}
				}
			]
		});

	};
	*/
})
.controller('FichesDetailCtrl', function ($scope, $stateParams, $filter) {

	var fiche_code = $stateParams.code;
	//On récupère la fiche qui correspondant au code
	fiches = $filter('filter')(_infosDatas, {
			code: fiche_code
		});

	//Le filter renvoie necessairement un Array donc on extrait le premier élément trouvé
	var fiche = fiches[0];

	//SCOPE
	$scope.fiche = fiche;

	$scope.translatevalues = {
		descr: $scope.fiche.descr
	};

	if ($scope.fiche.urls) {
		$scope.lstUrls = $scope.fiche.urls.split(",");
	} else {
		$scope.lstUrls = [];
	}
	// Open Link
	$scope.openHrefLink = function (url) {
		window.open(url, '_system', 'location=yes');
		return false;
	}

});
