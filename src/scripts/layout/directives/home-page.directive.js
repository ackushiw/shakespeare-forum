'use strict';
/*eslint consistent-this:[2,  "homePageCtrl"] */
var directivename = 'homePage';

module.exports = function(app) {

  // controller
  var controllerDeps = ['$famous', 'main.layout.famous', '$log'];
  var controller = function($famous, famousLayout, $log) {
    var homePageCtrl = this;
    var vm = homePageCtrl;

    //famous
    famousLayout.get().then(function (dimensions) {
      $log.log(dimensions);
    });
    var EventHandler = $famous['famous/core/EventHandler'];

    vm.eventsScroll = new EventHandler();
    vm.test = function () {
      famousLayout.getDevice().then(function (data) {
        $log.log('button test', data);
      });
    };



    // vm.grid.options = {
    //   dimensions: [2,2]
    // };
    homePageCtrl.directivename = directivename;
  };
  controller.$inject = controllerDeps;

  /*eslint-disable consistent-this */

  // directive
  var directiveDeps = ['main.layout.famous'];
  var directive = function(famousLayout) {
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

          }
        };
      }
    };
  };
  directive.$inject = directiveDeps;

  app.directive(directivename, directive);
};
