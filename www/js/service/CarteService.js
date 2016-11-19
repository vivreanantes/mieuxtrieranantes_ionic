angular.module('starter.controllers')
.factory('CarteService', function ($filter, $translate, ParamService) {
  
  //GLOBAL DATA
  var structuresData = _structuresDatas;
   
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
           
      var iconTypeMap = {};      
      iconTypeMap["Conteneur verre"] = '/img/marker_verre.png';
      iconTypeMap["Conteneurs verre"] = '/img/marker_verre.png';
      iconTypeMap["Conteneurs : verre, papier-carton"] = '/img/marker_verre_carton.png';    
      iconTypeMap["Conteneur papier-carton"] = '/img/marker_verre_carton.png';
      iconTypeMap["Conteneurs : verre, papier-carton, plastique"] = '/img/marker_verre_carton_plastique.png';
      iconTypeMap["Conteneurs : papier-carton, plastique"] = '/img/marker_verre_carton_plastique.png';
      iconTypeMap["Conteneurs : verre, plastique"] = '/img/marker_verre_carton_plastique.png';
      
      //LISTE des différentes icônes
      var iconDefault={};     
      var iconBase= {
                    //iconUrl: '/img/marker_verre.png',
                    //shadowUrl: '/img/leaf-shadow.png',
                    iconSize:     [32, 48], // size of the icon
                    shadowSize:   [32, 48], // size of the shadow
                    iconAnchor:   [15, 48], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 30],  // the same for the shadow
                    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
      };
      
      if (structure.type in iconTypeMap) {
          
          iconCustom=iconBase;
          iconCustom.iconUrl=iconTypeMap[structure.type];
          return iconCustom;
      } 
      else return iconDefault;
      
  };

    
    /* Retourne tous les conteneurs (au format compatible Angular Leaflet)
     * car les conteneurs sont uniquement destinés à être affichés sur la carte Leaflet
       GLOBAL DATA _containersDatas    
      
      location = { lat: 47.22, lng:  -1.52}
      
    */   
    var _getLeafletContainers = function (centerLocation, codeModeCollecte) {      

        var leafletContainers={};
        //DISTANCE EN METRES MAX
        var maxDistance=2800;
        
        var latlngCenterLocation = L.latLng(centerLocation.lat, centerLocation.lng);
        
        var expFilter =  function(item, index, array) {

            var modeCo = item.modesCollecte;
            var test = modeCo.indexOf(codeModeCollecte);
            return (test >= 0);

        };

        //Filtre des marqueurs pour le mode de collecte
        var leafletContainersFiltered = $filter('filter')(_containersDatas, expFilter);
       
        for (var i = 0; i < leafletContainersFiltered.length ; i++) {  
        
            //SKIP INVALID CONTAINER
            var container=leafletContainersFiltered[i];
            if (container.length === 0 || container.type == '') continue;
        
            popuptext='<b>' + container.type + '</b><br/>';
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
                 group: 'containers',
                // icon: iconMapper(container)
            };
        
            leafletContainers[container.code] = leafletContainer;
        
        }
   
        return leafletContainers;
   
    };
    
    return {
      
        getLeafletContainers : _getLeafletContainers,

    };
    
    
});
