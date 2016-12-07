/* TRISAC */

angular.module('starter.controllers')
.controller('TrisacCtrl',

            function($scope, TrisacService) {

                $scope.trisac = TrisacService.getAll();

            }
)
.controller('TrisacDetailCtrl', function($scope, $stateParams, $filter, TrisacService) {

	var code = $stateParams.code;

	//On récupère la fiche qui correspondant au code 
	var filterResult = $filter('filter')(TrisacService.getAll(), {
		code : code
	});

	$scope.detail = filterResult[0];

    // Open Geo
    $scope.openMapLink = function(latitude, longitude) {
      var geoString = '';
      if(ionic.Platform.isIOS()) {
        geoString = 'maps://?q='+latitude+','+longitude+'';
      }
      else if(ionic.Platform.isAndroid()) {
        geoString = 'geo://?q='+latitude+','+longitude+'';
      } else {
        geoString = 'http://maps.google.fr/maps?f=q&hl=fr&q='+latitude+','+longitude+'';
      }
      window.open(geoString, '_system');
    }
});
