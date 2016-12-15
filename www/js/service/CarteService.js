angular.module('starter.controllers')
.factory('CarteService', function ($filter, $translate, ParamService) {
  
  //GLOBAL DATA
  // var structuresData = _structuresDatas;
   
  var structureCollecteType = [{
        name : 'Tous',
        value : '.*'
    }, {
        name : "Déchèteries / Ecopoints",
        value : "modco_decheterie|modco_ecopoint"
    }, {
        name : "Encombrants",
        value : "modco_encombrants_resume"
    }, {
        name : "Réemploi",
        value : "smco_reemp"
    }, {
        name : "Vente vrac",
        value : "ventevrac"
    }];

  //Retourne Objet L.icon (Leaflet)
  var iconMapper = function (structure) {

      /*var iconTypeMap = {};
      iconTypeMap[modesCollecte] = '/img/marker_verre.png';
      iconTypeMap["Entreprise de réemploi"] = '/img/marker_verre.png';
      iconTypeMap["Conteneur verre, papier"] = '/img/marker_verre_carton.png';    
      iconTypeMap["Conteneur papier"] = '/img/marker_verre_carton.png';
      iconTypeMap["Conteneur verre, papier, canettes"] = '/img/marker_verre_carton_plastique.png';
      iconTypeMap["Conteneur papier, plastique"] = '/img/marker_verre_carton_plastique.png';
      iconTypeMap["Conteneur verre, plastique"] = '/img/marker_verre_carton_plastique.png';
      iconTypeMap["Conteneur emballages journaux magazines"] = '/img/marker_verre_carton_plastique.png';*/
      
      //LISTE des différentes icônes
      var iconCustom= {
                    //iconUrl: '/img/marker_verre.png',
                    //shadowUrl: '/img/leaf-shadow.png',
                    iconSize:     [32, 48], // size of the icon
                    shadowSize:   [32, 48], // size of the shadow
                    iconAnchor:   [15, 48], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 30],  // the same for the shadow
                    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
      };
      // var listModesCollecte = structure.modesCollecte.split(",");
      if (structure.modesCollecte.indexOf("smco_conteneurlerelais,") >= 0) {
        iconCustom.iconUrl="/img/marker-red.png";
      } else if ( structure.modesCollecte.indexOf("modco_contembjournmag") >= 0 ||
                  structure.modesCollecte.indexOf("modco_contverre") >= 0 ||
                  structure.modesCollecte.indexOf("marker_verre_carton") >= 0) {
        iconCustom.iconUrl="/img/marker_verre_carton_plastique.png";        
      } else {
        iconCustom.iconUrl="/img/marker-red.png";
      }

      return iconCustom;
      
  };

    
    /* Retourne tous les conteneurs (au format compatible Angular Leaflet)
     * car les conteneurs sont uniquement destinés à être affichés sur la carte Leaflet
       GLOBAL DATA _containersDatas    
      
      location = { lat: 47.22, lng:  -1.52}
      
    */   
    var _getLeafletContainers = function (centerLocation, stCollectMods) {

        // stCollectMods = "modco_reemploi";
        var leafletContainers={};
        //DISTANCE EN METRES MAX
        // var maxDistance=2800;
        
        var listCollectMods = stCollectMods.split(",");
        
        var expFilter =  function(item, index, array) {

            var modeCo = item.modesCollecte;
            var showTheMarker = false;
            if (typeof(modeCo)!="undefined") {
  
              var listItemCollectMods = modeCo.split(",");
              for (var i = 0; i<listItemCollectMods.length && showTheMarker===false; i++) {
                for (var j=0; j<listCollectMods.length && showTheMarker===false; j++) {
                  if (listCollectMods[j]===listItemCollectMods[i]) {
                    showTheMarker = true;
                  }
                }
                // showTheMarker = listItemCollectMods[i] in listCollectMods;
                // showTheMarker = _utilArrayContainObject(listCollectMods, listItemCollectMods[i]);
              }
            }
            return showTheMarker;
            // return true;
        };

        //Filtre des marqueurs pour le mode de collecte
        var tmpDatas = _containersDatas.concat(_structuresDatas);
       // var tmpDatas = _containersDatas;
        // var tmpDatas = _structuresDatas;
        var leafletContainersFiltered = $filter('filter')(tmpDatas, expFilter);
        var latlngInit = L.latLng(centerLocation.lat, centerLocation.lng);
        var maxDistance = ParamService.getNumberParam("geo.zoneDistance", 1500);
       
        for (var i = 0; i < leafletContainersFiltered.length ; i++) {  
        
            //SKIP structure invalide
            var container=leafletContainersFiltered[i];
            if (container.length === 0 || container.type == '') continue;

            //SKIP structure sans latitude ou longitude
            if (angular.isUndefined(container.latitude) || angular.isUndefined(container.longitude)) continue;

            //SKIP structure trop lointaine
            var latlngcurrent = L.latLng(parseFloat(container.latitude), parseFloat(container.longitude));
            var distance = latlngcurrent.distanceTo(latlngInit);
            if (distance > maxDistance) {
                continue;
            }
        
            var popuptext='<b>' + container.type + '</b><br/>';
            if (container.nom) {
            popuptext = popuptext + container.nom + '<br/>';
            };
            
            if (container.adresseTemp) {
            popuptext = popuptext + container.adresseTemp + '<br/>';
            }
        
            //Mapping data MTN => data Angular Leaflet
            leafletContainer={
                 lat: parseFloat(container.latitude),  //IMPORTANT : données origine de type string !
                 lng: parseFloat(container.longitude), //IMPORTANT : données origine de type string !                
                 message: popuptext,
                 //layer: 'markerLayer',
                 icon: iconMapper(container)
            };
        
            leafletContainers[container.code] = leafletContainer;
        
        }

        return leafletContainers;
   
    };

    
    return {
      
        getLeafletContainers : _getLeafletContainers,

    };
    
    
});
