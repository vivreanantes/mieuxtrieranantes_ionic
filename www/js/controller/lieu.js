/* LIEUX */

angular.module('starter.controllers')
.controller(
            'StructuresCtrl',
            function($scope, ServiceStructures) {

                    //SELECT Type de structures
                    $scope.typeCollecte = ServiceStructures.getTypeCollecte();
                    $scope.formSelected = {

                            type : $scope.typeCollecte[0],
                            searchKey : ''
                    };
                    $scope.results = [];

                    $scope.onChangeForm = function() {

                            $scope.results = ServiceStructures
                                            .search($scope.formSelected.type,
                                                    $scope.formSelected.searchKey);
                    };
            }
);

