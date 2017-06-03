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
		structureID = ["1","3","6","7"];
		var onlyStructure = true;
		// Si presence de conteneurs > alors j'ai que des structures est faux
		// 2 'conteneurs' est present, ou 4 'composteurs' est present, ou 5 'conteneurs vetements' est present, ou 8 'collecteurs bouchons' est present
		if (listCollectMods.indexOf("2")!=-1 || listCollectMods.indexOf("4")!=-1 || listCollectMods.indexOf("5")!=-1 || listCollectMods.indexOf("8")!=-1) {
			onlyStructure = false;
		}

		if (onlyStructure) {
			var tmpDatas = _structuresDatas;
		} else {
			var tmpDatas = _containersDatas.concat(_structuresDatas);
		}
		
		markersFiltered = $filter('filter')(tmpDatas, expFilter);
		// var tmpDatas = _containersDatas;
		// var tmpDatas = _structuresDatas;

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
					icon: localIcons.conteneurs,
					focus: false,
					draggable: false
				};
			} else if (container.carteMarqueur == 3) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.decheterie,
					focus: false,
					draggable: false
				};
			} else if (container.carteMarqueur == 4) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.composteurs,
					focus: false,
					draggable: false
				};
			} else if (container.carteMarqueur == 5) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.conteneurlerelais,
					focus: false,
					draggable: false
				};
			} else if (container.carteMarqueur == 6) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.ventevrac,
					focus: false,
					draggable: false
				};
			} else if (container.carteMarqueur == 7) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.trisac,
					focus: false,
					draggable: false
				};
			} else if (container.carteMarqueur == 8) {
				leafletContainer = {
					lat: parseFloat(container.latitude),
					lng: parseFloat(container.longitude),
					message: container.cartePopuptext,
					icon: localIcons.collectors,
					focus: false,
					draggable: false
				};
			}

			// Ajout d'un lien hypertext dans le message des structures
			if(structureID.indexOf(container.carteMarqueur)> -1||container.linkInPopup===true){
				leafletContainer.message += "<br><a href='#/tab/lieu/detail/"+container.code+"'>Voir la fiche</a>";
			}
			leafletContainers[container.code] = leafletContainer;

		}
		return leafletContainers;
	};

	return {
		getLeafletContainers: _getLeafletContainers,
	};

});
