angular.module('starter.controllers').controller(
		'ConfigCtrl',
		function($scope, ParamService, RechercheService,
				$translate, $ionicModal) {
			$scope.lang = ParamService.getParam("available_language");
			$scope.collectmodsfilter = ParamService
					.getValueInLocalStorage("collectmodsfilter");

			$scope.switchLanguage = function() {

				var currentlanguage = $translate.proposedLanguage();
				if (currentlanguage === "fr") {
					$translate.use("en");
				} else {
					$translate.use("fr");
				}
				// RM-PA_LANGUE_01 On peut sauver la langue de l'utilisateur
				ParamService.setValueInLocalStorage("currentlanguage", currentlanguage);
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
			},

			$scope.selectAdress = function(mco) {
				ParamService.setValueInLocalStorage("collectmodsfilter", mco);
				var mco_filter_not = "";
				if (mco === "modco_bacbleu,modco_bacjaunenantes") {
					mco_filter_not = "modco_sacjaune,modco_sacbleu,modco_bacjaune"
				} else if (mco === "modco_bacbleu,modco_bacjaune") {
					mco_filter_not = "modco_sacjaune,modco_sacbleu,modco_bacjaunenantes"
				} else if (mco === "modco_sacjaune,modco_sacbleu") {
					mco_filter_not = "modco_bacbleu,modco_bacjaunenantes,modco_bacjaune"
				}
				ParamService.setValueInLocalStorage("mco_filter_not",
						mco_filter_not);
				$scope.collectmodsfilter = mco;
				$scope.modal.hide();
			}

		});
