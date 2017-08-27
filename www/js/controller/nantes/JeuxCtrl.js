/* DOCUMENTATION */

angular.module('starter.controllers')
.controller('JeuxCtrl', 
  function($scope, $rootScope, ParamService, $stateParams) {
    //GLOBAL DATA SOURCE
    $scope.docs = _docsDatas;
        
    // RM-PA_SAUVE_01 : Le paramétrage de l'application est conservé si on quitte l'application et que l'on relance.
  	$rootScope.collectmodsfilter = ParamService.getValueInLocalStorage("collectmodsfilter");
  }
);