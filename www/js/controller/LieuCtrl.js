/* LIEUX */

angular.module('starter.controllers')
.controller('LieuCtrl',

        function($scope, RechercheService) {

            $scope.maxDisplayResults = 250;
	     	$scope.debug = true;
            
            //SELECT Type de structures                 
            $scope.typeCollecte = RechercheService.getTypeCollecte();

            //FORM MODEL : DEFAULTS
            $scope.formParam = {

                type : $scope.typeCollecte[0],
                searchkey : ''
            };

            //INIT RESULTS
            $scope.results = RechercheService.searchStructure('.*', '');

            $scope.onChangeType = function() {
                           
                $scope.results = RechercheService.searchStructure($scope.formParam.type.value, $scope.formParam.searchkey);

            };

            $scope.onSearchSubmit = function() {
                           
                $scope.results = RechercheService.searchStructure($scope.formParam.type.value, $scope.formParam.searchkey);

            };

        }
)
.controller('LieuDetailCtrl',

        function($scope, $stateParams, RechercheService) {
        
            var code = $stateParams.code;
            $scope.structure = RechercheService.getStructure(code);

        }

);

