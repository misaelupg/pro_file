'use strict';

/**
 * @ngdoc function
 * @name proFileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proFileApp
 */
angular.module('proFileApp')
  .controller('MainCtrl', function () {
    var resume = this;
    resume.profile = [
        {   
            personProfile : {
                name: 'Misael Cázares',
                occupation: 'Web Developer',
                age: 23,
                birth_date: '2012-04-23'
            }

        }        
    ];
  });
