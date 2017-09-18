/* FICHES */

angular.module('starter.controllers')
.controller('FichesCtrl', function ($scope, $stateParams, $ionicPopup, RechercheService) {

	//GLOBAL DATA SOURCE
	// $scope.fiches = _infosDatas;
            
    // SELECT Type de structures
    $scope.typeFiches = RechercheService.getAFilter("filter_fiches_types");

	$scope.fiches = RechercheService.searchFiche($scope.typeFiches[0].code, '');
			
	//FORM MODEL : DEFAULTS
	$scope.formParam = {
		type: $scope.typeFiches[0],
		searchkey: ''
	};

	$scope.onSearchSubmit = function () {
		$scope.fiches = RechercheService.searchFiche($scope.formParam.type.code, '');
		/*if ($scope.formParam.searchkey.indexOf(" ") > -1) {
			$scope.onlyOneResult = "1";
		} else {
			$scope.onlyOneResult = null;
		}*/
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
