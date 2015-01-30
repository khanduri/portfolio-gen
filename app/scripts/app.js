'use strict';

/**
 * @ngdoc overview
 * @name grayscaleApp
 * @description
 * # grayscaleApp
 *
 * Main module of the application.
 */
angular
  .module('grayscaleApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
