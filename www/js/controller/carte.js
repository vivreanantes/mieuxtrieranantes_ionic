/* CARTE */

angular.module('starter.controllers')
.controller('CarteCtrl', 
            function($scope, ServiceStructures, leafletData, leafletMapEvents) {
       
            angular.extend($scope, {
                center: {
                    lat: 47.22,
                    lng:  -1.52,
                    zoom: 11
                },

                layers: {
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

                position: {
                    lat: 47.2180,
                    lng: -1.5527
                },
                paths: {}

            });

            //CONTENEURS
            $scope.markers = ServiceStructures.getLeafletContainers($scope.center); 

            var leafletEventName = 'leafletDirectiveMap.moveend';
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

            });
    
});