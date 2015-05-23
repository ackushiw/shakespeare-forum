'use strict';
/*eslint consistent-this:[2,  "homePageCtrl"] */
var directivename = 'homePage';

module.exports = function(app) {

  // controller
  var controllerDeps = ['$famous', 'main.layout.famous', 'main.layout.responsive', '$log'];
  var controller = function($famous, famousLayout, responsive, $log) {
    var homePageCtrl = this;
    var vm = homePageCtrl;

    //famous
    famousLayout.get().then(function(dimensions) {
      $log.log(dimensions);
    });
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var defaultEasing = {
          curve: Easing.outExpo,
          duration: 200
        };
    var EventHandler = $famous['famous/core/EventHandler'];
    vm.eventsScroll = new EventHandler();

    vm.logo = {
      translate: new Transitionable([0, 0, 0]),
      size: new Transitionable([0, 0])
    };
    function setLogo(logo) {
      //console.log('setting logo', logo);
      vm.logo.translate.set(logo.translate, defaultEasing);
      vm.logo.size.set(logo.size, defaultEasing);
    }

    vm.navSize = new Transitionable([undefined, undefined]);

    function setNavbar(nav) {
      vm.navSize.set(nav.size, defaultEasing);
    }

    vm.title = {
      translate: new Transitionable([0, 0, 0]),
      size: new Transitionable([0, 0])
    };
    function setTitle(title) {
      //console.log('setting title', title);
      vm.title.translate.set(title.translate, defaultEasing);
      vm.title.size.set(title.size, defaultEasing);
    }

    vm.test = function() {
      famousLayout.getDevice().then(function(data) {
        $log.log('button test', data);
      });
    };

    vm.updateResponsive = function(event) {
      responsive.logo().then(function(logoSettings) {
        setLogo(logoSettings);
      });
      responsive.navbar().then(function(navSettings) {
        setNavbar(navSettings);
      });
      responsive.title().then(function(titleSettings) {
        setTitle(titleSettings);
      });
    };

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
