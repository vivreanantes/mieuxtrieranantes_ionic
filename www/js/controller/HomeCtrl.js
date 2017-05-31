/* PAGE ACCUEIL */

angular.module('starter.controllers').controller('HomeCtrl',

	function ($scope, $ionicPopup, $ionicSideMenuDelegate, $translate, ParamService, RechercheService, $rootScope, $http, $timeout) {

	// Récupère la langue courant. Initialise l'application avec cette langue.
	var temp = ParamService.getValueInLocalStorageWithDefault("currentlanguage", "defaultlanguage");
	$rootScope.currentlanguage = temp;
	$translate.use(temp);

	$rootScope.collectmodsfilter = ParamService.getValueInLocalStorage("collectmodsfilter");

	$scope.openMenu = function () {
		// $ionicSideMenuDelegate.toggleLeft();
	};

	$scope.toggleObject = 1;

	///// NEWS /////

	// News are show in home page
	$scope.news = RechercheService.getNews();

	// News from web
	$scope.news = RechercheService.getNews();
	$http.get('http://www.mieuxtrieranantes.fr/scripts_php/news_json.php').
	then(function (response) {
		$scope.news2 = response.data;
	});

	// Collectes citoyennes
	$http.get('https://www.plastiques.eu/wp-json/wp/v2/actions/').
	then(function (response) {
		$scope.collects = response.data;
	});

	// An alert dialog for the news
	$scope.showNews = function (codeOneNews) {
		var actu = RechercheService.getOneNews(codeOneNews);
		// Open alert dialog
		var alertPopup = $ionicPopup.alert({
				title: actu.nom,
				template: actu.descr
			});
		// Close the popup after 20 seconds for some reason
		$timeout(function () {
			alertPopup.close();
		}, 20000);

	};

	// An alert dialog for the news
	$scope.showNews2 = function (nom, descr, link) {
		var temp = descr + "</i><br/><br/>Voir <a href=\"javascript:void(0);\" onclick=\"window.open('" + link + "', '_system', 'location=yes');\" >" + link + "</a>";
		// Open alert dialog
		var alertPopup = $ionicPopup.alert({
				title: nom,
				template: temp
			});
		// Close the popup after 20 seconds for some reason
		$timeout(function () {
			alertPopup.close();
		}, 20000);
	};

	// An alert dialog for the collects
	$scope.showCollect = function (nom, descr, link, datetime) {
		var temp = descr.substring(0, 180) + "...<br/><i>Date : " + datetime + "</i><br/><br/>Voir <a href=\"javascript:void(0);\" onclick=\"window.open('" + link + "', '_system', 'location=yes');\" >" + link + "</a>";
		// Open alert dialog
		var alertPopup = $ionicPopup.alert({
				title: nom,
				template: temp
			});
		// Close the popup after 20 seconds for some reason
		$timeout(function () {
			alertPopup.close();
		}, 20000);

	};
	///// GLOBAL SEARCH /////

	//FORM MODEL : DEFAULTS
	$scope.formParam = {
		searchkey: ''
	};
	// init results
	$scope.resultsGarbages = [];
	$scope.resultsPlaces = [];
	$scope.resultsDocs = [];
	$scope.resultsHomeCollects = [];
	$scope.resultsLength = -1;
	// handle search
	$scope.onSearchSubmit = function () {
		$searchkey = $scope.formParam.searchkey;
		$scope.resultsPlaces = RechercheService.searchStructure('.*', $searchkey);
		$scope.resultsGarbages = RechercheService.searchDechet($searchkey);
		$scope.resultsDocs = RechercheService.searchFiche($searchkey);
		// $scope.resultsHomeCollects = RechercheService.searchCollecteDomicile($searchkey);
		$scope.resultsLength = $scope.resultsPlaces.length + $scope.resultsGarbages.length + $scope.resultsDocs.length + $scope.resultsHomeCollects.length;
		if ($searchkey.indexOf(" ") > -1) {
			$scope.onlyOneResult = "1";
		} else {
			$scope.onlyOneResult = null;
		}
	};

	// An alert dialog for the advices
	$scope.showAdvice = function (codeConseil) {
		var conseil = RechercheService.getConseil(codeConseil);
		var alertPopup = $ionicPopup.alert({
				title: conseil.nom,
				template: conseil.descr
			});
		// Close the popup after 5 seconds for some reason
		$timeout(function () {
			alertPopup.close();
		}, 5000);
	};

	$scope.onToggleObject = function () {
		$scope.toggleObject =  - ($scope.toggleObject);
	}

	// Open Link
	$scope.openHrefLink = function (url) {
		window.open(url, '_system', 'location=yes');
		return false;
	}

});
