/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('ZeroDechetCtrl', function($scope, $stateParams, $ionicPopup, RechercheService) {

	$scope.allzerodechet = RechercheService.getAllZeroDechet();
	
	// An alert dialog
	$scope.showInfo = function(codeZeroDechet) {

		var item = RechercheService.getAZeroDechet(codeZeroDechet);

	    var alertPopup = $ionicPopup.alert({
	     	title: item.nom,
	     	template: item.descr
	    });

	   	$timeout(function() {
		    alertPopup.close(); //close the popup after 3 seconds for some reason
		}, 5000);

	};
});