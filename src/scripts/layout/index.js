'use strict';
require('angular-ui-router');
require('angular-material');
require('famous-angular');
require('ng-resize');

var modulename = 'layout';

module.exports = function(namespace) {

  var fullname = namespace + '.' + modulename;

  var angular = require('angular');
  var app = angular.module(fullname, ['ui.router', 'famous.angular', 'ngMaterial', 'ngResize']);
  // inject:folders start
  require('./controllers')(app);
  require('./directives')(app);
  require('./services')(app);
  // inject:folders end

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home', {
        url: '/',
        template: require('./views/home.html'),
        controller: fullname + '.main',
        controllerAs: 'homeCtrl'
      }).state('home.contact', {
        url: 'contact',
        views: {
          'contact': {
            template: require('./views/contact.html'),
            controller: ['$scope', function($scope) {
              var vm = this;

            }],
            controllerAs: 'contactCtrl'
          }
        }

      });
    }
  ]);

  return app;
};
