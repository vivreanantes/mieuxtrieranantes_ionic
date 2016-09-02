/* PAGE ACCUEIL */
        
angular.module('starter.controllers').controller('HomeCtrl', function($scope, $ionicSideMenuDelegate) {
    
  // TEMP CRN
  $scope.myFunctionName = function(){
    //return true or false here
    if (isPageActive('accueil_nantes')) {
      return true;
    }
  };

  $scope.openMenu = function () {
    //$ionicSideMenuDelegate.toggleLeft();
    
  };

});