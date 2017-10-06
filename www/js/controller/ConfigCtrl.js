angular.module('starter.controllers').controller(
	'ConfigCtrl',
	function ($scope, ParamService, RechercheService,
		$translate, $ionicModal, $rootScope) {
	$scope.lang = ParamService.getParam("available_language", "fr");
	// RM-PA_SAUVE_01 : Le paramétrage de l'application est conservé si on quitte l'application et que l'on relance.
	$rootScope.collectmodsfilter = ParamService.getValueInLocalStorage("collectmodsfilter");
	$rootScope.collectmodsfiltercomp = ParamService.getValueInLocalStorage("collectmodsfiltercomp");
	$rootScope.adressstored = ParamService.getValueInLocalStorage("adressstored");

	$scope.switchLanguage = function () {

		var currentlanguage = $translate.proposedLanguage();
		if (currentlanguage === "fr") {
			// RM-LA_LANGUE_02 : L’application peut être utilisée dans d’autres langues, définies au départ : anglais actuellement.
			currentlanguage = "en";
		} else {
			currentlanguage = "fr";
		}
		$translate.use(currentlanguage);
		// RM-PA_LANGUE_01 On peut sauver la langue de l'utilisateur
		// RM-PA_SAUVE_01 : Le paramétrage de l'application est conservé si on quitte l'application et que l'on relance.
		ParamService.setValueInLocalStorage("currentlanguage", currentlanguage);
		$rootScope.currentlanguage = currentlanguage;
	}

	$ionicModal.fromTemplateUrl('nantes/modal-domicile.html', {
		scope: $scope
	}).then(function (modal) {
		$scope.modal = modal;
		$scope.results = [];
		$scope.searchKey = '';
		$scope.maxDisplayResults = 30;
		$scope.translatevalues = {
			maxDisplayResults: $scope.maxDisplayResults
		};
	});

	$scope.onSearchSubmit = function (searchkey) {
		$scope.results = RechercheService
			.searchCollecteDomicile(searchkey);
		if (searchkey.indexOf(" ") > -1) {
			$scope.onlyOneResult = "1";
		} else {
			$scope.onlyOneResult = null;
		}
	},

	$scope.selectAdress = function (mco, adresse, dcv, ci) {
		
		// RM-PA_ADRESSE_02 : On peut sauver l’adresse du domicile dans le paramétrage, pour donner des résultats plus précis.
		// RM-PA_SAUVE_01 : Le paramétrage de l'application est conservé si on quitte l'application et que l'on relance.
		ParamService.setValueInLocalStorage("collectmodsfilter", mco);
		var temp = "";
		if (typeof dcv !== 'undefined') { temp = temp + dcv; }
		if (typeof ci !== 'undefined') { temp = temp + ci; }
		// temp = temp.replace(/<B>/g, "").replace(/<\/B>/g, "");
		ParamService.setValueInLocalStorage("collectmodsfiltercomp", temp);
		ParamService.setValueInLocalStorage("adressstored", adresse);

		var mco_filter_not = "";
		if (mco === "modco_bacbleunantes,modco_bacjaunenantes") {
			// bac nantes : retire sacs, bac jaune, bacs bleus hors nantes
			mco_filter_not = "modco_sacjaune,modco_sacbleu,modco_bacjaunehorsnantes,modco_bacbleuhorsnantes"
		} else if (mco === "modco_bacbleuhorsnantes,modco_bacjaunehorsnantes") {
			// bac hors nantes : retire sacs, bacs jaunes hors nantes, bacs bleus
			mco_filter_not = "modco_sacjaune,modco_sacbleu,modco_bacjaunenantes,modco_bacbleunantes"
		} else if (mco === "modco_sacjaune,modco_sacbleu") {
			// trisac : retire bacs bleus, bacs jaunes nantes, bacs jaunes hors nantes, bacs bleus hors nantes
			mco_filter_not = "modco_bacbleuhorsnantes,modco_bacjaunehorsnantes,modco_bacjaunenantes,modco_bacbleunantes"
		}
		ParamService.setValueInLocalStorage("mco_filter_not", mco_filter_not);
		$rootScope.collectmodsfilter = mco;
		$rootScope.collectmodsfiltercomp = temp;
		$rootScope.adressstored = adresse;
		$rootScope.collectmodsfilter_change = null;
		$scope.modal.hide();
	}

});
