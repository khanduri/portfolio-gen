'use strict';

/**
 * @ngdoc function
 * @name grayscaleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the grayscaleApp
 */
angular.module('grayscaleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
