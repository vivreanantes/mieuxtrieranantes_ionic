angular.module('starter.controllers')
		.controller(
				'ConfigCtrl',
				function($scope, StorageService, ParamService, RechercheService, $translate,
						$ionicModal) {
					$scope.things = StorageService.getAll();

					$scope.add = function(newThing) {
						StorageService.add(newThing);
					};

					$scope.remove = function(thing) {
						StorageService.remove(thing);
					};

					// http://robferguson.org/2015/07/22/internationalisation-i18n-and-localisation-l10n-for-ionic-apps/
					$scope.switchLanguage = function() {
						// var temp = ParamService.getParam("available_language");
						var tmp = $translate.proposedLanguage();
						if (tmp === "fr") {
							$translate.use("en");
						} else {
							$translate.use("fr");
						}
					}

					$ionicModal.fromTemplateUrl('nantes/modale-domicile2.html',
							{
								scope : $scope
							}).then(function(modal) {
								$scope.modal = modal;
            	$scope.results = [];
            	$scope.searchKey = '';
            	$scope.maxDisplayResults = 30;
							});

					$scope.onSearchSubmit = function(searchkey) {
						$scope.results = RechercheService.searchCollecteDomicile(searchkey);
					},
					
					$scope.selectAdress = function(mco) {
						StorageService.add(mco);
						$scope.modal.hide();
					}
				
					
				});

/*
$scope.hashtag = function() {
	$scope.hashtagValue = 'blackandwhitephotography'; // if selected, it'll display this value

	$ionicModal.fromTemplateUrl('templates/nantes/modale-domicile.html', {
				scope : $scope,
				animation : 'slide-in-up',
				focusFirstInput : true
			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
};

$scope.openModal = function() {
	$scope.modal.show();
};

$scope.closeModal = function() {
	$scope.modal.hide();
};

$scope.$on('$destroy', function() {
			$scope.modal.remove();
		});

$scope.$on('modal.hidden', function() {
			// Execute action
		});

$scope.$on('modal.removed', function() {
			// Execute action
		});
}*/