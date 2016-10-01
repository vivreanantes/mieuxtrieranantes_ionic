angular.module('starter.controllers').controller(
		'ConfigCtrl',
		function($scope, ParamService, RechercheService,
				$translate, $ionicModal) {
			$scope.lang = ParamService.getParam("available_language");
			$scope.collectmodsfilter = ParamService
					.getValueInLocalStorage("collectmodsfilter");

			$scope.switchLanguage = function() {

				var tmp = $translate.proposedLanguage();
				if (tmp === "fr") {
					$translate.use("en");
				} else {
					$translate.use("fr");
				}
				// RM-PA_LANGUE_01 On peut sauver la langue de l'utilisateur
				ParamService.setValueInLocalStorage("currentlanguage", tmp);
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
				$scope.modal.hide();
			}

		});
