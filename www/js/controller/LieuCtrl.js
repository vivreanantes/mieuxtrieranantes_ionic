/* LIEUX */

angular.module('starter.controllers')
.controller('LieuCtrl',

        function($scope, $ionicPopup, RechercheService) {

            $scope.maxDisplayResults = 250;
	     	    $scope.debug = true;
            
            //SELECT Type de structures                 
            $scope.typeCollecte = RechercheService.getAFilter("filter_collect_types");
           
            //FORM MODEL : DEFAULTS
            $scope.formParam = {
                type : $scope.typeCollecte[0],
                searchkey : ''
            };


            //INIT RESULTS
            $scope.results = RechercheService.searchStructure('smco_reemp|modco_decheterie|modco_ecopoint|modco_encombrants_resume|ventevrac', '');


            $scope.onSearchSubmit = function() {
                           
                $scope.results = RechercheService.searchStructure($scope.formParam.type.code, $scope.formParam.searchkey);

            };


            //Choix du type de lieu (popup)
            $scope.selectTypeLieuPopup = function () {
              
              $ionicPopup.show({
              template: '<div ng-repeat="obj in typeCollecte"> <ion-radio ng-model="formParam.type" ng-value="obj">{{obj.nom}}</ion-radio> </div>',
              cssClass: 'popup-lieu',
              title: 'Type de lieu',
              scope: $scope,
              buttons: [
                {
                  text: 'OK',
                  type: 'button-positive',
                  onTap: function(e) {

                    $scope.onSearchSubmit();
                    
                  }
                }
              ]
            });

          };

  
})
.controller('LieuDetailCtrl',

        function($scope, $stateParams, RechercheService) {
            var code = $stateParams.code;
            $scope.structure = RechercheService.getStructure(code);
            
            $scope.isNavigator = !ionic.Platform.isIOS() && !ionic.Platform.isAndroid();
            if ($scope.isNavigator && $scope.structure.photos) {
                $scope.lstPhotos = $scope.structure.photos.split(",");
            } else {
                $scope.lstPhotos = [];
            }
            
            // Open Geo
            $scope.openMapLink = function(latitude, longitude) {
              var geoString = '';
              if(ionic.Platform.isIOS()) {
                geoString = 'maps://?q='+latitude+','+longitude+'';
              }
              else if(ionic.Platform.isAndroid()) {
                geoString = 'geo://?q='+latitude+','+longitude+'';
              } else {
                geoString = 'http://maps.google.fr/maps?f=q&hl=fr&q='+latitude+','+longitude+'';
              }
              window.open(geoString, '_system');
            }
            
            // Open Phone
            $scope.openPhoneLink = function(tel) {
              var telString = 'tel:'+tel+'';
              window.open(telString, '_system');
            }
            
            // Open Link
            $scope.openHrefLink = function(url) {
              window.open(url, '_system', 'location=yes');
              return false;
            }
        }
);

