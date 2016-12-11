/* PAGE ACCUEIL */

angular.module('starter.controllers').controller('HomeCtrl',

function($scope, $ionicPopup, $ionicSideMenuDelegate, $translate, ParamService, RechercheService, $rootScope) {

	// Récupère la langue courant. Initialise l'application avec cette langue.
	var temp = ParamService.getValueInLocalStorageWithDefault("currentlanguage", "defaultlanguage");
	$translate.use(temp);
	
	$rootScope.collectmodsfilter = ParamService.getValueInLocalStorage("collectmodsfilter");

	$scope.openMenu = function() {
		// $ionicSideMenuDelegate.toggleLeft();
	};

	$scope.toggleObject = 1;
	
	///// NEWS /////
	
	// News are show in home page
  $scope.news = RechercheService.getNews();
    
	// An alert dialog for the news
	$scope.showNews = function(codeOneNews) {
		var actu = RechercheService.getOneNews(codeOneNews);
		// Open alert dialog
	  var alertPopup = $ionicPopup.alert({
	    title: actu.nom,
	    template: actu.descr
	  });
		// Close the popup after 5 seconds for some reason
	  $timeout(function() {
		  alertPopup.close();
		}, 5000);

	};
	
	///// GLOBAL SEARCH /////
	
  //FORM MODEL : DEFAULTS
  $scope.formParam = {
    searchkey : ''
   };
  // init results
	$scope.resultsGarbages = [];
	$scope.resultsPlaces = [];
	$scope.resultsHomeCollects = [];
	$scope.resultsLength = -1;
	// handle search
  $scope.onSearchSubmit = function() {
	    $searchkey = $scope.formParam.searchkey;
        $scope.resultsPlaces = RechercheService.searchStructure('.*', $searchkey);
	    $scope.resultsGarbages = RechercheService.searchDechet($searchkey);
	    // $scope.resultsHomeCollects = RechercheService.searchCollecteDomicile($searchkey);
	    $scope.resultsLength = $scope.resultsPlaces.length + $scope.resultsGarbages.length + $scope.resultsHomeCollects.length;
  };

	// An alert dialog for the advices
  $scope.showAdvice = function(codeConseil) {
    var conseil = RechercheService.getConseil(codeConseil);
	  var alertPopup = $ionicPopup.alert({
      title: conseil.nom,
      template: conseil.descr
    });
    // Close the popup after 5 seconds for some reason
    $timeout(function() {
      alertPopup.close();
  	}, 5000);
  };
	
	$scope.onToggleObject = function() {
		$scope.toggleObject = -($scope.toggleObject);
	}
});
