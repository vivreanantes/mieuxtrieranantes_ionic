/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('ErrorCtrl', function($scope, $stateParams) {
	
	// Open Link
	// RM-TR_NAVIG_03 : Le bouton “écrire” permet de lancer l'application associée aux emails, ou sur un PC est un mailto.
	$scope.openHrefLink = function(url) {
	  window.open(url, '_system', 'location=yes');
	  return false;
	}
});