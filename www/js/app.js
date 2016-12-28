// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var myApp =angular.module('starter', ['ionic', 'leaflet-directive', 'starter.controllers', 'angular.filter', 'ui.select', 'ngSanitize', 'mtn.date', 'mtn.common', 'pascalprecht.translate', 'ngStorage']);

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

myApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $translateProvider, $logProvider) {

	$translateProvider.translations('en', this._ihmLabelsEnDatas);
	$translateProvider.translations('fr', this._ihmLabelsFrDatas);
	$translateProvider.useStaticFilesLoader({
				prefix : 'resources/datas/nantes/DataLabels_',
				suffix : '.json'
			});
	$translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
				'en' : 'en',
				'en_*' : 'en',
				'fr' : 'fr',
				'fr_*' : 'fr',
				'*' : 'fr'
			});
	$ionicConfigProvider.tabs.position('bottom');
	$translateProvider.preferredLanguage("fr");
	$translateProvider.fallbackLanguage("fr");
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
		
  $logProvider.debugEnabled(false);

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
      'menuContent': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
	.state('tab.home-dechet-detail', {
		url: '/home/dechet-detail/:code',
		views: {
			'tab-home': {
				templateUrl: 'templates/tab-dechet-detail.html',
				controller: 'DechetDetailCtrl'
			}
		}
	})

	.state('tab.home-lieu-detail', {
		url: '/home/lieu-detail/:code',
		views: {
			'tab-home': {
				templateUrl: 'templates/tab-lieu-detail.html',
				controller: 'LieuDetailCtrl'
			}
		}
	})
	
  .state('tab.home.dechet', {
    url: '/home/dechet/:code',
    views: {
        'menuContent': {
          templateUrl: 'templates/tab-dechet-detail.html',
          controller: 'DechetDetailCtrl'
        }
      }
  })
  
  .state('tab.dechet-cat', {
    url: '/dechet/cat',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-dechet-cat.html',
        controller: 'DechetCatCtrl'
      }
    }
  })
  
  
  .state('tab.dechet-result', {
    url: '/dechet/result/:searchString',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-dechet-result.html',
        controller: 'DechetResultCtrl'/*,
        params: { searchString:{} }*/
      }
    }
  })
  
  /*.state('tab.dechet-result', {
    url: '/result',
    views: {
      'tab-dechet-result': {
        templateUrl: 'templates/tab-dechet-cat.html',
        controller: 'DechetCatCtrl'
      }
    }
  })
 */
  .state('tab.carte', {
    url: '/carte',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-carte.html',
        controller: 'CarteCtrl'
      }
    }
  })
  .state('tab.carte-detail', {
    url: '/carte/detail',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-carte-detail.html',
        controller: 'CarteDetailCtrl'
      }
    }
  })
  
  .state('tab.dechet-cat-sub', {
      url: '/dechet/cat/:code',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-dechet-cat-sub.html',
          controller: 'DechetCatSubCtrl'
        }
      }
   })

   .state('tab.dechet-detail', {
      url: '/dechet/detail/:code',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-dechet-detail.html',
          controller: 'DechetDetailCtrl'
        }
      }
   })

   .state('tab.fiches', {
    url: '/fiches',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-fiches.html',
        controller: 'FichesCtrl'
      }
    }
   })

   .state('tab.fiche-detail', {
    url: '/fiches/detail/:code',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-fiche-detail.html',
        controller: 'FichesDetailCtrl'
      }
    }
   })

  .state('tab.lieu', {
    url: '/lieu',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-lieu.html',
        controller: 'LieuCtrl'
      }
    }
  })

  .state('tab.lieu-detail', {
    url: '/lieu/detail/:code',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-lieu-detail.html',
        controller: 'LieuDetailCtrl'
      }
    }
   })

  .state('tab.domicile', {
    url: '/domicile',
    views: {
      'menuContent': {
        templateUrl: 'templates/nantes/tab-domicile.html',
        controller: 'DomicileCtrl'
      }
    }
  })

   .state('tab.quiz', {
    url: '/jeux/quiz',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-quiz.html',
        controller: 'QuizCtrl'
      }
    }
   })

   .state('tab.docs', {
    url: '/docs',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-docs.html',
        controller: 'DocsCtrl'
      }
    }
   })

   .state('tab.trisac', {
    url: '/trisac',
    views: {
      'menuContent': {
        templateUrl: 'templates/nantes/tab-trisac.html',
        controller: 'TrisacCtrl'
      }
    }
   })

   .state('tab.trisac-detail', {
    url: '/trisac/detail/:code',
    views: {
      'menuContent': {
        templateUrl: 'templates/nantes/tab-trisac-detail.html',
        controller: 'TrisacDetailCtrl'
      }
    }
   })
   
   
  .state('tab.jeux', {
    url: '/jeux',
    views: {
      'menuContent': {
        templateUrl: 'templates/nantes/tab-jeux.html',
        controller: 'JeuxCtrl'
      }
    }
  })

  .state('tab.zerodechetnantes', {
    url: '/zerodechetnantes',
    views: {
      'menuContent': {
        templateUrl: 'templates/nantes/tab-zerodechetnantes.html',
        controller: 'ZeroDechetCtrl'
      }
    }
   })
  .state('tab.companiesadvices', {
    url: '/companiesadvices',
    views: {
      'menuContent': {
        templateUrl: 'templates/nantes/tab-companiesadvices.html',
        controller: 'CompaniesAdvicesCtrl'
      }
    }
   })
  .state('tab.apropos', {
    url: '/apropos',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-apropos.html',
        controller: 'AProposCtrl'
      }
    }
  
  })
  
  .state('tab.config', {
    url: '/config',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-config.html',
        controller: 'ConfigCtrl'
      }
    }
  })
  /*
  .state('tab.modale.domicile', {
    url: '/modale-domicile',
    views: {
      'tab-config': {
        templateUrl: 'templates/nantes/modale-domicile.html',
        controller: 'ConfigCtrl'
      }
    }
  })*/
   ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
