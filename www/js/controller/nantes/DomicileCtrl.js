/* TRISAC */

angular.module('starter.controllers')
.controller('DomicileCtrl',

            function($scope, $ionicPopup, $timeout, RechercheService) {
		
            	$scope.results = [];
            	$scope.searchKey = '';
            	$scope.maxDisplayResults = 30;
            	
            	$scope.onSearchSubmit = function(searchkey) {

            		$scope.results = RechercheService.searchCollecteDomicile(searchkey);


            	}

            	// An alert dialog
				$scope.showInfo = function(codeConseil) {

					var conseil = RechercheService.getConseil(codeConseil);
					//TODO : TRANSLATION

				    var alertPopup = $ionicPopup.alert({
				     	title: conseil.nom,
				     	template: conseil.descr
				    });

				   	$timeout(function() {
					    alertPopup.close(); //close the popup after 3 seconds for some reason
					}, 5000);

				};

            }
);
