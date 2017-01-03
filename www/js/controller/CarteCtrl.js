/* CARTE */

angular.module('starter.controllers')
.controller('CarteCtrl',
	function ($scope, $state, RechercheService, ParamService) {

	$scope.tousModesDeCollecte = RechercheService.getAFilter("filter_map");

	$scope.onSearchSubmit = function () {
		var temp = "";

		angular.forEach($scope.tousModesDeCollecte, function (val, index) {
			if (!angular.isUndefined($scope.tousModesDeCollecte[index].checked) && $scope.tousModesDeCollecte[index].checked) {
				temp += $scope.tousModesDeCollecte[index].id + ",";
			}
		})
		if (temp.length > 0) {
			temp = temp.substring(0, temp.length - 1);
		}
		ParamService.setValueInLocalStorage("filter_map_checked", temp);
		$state.go('tab.carte-detail');
	};

})
.controller('CarteDetailCtrl',
	function ($scope, $stateParams, leafletData, leafletMarkerEvents, CarteService, ParamService, RechercheService) {

	var filterMap = ParamService.getValueInLocalStorage("filter_map_checked");
	var tousModesDeCollecte = RechercheService.getAFilter("filter_map");
	var listFilterMap = filterMap.split(",");
	var idsModeCollecte = "";
	var labelsModeCollecte = "";

	for (var i = 0; i < tousModesDeCollecte.length; i++) {
		var ajoutModeCollecte = false;
		for (var j = 0; j < listFilterMap.length && ajoutModeCollecte === false; j++) {
			if (tousModesDeCollecte[i].id === listFilterMap[j]) {
				ajoutModeCollecte = true;
			}
		}
		if (ajoutModeCollecte) {
			idsModeCollecte += tousModesDeCollecte[i].id + ",";
			labelsModeCollecte += tousModesDeCollecte[i].nom + ", ";
		}
	}

	labelsModeCollecte = labelsModeCollecte.substring(0, labelsModeCollecte.length - 2);

	var local_icons = {
		default_icon: {},
		reemploi: {
			iconUrl: "resources/icons/marker-icon-blue.png"
		},
		conteneurs: {
			iconUrl: "resources/icons/marker-icon-brown.png"
		},
		decheterie: {
			iconUrl: "resources/icons/marker-icon-green.png"
		},
		composteurs: {
			iconUrl: "resources/icons/marker-icon-yellow.png"
		},
		conteneurlerelais: {
			iconUrl: "resources/icons/marker-icon-pink.png"
		},
		ventevrac: {
			iconUrl: "resources/icons/marker-icon-red.png"
		},
		trisac: {
			iconUrl: "resources/icons/marker-icon-purple.png"
		},
		collectors: {
			iconUrl: "resources/icons/marker-icon-grey.png"
		}
	};
	angular.extend($scope, {
		icons: local_icons
	});


	/* INIT CARTE */
	$scope.center = {
		lat: ParamService.getNumberParam("geo.defaultLat", 47.240987),
		lng: ParamService.getNumberParam("geo.defaultLong", -1.8),
		zoom: ParamService.getNumberParam("geo.zoomInit", 10)
	};

	$scope.centerInit = angular.copy($scope.center);

	angular.extend($scope, {
		center: $scope.center,
		markers: CarteService.getLeafletContainers($scope.center, idsModeCollecte, local_icons),
		layers: {
			baselayers: {
				openStreetMap: {
					name: 'OpenStreetMap',
					type: 'xyz',
					url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				}
			},
		},
		events: {
			map: {
				enable: ['moveend'],
				logic: 'emit'
			}
		}

	});

	//Récupération des marqueurs Leaflets
	$scope.labelsModeCollecte = labelsModeCollecte;

});