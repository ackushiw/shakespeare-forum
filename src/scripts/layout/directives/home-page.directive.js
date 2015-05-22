'use strict';
/*eslint consistent-this:[2,  "homePageCtrl"] */
var directivename = 'homePage';

module.exports = function(app) {

  // controller
  var controllerDeps = ['$famous'];
  var controller = function($famous) {
    var homePageCtrl = this;
    var vm = homePageCtrl;

    //famous
    var EventHandler = $famous['famous/core/EventHandler'];

    vm.eventsScroll = new EventHandler();

    vm.setDimensions = function () {
      console.log('resized');
    };
    // vm.grid.options = {
    //   dimensions: [2,2]
    // };
    homePageCtrl.directivename = directivename;
  };
  controller.$inject = controllerDeps;

  /*eslint-disable consistent-this */

  // directive
  var directiveDeps = [];
  var directive = function() {
    return {
      restrict: 'AE',
      scope: {
        title: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
      },
      controller: controller,
      controllerAs: 'homePageCtrl',
      bindToController: true,
      template: require('./home-page.directive.html'),
      compile: function(tElement, tAttrs) {
        return {
          pre: function(scope, element, attrs) {

          },
          post: function(scope, element, attrs) {
            scope.$on('resize', function($event) {

              scope.homePageCtrl.setDimensions($event);
            });
          }
        };
      }
    };
  };
  directive.$inject = directiveDeps;

  app.directive(directivename, directive);
};
