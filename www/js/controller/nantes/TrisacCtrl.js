


/* TRISAC */

angular.module('starter.controllers')
.controller('TrisacCtrl',

            function($scope, ServiceTrisac) {

            		$scope.trisac = ServiceTrisac.getAll();                

            }
)
.controller('TrisacDetailCtrl', function($scope, $stateParams, $filter, ServiceTrisac) {

	var code = $stateParams.code;

	//On récupère la fiche qui correspondant au code 
	var filterResult = $filter('filter')(ServiceTrisac.getAll(), {
		code : code
	});

	$scope.detail = filterResult[0];

});
