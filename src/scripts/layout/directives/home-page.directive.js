'use strict';
/*eslint consistent-this:[2,  "homePageCtrl"] */
var directivename = 'homePage';

module.exports = function(app) {

  // controller
  var controllerDeps = ['$famous', 'main.layout.famous', 'main.layout.responsive', '$mdSidenav', '$window', '$timeout', '$log'];
  var controller = function($famous, famousLayout, responsive, $mdSidenav, $window, $timeout, $log) {
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
      duration: 500
    };
    var EventHandler = $famous['famous/core/EventHandler'];
    vm.eventsScroll = new EventHandler();
    vm.homeView = {
      translate: new Transitionable([0, 0, 0]),
      size: new Transitionable([0, 0])
    };

    function setHomeView(homeView) {
      //console.log('setting homeView', homeView);
      vm.homeView.translate.set(homeView.translate, defaultEasing);
      vm.homeView.size.set(homeView.size, defaultEasing);
    }
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

    vm.primary = {
      translate: new Transitionable([0, 0, 0]),
      size: new Transitionable([0, 0]),
      align: new Transitionable([0, 0]),
      origin: new Transitionable([0, 0])
    };

    function setPrimary(primary) {
      //console.log('setting title', title);
      vm.primary.translate.set(primary.translate, defaultEasing);
      vm.primary.size.set(primary.size, defaultEasing);
      vm.primary.align.set(primary.align, defaultEasing);
      vm.primary.origin.set(primary.origin, defaultEasing);
    }

    vm.secondView = {
      translate: new Transitionable([0, 0, 0]),
      size: new Transitionable([0, 0]),
      align: new Transitionable([0, 0]),
      origin: new Transitionable([0, 0])
    };

    function setSecondView(secondView) {
      //console.log('setting secondView', secondView);
      vm.secondView.translate.set(secondView.translate, defaultEasing);
      vm.secondView.size.set(secondView.size, defaultEasing);
      vm.secondView.align.set(secondView.align, defaultEasing);
      vm.secondView.origin.set(secondView.origin, defaultEasing);
    }

    vm.thirdView = {
      translate: new Transitionable([0, 0, 0]),
      size: new Transitionable([0, 0]),
      align: new Transitionable([0, 0]),
      origin: new Transitionable([0, 0])
    };

    function setThirdView(thirdView) {
      //console.log('setting thirdView', thirdView);
      vm.thirdView.translate.set(thirdView.translate, defaultEasing);
      vm.thirdView.size.set(thirdView.size, defaultEasing);
      vm.thirdView.align.set(thirdView.align, defaultEasing);
      vm.thirdView.origin.set(thirdView.origin, defaultEasing);
    }

    vm.socialbar = {
      translate: new Transitionable([0, 0, 0]),
      size: new Transitionable([0, 0]),
      align: new Transitionable([0, 0]),
      origin: new Transitionable([0, 0])
    };

    function setSocialbar(socialbar) {
      //console.log('setting socialbar', socialbar);
      vm.socialbar.translate.set(socialbar.translate, defaultEasing);
      vm.socialbar.size.set(socialbar.size, defaultEasing);
      vm.socialbar.align.set(socialbar.align, defaultEasing);
      vm.socialbar.origin.set(socialbar.origin, defaultEasing);
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

    vm.sidenav = {
      align: new Transitionable([-1, 0]),
      origin: new Transitionable([1, 0]),
      opacity: new Transitionable(0)
    };
    vm.openSidenav = function() {
      console.log('open seasame');
      vm.sidenav.align.set([0, 0], defaultEasing);
      vm.sidenav.origin.set([0, 0], defaultEasing);
      vm.sidenav.opacity.set(0.3, {
        curve: Easing.inExpo,
        duration: 500
      });
    };
    vm.closeSidenav = function() {
      vm.sidenav.align.set([-1, 0], defaultEasing);
      vm.sidenav.origin.set([1, 0], defaultEasing);
      vm.sidenav.opacity.set(0, {
        curve: Easing.inExpo,
        duration: 200
      });
    };
    vm.contactPage = false;
    vm.contactPageOrigin = vm.socialbar;
    vm.toggleContactPage = function(origin) {
      vm.contactPageOrigin = origin;
      if(vm.contactPage) {
        vm.socialbar.translate.set([0, 0, 90], defaultEasing);
        vm.socialbar.size.set([undefined, 56], defaultEasing);
        vm.socialbar.align.set([0, 1], defaultEasing);
        vm.socialbar.origin.set([0, 1], defaultEasing);
        vm.contactPage = false;
      } else {
        vm.socialbar.translate.set([0, 0, 400], defaultEasing);
        vm.socialbar.size.set([undefined, 500], defaultEasing);
        vm.socialbar.align.set([0, 1], defaultEasing);
        vm.socialbar.origin.set([0, 1], defaultEasing);
        vm.contactPage = true;
      }
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
      responsive.homeView().then(function(homeViewSettings) {
        setHomeView(homeViewSettings);
      });
      responsive.primary().then(function(primarySettings) {
        setPrimary(primarySettings);
      });
      responsive.secondView().then(function(secondViewSettings) {
        setSecondView(secondViewSettings);
      });
      responsive.thirdView().then(function(thirdViewSettings) {
        setThirdView(thirdViewSettings);
      });
      responsive.socialbar().then(function(socialbarSettings) {
        setSocialbar(socialbarSettings);

      });
      vm.contactPage = false;
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
