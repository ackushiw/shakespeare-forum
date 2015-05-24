'use strict';
var controllername = 'main';

module.exports = function(app) {
  /*jshint validthis: true */

  var deps = ['main.layout.famous', '$mdSidenav', '$window'];

  function controller(famousLayout, $mdSidenav, $window) {
    var vm = this;

    vm.fullscreen = false;

    vm.toggleFullScreen = function () {
      console.log('toggleFullScreen');
      var doc = $window.document;
      var docEl = doc.body;

      var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
        vm.fullscreen = true;
      } else {
        cancelFullScreen.call(doc);
        vm.fullscreen = false;
      }
    };

    vm.toggleSidenav = function () {
     $mdSidenav('left')
              .open();
    };
    vm.test = function () {
      console.log('test mainCtrl');
    };
    vm.setDimensions = function(width, height) {
      famousLayout.set(width, height);
    };
  }

  controller.$inject = deps;
  app.controller(app.name + '.' + controllername, controller);
};
