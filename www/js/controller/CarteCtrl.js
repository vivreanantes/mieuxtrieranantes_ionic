/* CARTE */

angular.module('starter.controllers')
.controller('CarteCtrl', 
            function($scope, $state, RechercheService, ParamService) {
                
       //ServiceStructures, leafletData, leafletMapEvents
       // $scope.modeCollecte = [ { "code" : "smco_conteneurlerelais", "libelle" : "Conteneur Le Relais" }, { "code" : "modco_contpapiercarton", "libelle" : "Conteneur papier/carton"} ];
      $scope.modeCollecte = RechercheService.getAFilter("filter_map");

      $scope.onSearchSubmit = function() {
        var temp = "";

        angular.forEach($scope.modeCollecte, function(val, index) {
            if (!angular.isUndefined($scope.modeCollecte[index].checked) && $scope.modeCollecte[index].checked) {
              temp += $scope.modeCollecte[index].id+",";
            }
        })
        if (temp.length>0) {
            temp = temp.substring(0,temp.length-1);
        }
        ParamService.setValueInLocalStorage("filter_map_checked", temp);
        $state.go('tab.carte-detail');
     };

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
            function($scope, $stateParams, leafletData, leafletMarkerEvents, CarteService, ParamService, RechercheService) {
            
      var filterMap = ParamService.getValueInLocalStorage("filter_map_checked");
      var modeCollecte = RechercheService.getAFilter("filter_map");
      var listFilterMap = filterMap.split(",");
      var codesModeCollecte = "";
      var labelsModeCollecte = "";
      var markersCircle = new Array();

      for (var i=0; i<modeCollecte.length;i++) {
            var ajoutModeCollecte = false;
            for (var j=0; j<listFilterMap.length && ajoutModeCollecte===false;j++) {
              if (modeCollecte[i].id===listFilterMap[j]) {
                ajoutModeCollecte = true;
              }
            }
            if (ajoutModeCollecte) {
              codesModeCollecte  += modeCollecte[i].code + ",";
              labelsModeCollecte += modeCollecte[i].nom + ", ";
            }
        }

      labelsModeCollecte = labelsModeCollecte.substring(0, labelsModeCollecte.length -2);


      // var temp=0;
     
            /* INIT CARTE */
            $scope.center = {
                    lat: ParamService.getNumberParam("geo.defaultLat", 47.240987),
                    lng: ParamService.getNumberParam("geo.defaultLong", -1.8),
                    zoom: ParamService.getNumberParam("geo.zoomInit", 10)
            };

            $scope.centerInit = angular.copy($scope.center);

            angular.extend($scope, {
                center: $scope.center,
                markers : CarteService.getLeafletContainers($scope.center, codesModeCollecte),
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

            /* Réaction évenement movend sur la carte */
            $scope.$on('leafletDirectiveMap.mymap.moveend', function(event){

                leafletData.getMap("mymap").then(
                    function (map) {
                       
                        var distanceAvantRedessiner = ParamService.getNumberParam('geo.zoneDistanceAvantRedessiner', 1000);
                        if (pointEstDansZoneLimitee(map.getCenter().lat, map.getCenter().lng, distanceAvantRedessiner) == false) {

                            $scope.markers = CarteService.getLeafletContainers($scope.center, codesModeCollecte);
                            $scope.centerInit = angular.copy($scope.center);
                            
                        }
                        ajouteCercleZoneLimitee(map.getCenter().lat, map.getCenter().lng);                      

                    }
                );

            });


            /**
             * Vérifie si les coordonnées en paramètre correspondent à un point de la
             * zône limitée.<br/> Invoque estDansZoneLimitee .
             */
            var pointEstDansZoneLimitee = function(lat, lng, distance) {

                var latlngcurrent = L.latLng(lat, lng);               
                var latlngInit = L.latLng($scope.centerInit.lat, $scope.centerInit.lng);

                var distanceEnMetre = latlngcurrent.distanceTo(latlngInit);
                var resultat = distanceEnMetre < distance;

                return resultat;
            };

            /**
             * Ajouter d'un cercle pour délimiter la zone d'affichage des marqueurs
             */
            var ajouteCercleZoneLimitee = function(lat,lng) {

                leafletData.getMap("mymap").then(
                    function (map) {

                        //Suppression des marqueurs existants
                        for(i=0; i<markersCircle.length; i++) {
                            map.removeLayer(markersCircle[i]);                                                        
                        }
                        markersCircle = new Array();

                        var distance = ParamService.getNumberParam('geo.zoneDistance', 1000);
                        var circle = L.circle([lat, lng], distance, 
                                {
                                    color : 'green',
                                    fillColor : '#c2e47e',
                                    fillOpacity : 0.15
                                });
                        circle.addTo(map);
                        markersCircle.push(circle);

                        var circle2 = new L.CircleMarker([lat, lng],
                                {
                                    rayon : 5,
                                    color : 'darkgreen',
                                    fillColor : "green",
                                    fillOpacity : 0.8
                                });
                        circle2.addTo(map);
                        markersCircle.push(circle2);

                    }
                );
               
            };


});