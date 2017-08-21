/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('JeuxCtrl', 
  function($scope, $stateParams) {
    //GLOBAL DATA SOURCE
    $scope.docs = _docsDatas;
  }
);