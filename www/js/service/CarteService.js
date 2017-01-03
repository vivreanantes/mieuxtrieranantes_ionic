angular.module('starter.controllers')
.factory('CarteService', function ($filter, $translate, ParamService) {

	/* Retourne tous les conteneurs (au format compatible Angular Leaflet)
	 * car les conteneurs sont uniquement destinés à être affichés sur la carte Leaflet
	GLOBAL DATA _containersDatas

	location = { lat: 47.22, lng:  -1.52}

	 */
	var _getLeafletContainers = function (centerLocation, stCollectMods, localIcons) {

		var listCollectMods = stCollectMods.split(",");

		var expFilter = function (item, index, array) {

			var marqueur = item.carteMarqueur;
			var showTheMarker = false;
			if (typeof(marqueur) != "undefined") {

				for (var j = 0; j < listCollectMods.length && showTheMarker === false; j++) {
					if (listCollectMods[j] === marqueur) {
						showTheMarker = true;
					}
				}
			}
			return showTheMarker;
			// return true;
		};

		//Filtre des marqueurs pour le mode de collecte
		var tmpDatas = _containersDatas.concat(_structuresDatas);
		// var tmpDatas = _containersDatas;
		// var tmpDatas = _structuresDatas;
		var markersFiltered = $filter('filter')(tmpDatas, expFilter);

		var leafletContainers = {};
		for (var i = 0; i < markersFiltered.length; i++) {
			var leafletContainer = {};
			var container = markersFiltered[i];
			//SKIP structure sans latitude ou longitude
			if (angular.isUndefined(container.latitude) || angular.isUndefined(container.longitude))
				continue;

			if (container.carteMarqueur == 1) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.reemploi,
					focus: true,
					draggable: false
				};
			} else if (container.carteMarqueur == 2) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.conteneurs
				};
			} else if (container.carteMarqueur == 3) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.decheterie
				};
			} else if (container.carteMarqueur == 4) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.composteurs
				};
			} else if (container.carteMarqueur == 5) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.conteneurlerelais
				};
			} else if (container.carteMarqueur == 6) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.ventevrac
				};
			} else if (container.carteMarqueur == 7) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.trisac
				};
			} else if (container.carteMarqueur == 8) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.collectors
				};
			}
			leafletContainers[container.code] = leafletContainer;

		}
		return leafletContainers;
	};

	return {
		getLeafletContainers: _getLeafletContainers,
	};

});