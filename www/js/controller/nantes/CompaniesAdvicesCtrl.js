/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('CompaniesAdvicesCtrl', function($scope, $stateParams, $ionicPopup, RechercheService) {

	$scope.allzerodechet = RechercheService.getAllCompaniesAdvices();
	$scope.toggleObject = new Array(20);
  for (var i = 0; i < 10; i++) {
    $scope.toggleObject[i] = new Array(20);
    for (var j = 0; j < 20; j++) {
      $scope.toggleObject[i][j] = -1;
    }
  }
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