/* PAGE ACCUEIL */

angular.module('starter.controllers').controller('HomeCtrl',

function($scope, $ionicSideMenuDelegate, $translate, ParamService) {

	// Récupère la langue courant. Initialise l'application avec cette langue.
	var temp = ParamService.getValueInLocalStorageWithDefault(
			"currentlanguage", "defaultlanguage");
	$translate.use(temp);

	$scope.myFunctionName = function() {
		// return true or false here
		if (isPageActive('accueil_nantes')) {
			return true;
		}
	};

	$scope.openMenu = function() {
		// $ionicSideMenuDelegate.toggleLeft();

	};
});
