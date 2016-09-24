angular.module('starter.controllers').controller('ConfigCtrl',
		function($scope, StorageService, ParamService, $translate) {
			$scope.things = StorageService.getAll();
			
			$scope.add = function(newThing) {
				StorageService.add(newThing);
			};

			$scope.remove = function(thing) {
				StorageService.remove(thing);
			};

			// http://robferguson.org/2015/07/22/internationalisation-i18n-and-localisation-l10n-for-ionic-apps/
			$scope.switchLanguage = function() {
			var temp = ParamService.getParam("available_language");
				var tmp = $translate.proposedLanguage();
				if (tmp === "fr") {
					$translate.use("en");
				} else {
					$translate.use("fr");
				}
			}
		});