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
        first: 'Prashant',
        last: 'Khanduri'
      },
      desc: {
        first : 'The first line of description',
        second : 'Second line of description'
      },
      experience: [
        {
          fa_class: 'fa-spin fa-circle-o-notch',
          title: 'Jawbone',
          location: 'San Fransisco, CA',
          dates: '2014 - current',
          position: 'Programmer',
          body: [
            {
              team_name: 'Insights & Intelligence team',
              team_desc: 'The team is responsible for building an intelligent guide that helps our users make good health choices',
              duties: [
                'Working on bullding the core intelligence for the Smart Coach brand',
                'Working on building the Insights system and the internal CRM system to manage the insight content'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-comment-o',
          title:'Hearsay Social',
          location:'San Fransisco, CA',
          dates:'2012 - 2014',
          position:'Programmer',
          body: [
            {
              team_name: 'Engagement team',
              team_desc: 'Team\'s goal was to keep the user engagement up and unblock any onboarding issues (growing the monthly active users)',
              duties: [
                'Designed and developed a notification platform for our software',
                'Worked on building the analytics and reporting framework'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-windows',
          title:'Microsoft Inc',
          location:'Seattle, WA',
          dates:'2009 - 2012',
          position:'Software Developer',
          body: [
            {
              team_name: 'Bing - Relevance',
              team_desc: 'Team was responsible for ranking the top documents in Bing\'s algorithmic web search results (Top 100K queries)',
              duties: [
                'Developing new algorithms to extract ranking signals and features from petabytes of user browsing activity logs',
                'Using data mining and machine learning techniques to optimize user satisfaction metrics'
              ]
            },
            {
              team_name: 'Windows Live',
              team_desc: 'Worked with two separate groups (Service Management / Monetization) on delivering project critical components',
              duties: [
                'Implemented a service for syncing data from a system store to a DHCP server (for the server to hand out correct IP leases required for PXE booting)',
                'Helped design the next generation monetization solution to better target Hotmail users'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-code',
          title: 'Internships',
          location: 'Various Locations',
          dates: '2004 - 2009',
          position: 'Intern',
          body: [
            {
              team_name: 'Microsoft Corporation',
              team_desc: 'Windows Live Mesh - May 2009 – Aug 2009',
              duties: [
                'Created an assembly that provisioned a delegated authentication token management service'
              ]
            },
            {
              team_name: 'Amazon.com Inc',
              team_desc: 'Personalization - Aug 2007 - Dec 2007',
              duties: [
                'Worked on a ranking mechanism to generate a tag set which describe the list recommended items'
              ]
            },
            {
              team_name: 'Sun Microsystems',
              team_desc: 'Complex Systems Group - Jan 2006 - Apr 2006',
              duties: [
                'Participated in the design and development of a simulation infrastructure for the behavioral analysis of wireless sensor networks'
              ]
            },
            {
              team_name: 'Amazon.com Inc',
              team_desc: 'Digital Media Technologies - May 2005 - Aug 2005',
              duties: ['Worked on the variety of upgrades to the digital media pipeline (mainly the first internal REST client to the S3 service)'
              ]
            },
            {
              team_name: 'Epson Canada',
              team_desc: 'Barcode Recognition - Jan 2004 - Apr 2004',
              duties: [
                'Developed a universal 2D barcode decoding application for hand-held image-scanners'
              ]
            }
          ]
        }
      ],
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
      extra: {
        projects: [
          {name: 'color.js', link: 'https://github.com/khanduri/color.js'},
          {name: 'EZ Apps - iOS apps', link: 'http://ezapps.herokuapp.com/'},
          {name: 'Structure extractor - Craigslist', link: ''},
          {name: 'Transliteration - En to Hi', link: ''},
          {name: 'ANN - Emotion Recognition', link: ''},
          {name: 'Character Rise Me - Fb App', link: ''},
          {name: 'Sudoku Solver - CSP', link: ''}
        ],
        groups: [
          {name: 'Asha for Education', link: ''},
          {name: 'Ekal Vidyalaya', link: ''},
          {name: 'USC Trekkers group', link: ''},
          {name: 'Engineering Exploration Volunteer', link: ''}
        ],
        hobbies: [
          {name: 'Tennis / Racquet ball enthusiast', link: ''},
          {name: 'Running', link: ''},
          {name: 'Playing any outdoor sport', link: ''},
          {name: 'Practicing Yoga', link: ''}
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
