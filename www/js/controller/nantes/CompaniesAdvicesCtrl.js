/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('CompaniesAdvicesCtrl', function($scope, $stateParams, $ionicPopup, RechercheService) {

	$scope.allzerodechet = RechercheService.getAllCompaniesAdvices();
	
	// An alert dialog
	$scope.showInfo = function(code) {

		var item = RechercheService.getACompaniesAdvice(code);

	    var alertPopup = $ionicPopup.alert({
	     	title: item.nom,
	     	template: item.descr
	    });

	   	$timeout(function() {
		    alertPopup.close(); //close the popup after 3 seconds for some reason
		}, 5000);

	};
});