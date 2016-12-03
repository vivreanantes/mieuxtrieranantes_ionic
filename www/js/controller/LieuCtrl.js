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
            $scope.results = RechercheService.searchStructure('.*', '');

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

        }

);

