'use strict';

/**
 * @ngdoc overview
 * @name proFileApp
 * @description
 * # proFileApp
 *
 * Main module of the application.
 */
var app = angular.module('proFileApp', ['ngResource', 'ngMaterial', 'ui.router', 'angular-svg-round-progressbar']);

app.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    //Theming
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
          'default': '900', // by default use shade 900 from the blue-grey palette for primary intentions
          'hue-1': '800'
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('light-blue', {
          'default': 'A700', // use shade 200 for default, and keep all other shades the same
          'hue-1': 'A400'
        });

        //Routes
        //For any umatched url, redirect to index
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: "views/main.html", 
                controller: 'MainCtrl'
            })
            .state('preview', {
                url: '/preview',
                templateUrl: "views/preview.html", 
                controller: 'PreviewCtrl'
            });

});
