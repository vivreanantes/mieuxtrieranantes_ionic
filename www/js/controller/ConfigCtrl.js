angular.module('starter.controllers').controller(
		'ConfigCtrl',
		function($scope, ParamService, RechercheService,
				$translate, $ionicModal) {
			$scope.lang = ParamService.getParam("available_language");
			$scope.collectmodsfilter = ParamService
					.getValue("collectmodsfilter");

			$scope.switchLanguage = function() {

				var tmp = $translate.proposedLanguage();
				if (tmp === "fr") {
					$translate.use("en");
				} else {
					$translate.use("fr");
				}
				// RM-PA_LANGUE_01 On peut sauver la langue de l'utilisateur
				ParamService.setValue("currentlanguage", tmp);
			}

			$ionicModal.fromTemplateUrl('nantes/modal-domicile.html', {
						scope : $scope
					}).then(function(modal) {
						$scope.modal = modal;
						$scope.results = [];
						$scope.searchKey = '';
						$scope.maxDisplayResults = 2;
						$scope.translatevalues = {
							maxDisplayResults : $scope.maxDisplayResults
						};
					});

			$scope.onSearchSubmit = function(searchkey) {
				$scope.results = RechercheService
						.searchCollecteDomicile(searchkey);
			},

			$scope.selectAdress = function(mco) {
				ParamService.setValue("collectmodsfilter", mco);
				$scope.modal.hide();
			}

		});
