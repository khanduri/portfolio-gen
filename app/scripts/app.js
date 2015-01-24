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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
