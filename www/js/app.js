// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', "firebase"])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
    .factory("Items", function($firebaseArray) {
    var itemsRef = new Firebase("https://luminous-fire-9407.firebaseio.com/");
    return $firebaseArray(itemsRef);
})

    .factory("InscriptionData", function($firebaseArray) {
        var inscriptionDataRef = new Firebase("https://luminous-fire-9407.firebaseio.com/");
        return $firebaseArray(inscriptionDataRef);
    })

    .factory('Camera', ['$q', function($q) {

        return {
            getPicture: function(options) {
                var q = $q.defer();

                navigator.camera.getPicture(function(result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        }
    }])

    .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
  })
      .state('app.youtubeur', {
          url: '/youtubeur',
          views: {
              'menuContent': {
                  templateUrl: 'templates/youtubeur.html',
                  controller: 'YoutubeurCtrl'
              }
          }
      })
      .state('app.info', {
          url: '/info',
          views: {
              'menuContent': {
                  templateUrl: 'templates/info.html',
                  controller: 'InfoCtrl'
              }
          }
      })
      .state('app.accueil', {
          url: '/accueil',
          views: {
              'menuContent': {
                  templateUrl: 'templates/accueil.html',
                  controller: 'AccueilCtrl'
              }
          }
      })
      .state('app.inscription', {
          url: '/inscription',
          views: {
              'menuContent': {
                  templateUrl: 'templates/inscription.html',
                  controller: 'InscriptionCtrl'
              }
          }
      })
      .state('app.database', {
          url: '/database',
          views: {
              'menuContent': {
                  templateUrl: 'templates/database.html',
                  controller: 'DatabaseCtrl'
              }
          }

      })
      .state('app.galerie', {
          url: '/galerie',
          views: {
              'menuContent': {
                  templateUrl: 'templates/galerie.html',
                  controller: 'GalerieCtrl'
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/accueil');
});
