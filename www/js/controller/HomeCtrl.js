/* PAGE ACCUEIL */
        
angular.module('starter.controllers').controller('HomeCtrl', function($scope, $ionicSideMenuDelegate, $translate) {
    
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

  // http://robferguson.org/2015/07/22/internationalisation-i18n-and-localisation-l10n-for-ionic-apps/
 $scope.switchLanguage = function() {
 var tmp = $translate.proposedLanguage();
 if (tmp==="fr") {
   $translate.use("en");
 } else {
   $translate.use("fr");
 }
 
};
});

