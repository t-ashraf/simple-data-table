'use strict';

angular.
  module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<dat-table></dat-table>'
        }).
        otherwise('/');
    }
  ]);

  console.log('app config loaded');