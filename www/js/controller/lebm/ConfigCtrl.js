angular.module('starter.controllers').controller(
		'ConfigCtrl',
		function($scope, ParamService, RechercheService,
				$translate, $ionicModal, $rootScope) {
			$scope.lang = ParamService.getParam("available_language", "fr");
			$rootScope.collectmodsfilter = ParamService
					.getValueInLocalStorage("collectmodsfilter");

			$scope.switchLanguage = function() {

				var currentlanguage = $translate.proposedLanguage();
				if (currentlanguage === "fr") {
					currentlanguage = "en";
				} else {
					currentlanguage = "fr";
				}
					$translate.use(currentlanguage);
				// RM-PA_LANGUE_01 On peut sauver la langue de l'utilisateur
				ParamService.setValueInLocalStorage("currentlanguage", currentlanguage);
				$rootScope.currentlanguage=currentlanguage;
			}

			$ionicModal.fromTemplateUrl('nantes/modal-domicile.html', {
						scope : $scope
					}).then(function(modal) {
						$scope.modal = modal;
						$scope.results = [];
						$scope.searchKey = '';
						$scope.maxDisplayResults = 30;
						$scope.translatevalues = {
							maxDisplayResults : $scope.maxDisplayResults
						};
					});

			$scope.onSearchSubmit = function(searchkey) {
				$scope.results = RechercheService
						.searchCollecteDomicile(searchkey);
				if (searchkey.indexOf(" ")>-1) {
					$scope.onlyOneResult = "1";
				} else {
					$scope.onlyOneResult = null;
				}
			},

			$scope.selectAdress = function(mco) {
				ParamService.setValueInLocalStorage("collectmodsfilter", mco);
				var mco_filter_not = "";
				if (mco === "modco_bacbleu,modco_bacjaunnantes") {
					// bac nantes : retire sacs, bac jaune, bacs bleus hors nantes
					mco_filter_not = "modco_sacjaune,modco_sacbleu,modco_bacjaune,modco_bacblenormal"
				} else if (mco === "modco_bacbleu,modco_bacjaune") {
					// bac hors nantes : retire sacs, bacs jaunes hors nantes, bacs bleus
					mco_filter_not = "modco_sacjaune,modco_sacbleu,modco_bacjaunnantes,modco_bacbleu"
				}
				ParamService.setValueInLocalStorage("mco_filter_not",
						mco_filter_not);
				$rootScope.collectmodsfilter = mco;
				$scope.modal.hide();
			}

		});
