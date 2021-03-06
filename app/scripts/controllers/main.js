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
        first : 'Software Developer at Affirm',
        second : 'Currently in San Francisco, CA'
      },
      experience: [
        {
          fa_class: 'fa-spin fa-credit-card',
          title: 'Affirm',
          location: 'San Fransisco, CA',
          dates: '2015 - current',
          position: 'Software Engineer',
          body: [
            {
              team_name: 'Platform team',
              team_desc: 'The team is responsible for building our own proprietary financial platform, as well as our real-time high-throughput data processing pipeline',
              duties: [
                'Build and maintain the bank authentication pipeline for pulling in account infromation',
                'Setting up dashboards for monitoring and alerting over bank auth pipeline'
              ]
            }
          ]
        },
        {
          fa_class: 'fa-circle-o-notch',
          title: 'Jawbone',
          location: 'San Fransisco, CA',
          dates: '2014 - 2015',
          position: 'Senior Software Engineer',
          body: [
            {
              team_name: 'Insights & Intelligence team',
              team_desc: 'The team is responsible for building an intelligent guide that helps our users make good health choices',
              duties: [
                'Building the core intelligence for the Smart Coach brand',
                'Building the Insights system and the internal CRM system to manage the insight content'
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
          {name: 'Workout Generator', link: 'https://workoutgen-stage.herokuapp.com/'},
          {name: 'color.js', link: 'https://github.com/khanduri/color.js'},
          {name: 'EZ Apps - iOS apps', link: 'http://ezapps.herokuapp.com/'},
          {name: 'Structure extractor - Craigslist', link: ''},
          {name: 'Transliteration - En to Hi', link: ''},
          {name: 'ANN - Emotion Recognition', link: ''},
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
          {name: 'Playing any outdoor sport', link: ''},
          {name: 'Practicing Yoga', link: ''}
        ]
      },
      learn: {
        current: {
          languages: [
            ['python', 90],
            ['javascript', 80],
            ['objective-c', 60]
          ],
          tools: [
            ['vim', 80],
            ['shell-scripting', 90]
          ],
          frameworks: [
            ['flask', 80],
            ['jquery', 70],
            ['angular', 60],
            ['yeoman', 60]
          ]
        },
        past: {
          languages: [
            ['C#', 80],
            ['Java ', 80],
            ['PHP', 50],
            ['Perl', 40],
            ['C / C++ ', 70],
            ['Self', 60]
          ],
          tools: [
            ['eclipse', 80],
            ['x-code', 60],
            ['visual-studio', 80]
          ],
          frameworks: [
            ['django', 80],
            ['code-igniter', 50],
            ['cake-php', 40],
            ['mason', 50]
          ]
        }
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
