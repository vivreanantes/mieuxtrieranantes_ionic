/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('DocsCtrl', function($scope, $stateParams) {

	//GLOBAL DATA SOURCE
	$scope.docs = _docsDatas;
  
  // Open Link
  $scope.openHrefLink = function(url) {
    window.open(url, '_system', 'location=yes');
    return false;
  }
});