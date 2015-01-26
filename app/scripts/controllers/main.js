'use strict';

/**
 * @ngdoc function
 * @name grayscaleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the grayscaleApp
 */
angular.module('grayscaleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.profile = {
      name: {
        first: 'First',
        middle: undefined,
        last: 'Last'
      },
      desc: {
        first : 'The first line of description',
        second : 'Second line of description'
      },
      education: {
        background: '../images/education-bg.jpg'
      },
      learn: {
        languages: [
          ['python', 80],
          ['javascript', 70],
          ['C#', 70],
          ['Java ', 70],
          ['objective-c', 60],
          ['PHP', 60],
          ['Perl', 60],
          ['C / C++ ', 60],
          ['Self', 40],
        ],
        setups: [
          ['vim', 90],
          ['shell-scripting', 90],
          ['git(hub)', 80],
          ['stash', 80],
          ['bitbucket', 80],
          ['jira', 80]
        ],
        tools: [
          ['svn', 100],
          ['cvs', 100],
          ['perforce', 80],
          ['eclipse', 80],
          ['visual-studio', 80],
          ['iis', 80],
          ['apache', 80]
        ],
        frameworks: [
          ['django', 60],
          ['flask', 40],
          ['jquery', 70],
          ['angular-js', 50],
          ['yeoman', 70],
          ['x-code', 50],
          ['code-igniter', 30],
          ['mason', 30]
        ]
      },
      dates: {
        current: new Date()
      },
      social: {
        github: 'khanduri',
        twitter: 'khandurip',
        linkedin: 'prashantkhanduri',
        facebook: 'prashant.khanduri'
      }
    };

    $scope.scroll = function(pointer){
      $('body').animate({scrollTop: $(pointer).offset().top}, "slow");
    };
  });
