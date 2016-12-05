/* LIEUX */

angular.module('starter.controllers')
.controller('LieuCtrl',

        function($scope, RechercheService) {

            $scope.maxDisplayResults = 250;
	     	$scope.debug = true;
            
            //SELECT Type de structures                 
            $scope.typeCollecte = RechercheService.getAFilter("filter_collect_types");
           
            //FORM MODEL : DEFAULTS
            $scope.formParam = {
                type : $scope.typeCollecte[0].id,
                searchkey : ''
            };

            //INIT RESULTS
            $scope.results = RechercheService.searchStructure('smco_reemp|modco_decheterie|modco_ecopoint|modco_encombrants_resume|ventevrac', '');

            $scope.onChangeType = function() {
                           
                $scope.results = RechercheService.searchStructure($scope.formParam.type.code, $scope.formParam.searchkey);

            };

            $scope.onSearchSubmit = function() {
                           
                $scope.results = RechercheService.searchStructure($scope.formParam.type.code, $scope.formParam.searchkey);

            };

        }
)
.controller('LieuDetailCtrl',

        function($scope, $stateParams, RechercheService) {
            var code = $stateParams.code;
            $scope.structure = RechercheService.getStructure(code);
            
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
              var hrefString = url;
              window.open(hrefString,'_blank','location=yes');
            }
        }
);

