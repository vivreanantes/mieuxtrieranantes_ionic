/* TRISAC */

angular.module('starter.controllers')
.controller('DomicileCtrl',

            function($scope, $ionicPopup, $timeout, ServiceRecherche) {
		
            	$scope.results = [];
            	$scope.searchKey = '';
            	$scope.maxDisplayResults = 30;
            	
            	$scope.onSearchSubmit = function(searchkey) {

            		$scope.results = ServiceRecherche.searchCollecteDomicile(searchkey);


            	}

            	// An alert dialog
				$scope.showInfo = function(codeConseil) {

					var conseil = ServiceRecherche.getConseil(codeConseil);
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
