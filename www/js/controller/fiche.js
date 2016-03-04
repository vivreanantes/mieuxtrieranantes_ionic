/* FICHES */

angular.module('starter.controllers')
.controller('FichesCtrl', function($scope, $stateParams) {

	//GLOBAL DATA SOURCE
	$scope.fiches = _infosDatas;

})
.controller('FichesDetailCtrl', function($scope, $stateParams, $filter) {

	var fiche_code = $stateParams.code;
	//On récupère la fiche qui correspondant au code 
	fiches = $filter('filter')(_infosDatas, {
		code : fiche_code
	});

	//Le filter renvoie necessairement un Array donc on extrait le premier élément trouvé
	var fiche = fiches[0];

	//SCOPE
	$scope.fiche = fiche;

});
