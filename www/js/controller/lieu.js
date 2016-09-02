/* LIEUX */

angular.module('starter.controllers')
.controller('LieuCtrl',

        function($scope, ServiceRecherche) {

            $scope.maxDisplayResults = 25;

            //SELECT Type de structures                 
            $scope.typeCollecte = ServiceRecherche.getTypeCollecte();

            //FORM MODEL : DEFAULTS
            $scope.formParam = {

                type : $scope.typeCollecte[0],
                searchkey : '',
            };

            //INIT RESULTS
            $scope.results = ServiceRecherche.searchStructure('.*', '');

            $scope.onChangeType = function() {
                           
                $scope.results = ServiceRecherche.searchStructure($scope.formParam.type.value, $scope.formParam.searchkey);

            };

            $scope.onSearchSubmit = function() {
                           
                $scope.results = ServiceRecherche.searchStructure($scope.formParam.type.value, $scope.formParam.searchkey);

            };

        }
)
.controller('LieuDetailCtrl',

        function($scope, $stateParams, ServiceRecherche) {
        
            var code = $stateParams.code;
            $scope.structure = ServiceRecherche.getStructure(code);

        }

);

