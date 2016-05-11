'use strict';

/**
 * @ngdoc overview
 * @name proFileApp
 * @description
 * # proFileApp
 *
 * Main module of the application.
 */
angular
  .module('proFileApp', [
    'ngResource',
    'ngSanitize',
    'ngMaterial'
  ]).config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
          'default': '900', // by default use shade 900 from the blue-grey palette for primary intentions
          'hue-1': '800'
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('light-blue', {
          'default': '700', // use shade 200 for default, and keep all other shades the same
          'hue-1': 'A400'
        });
});
