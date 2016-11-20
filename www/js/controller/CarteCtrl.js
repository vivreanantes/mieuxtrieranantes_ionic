/* CARTE */

angular.module('starter.controllers')
.controller('CarteCtrl', 
            function($scope, RechercheService) {
                
       //ServiceStructures, leafletData, leafletMapEvents
       // $scope.modeCollecte = [ { "code" : "smco_conteneurlerelais", "libelle" : "Conteneur Le Relais" }, { "code" : "modco_contpapiercarton", "libelle" : "Conteneur papier/carton"} ];
      $scope.modeCollecte = RechercheService.getAFilter("filter_map");
            
            //CONTENEURS
            
            //$scope.markers = ServiceStructures.getLeafletContainers($scope.center); 

            //var leafletEventName = 'leafletDirectiveMap.moveend';
            /*
            $scope.$on(leafletEventName, function(event) {
                    //$scope.eventDetected = event.name;                     
                    leafletData.getMap().then(function(map) {

                           $scope.markers = ServiceStructures.getLeafletContainers(map.getCenter()); 
                           var circle= {
                                type: "circle",
                                radius: 1200,
                                latlngs: map.getCenter(),
                                color : 'green',
                                fillColor : '#c2e47e',
                                fillOpacity : 0.3,
                                weight : 3
                           };
                           $scope.paths = {};
                           $scope.paths['circle'] = circle;

                    });

            });*/
    
})
.controller('CarteDetailCtrl', 
            function($scope, $stateParams, leafletMarkerEvents, CarteService, ParamService) {
                
            //Récupération mode de collecte en argument 
            var codeModeCollecte = $stateParams.code;
                    /*   
                   */
            angular.extend($scope, {
                center: {
                    lat: ParamService.getNumberParam("geo.defaultLat", 47.240987),
                    lng: ParamService.getNumberParam("geo.defaultLong", -1.8),
                    // zoom: ParamService.getNumberParam("geo.zoomInit", 10)
                    zoom : 10
                },
                layers:
                {
                        baselayers: {
                            openStreetMap: {
                                name: 'OpenStreetMap',
                                type: 'xyz',
                                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            }
                        },
                        overlays: {
                            container: {
                                type: 'group',
                                name: 'containers',
                                visible: true
                            }
                        }
                },
                
            });
            
            
            $scope.$on("leafletDirectiveMap.mymap.load", function(event, args){
                var leafEvent = args.leafletEvent;
                $scope.markers = CarteService.getLeafletContainers($scope.center, codeModeCollecte);
                console.log('markers');
            });
            
            //Récupération des marqueurs Leaflets
            $scope.codeModeCollecte = codeModeCollecte;
            

                
});