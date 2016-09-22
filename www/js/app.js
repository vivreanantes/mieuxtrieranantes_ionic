// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var myApp =angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'leaflet-directive', 'angular.filter', 'ui.select', 'ngSanitize', 'mtn.date', 'mtn.common', 'pascalprecht.translate']);

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});

myApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $translateProvider) {

  $ionicConfigProvider.tabs.position('bottom');
	$translateProvider.useStaticFilesLoader({
				prefix : 'resources/datas/nantes/labels_',
				suffix : '.json'
			},
			{
				prefix : 'resources/datas/nantes/structures_',
				suffix : '.json'
			});
	$translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
				'en' : 'en',
				'en_*' : 'en',
				'fr' : 'fr',
				'fr_*' : 'fr',
				'*' : 'fr'
			});
	$translateProvider.preferredLanguage("en");
	$translateProvider.fallbackLanguage("en");
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
		
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  .state('tab.dechet-cat', {
    url: '/dechet/cat',
    views: {
      'tab-dechet': {
        templateUrl: 'templates/tab-dechet-cat.html',
        controller: 'DechetCatCtrl'
      }
    }
  })
  
  .state('tab.carte', {
    url: '/carte',
    views: {
      'tab-carte': {
        templateUrl: 'templates/tab-carte.html',
        controller: 'CarteCtrl'
      }
    }
  })
  
  .state('tab.dechet-cat-sub', {
      url: '/dechet/cat/:code',
      views: {
        'tab-dechet': {
          templateUrl: 'templates/tab-dechet-cat-sub.html',
          controller: 'DechetCatSubCtrl'
        }
      }
   })

   .state('tab.dechet-detail', {
      url: '/dechet/detail/:code',
      views: {
        'tab-dechet': {
          templateUrl: 'templates/tab-dechet-detail.html',
          controller: 'DechetDetailCtrl'
        }
      }
   })

   .state('tab.fiches', {
    url: '/fiches',
    views: {
      'tab-fiches': {
        templateUrl: 'templates/tab-fiches.html',
        controller: 'FichesCtrl'
      }
    }
   })

   .state('tab.fiche-detail', {
    url: '/fiches/detail/:code',
    views: {
      'tab-fiches': {
        templateUrl: 'templates/tab-fiche-detail.html',
        controller: 'FichesDetailCtrl'
      }
    }
   })

  .state('tab.lieu', {
    url: '/lieu',
    views: {
      'tab-lieu': {
        templateUrl: 'templates/tab-lieu.html',
        controller: 'LieuCtrl'
      }
    }
  })

  .state('tab.lieu-detail', {
    url: '/lieu/detail/:code',
    views: {
      'tab-lieu': {
        templateUrl: 'templates/tab-lieu-detail.html',
        controller: 'LieuDetailCtrl'
      }
    }
   })

  .state('tab.domicile', {
    url: '/domicile',
    views: {
      'tab-domicile': {
        templateUrl: 'templates/nantes/tab-domicile.html',
        controller: 'DomicileCtrl'
      }
    }
  })

   .state('tab.quiz', {
    url: '/quiz',
    views: {
      'tab-quiz': {
        templateUrl: 'templates/tab-quiz.html',
        controller: 'QuizCtrl'
      }
    }
   })

   .state('tab.docs', {
    url: '/docs',
    views: {
      'tab-docs': {
        templateUrl: 'templates/tab-docs.html',
        controller: 'DocsCtrl'
      }
    }
   })

   .state('tab.trisac', {
    url: '/trisac',
    views: {
      'tab-trisac': {
        templateUrl: 'templates/nantes/tab-trisac.html',
        controller: 'TrisacCtrl'
      }
    }
   })

   .state('tab.trisac-detail', {
    url: '/trisac/detail/:code',
    views: {
      'tab-trisac': {
        templateUrl: 'templates/nantes/tab-trisac-detail.html',
        controller: 'TrisacDetailCtrl'
      }
    }
   })
   ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
