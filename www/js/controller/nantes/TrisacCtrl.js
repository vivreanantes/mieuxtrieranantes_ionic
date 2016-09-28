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

});
