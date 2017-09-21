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
	function ($scope, $stateParams, leafletData, leafletMarkerEvents, CarteService, ParamService, RechercheService, $timeout) {
		$scope.isDrag = false;
		var lastPosition = null,
		filterMap = ParamService.getValueInLocalStorage("filter_map_checked"),
		tousModesDeCollecte = RechercheService.getAFilter("filter_map"),
		listFilterMap = filterMap.split(","),
		idsModeCollecte = "",
		labelsModeCollecte = "",
		activeWatch = undefined;

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

		var local_icons = paramIconsMap;
		angular.extend($scope, {
			icons: local_icons
		});


		/* INIT CARTE */
		var center = {
			lat: ParamService.getNumberParam("geo.defaultLat", 47.240987),
			lng: ParamService.getNumberParam("geo.defaultLong", -1.8),
			zoom: ParamService.getNumberParam("geo.zoomInit", 10)
		};
		angular.extend($scope, {
			center: center,
			markers: CarteService.getLeafletContainers(center, idsModeCollecte, local_icons),
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
					enable: ['drag'],
					logic: 'emit'
				}
			}

		});

		$scope.centerOnMe = function(){
			if(lastPosition!==null){
				$scope.center.lat = lastPosition.lat;
				$scope.center.lng = lastPosition.lng;
				$scope.isDrag = false;
			}
		};

		// EVENTS
		$scope.$on('leafletDirectiveMap.mymap.drag', function(event){
			if(lastPosition!==null)
				$scope.isDrag = true;
		});

		$scope.$on("$ionicView.beforeEnter", function(event, data){
			activeWatch = navigator.geolocation.watchPosition(function(position) {
				$timeout(function(){
					
					ParamService.setValueInLocalStorage("latitude", position.coords.latitude);
					ParamService.setValueInLocalStorage("longitude", position.coords.longitude);
					lastPosition = {
						lat: angular.copy(position.coords.latitude),
						lng: angular.copy(position.coords.longitude)
					};
					if($scope.isDrag===false){
						$scope.center.lat = angular.copy(position.coords.latitude);
						$scope.center.lng = angular.copy(position.coords.longitude);
					}
				});
			}, function(error) {},{
				maximumAge: 0,
				timeout:10000,
				enableHighAccuracy: true
			});
		});

		$scope.$on("$ionicView.beforeLeave", function(event, data){
			if(activeWatch !== undefined)
				navigator.geolocation.clearWatch(activeWatch);
		});

		$scope.$on('$destroy', function() {
			if(activeWatch !== undefined)
				navigator.geolocation.clearWatch(activeWatch);
		});

	//Récupération des marqueurs Leaflets
	$scope.labelsModeCollecte = labelsModeCollecte;

});