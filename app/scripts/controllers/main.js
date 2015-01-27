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

    $scope.sortTuples = function(tupleList){
      return tupleList.sort(function(a, b) {
        return a[1] < b[1] ? 1 : -1;
      });
    };

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
        institutes: [
          {
            title: 'University of Southern California',
            location: 'Los Angeles, CA',
            course: 'Masters in Computer Science',
            desc: 'Specialization in Human Language technology (Applied Artificial Intelligence)',
            dates: '2008 - 2009'
          },
          {
            title: 'University of Waterloo',
            location: 'Ontario, Canada',
            course: 'Bachelor in Applied Science – Computer Engineering (Honors)',
            desc: 'Option in Software Engineering',
            dates: '2003 - 2008'
          }
        ]
      },
      learn: {
        languages: [
          ['python', 80],
          ['javascript', 70],
          ['C#', 60],
          ['Java ', 60],
          ['objective-c', 60],
          ['PHP', 50],
          ['Perl', 50],
          ['C / C++ ', 60],
          ['Self', 40]
        ],
        setups: [
          ['vim', 80],
          ['shell-scripting', 90],
          ['visual-studio', 80],
          ['eclipse', 80],
          ['x-code', 70]
        ],
        frameworks: [
          ['django', 70],
          ['flask', 60],
          ['jquery', 70],
          ['angular-js', 60],
          ['yeoman', 80],
          ['code-igniter', 50],
          ['mason', 50]
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
