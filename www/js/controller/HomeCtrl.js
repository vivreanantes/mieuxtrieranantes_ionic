/* PAGE ACCUEIL */

angular.module('starter.controllers').controller('HomeCtrl',

function($scope, $ionicPopup, $ionicSideMenuDelegate, $translate, ParamService, RechercheService, $rootScope) {

	// Récupère la langue courant. Initialise l'application avec cette langue.
	var temp = ParamService.getValueInLocalStorageWithDefault(
			"currentlanguage", "defaultlanguage");
	$translate.use(temp);
	
	$rootScope.collectmodsfilter = ParamService.getValueInLocalStorage("collectmodsfilter");

	$scope.myFunctionName = function() {
		// return true or false here
		if (isPageActive('accueil_nantes')) {
			return true;
		}
	};

	$scope.openMenu = function() {
		// $ionicSideMenuDelegate.toggleLeft();

	};

    $scope.news = RechercheService.getNews();
    

	// An alert dialog
	$scope.showInfo = function(codeOneNews) {

		var actu = RechercheService.getOneNews(codeOneNews);

	    var alertPopup = $ionicPopup.alert({
	     	title: actu.nom,
	     	template: actu.descr
	    });

	   	$timeout(function() {
		    alertPopup.close(); //close the popup after 3 seconds for some reason
		}, 5000);

	};

});
