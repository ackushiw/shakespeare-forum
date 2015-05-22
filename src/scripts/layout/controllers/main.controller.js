'use strict';
var controllername = 'main';

module.exports = function(app) {
  /*jshint validthis: true */

  var deps = ['main.layout.famous'];

  function controller(famousLayout) {
    var vm = this;

    vm.setDimensions = function (width, height) {
      famousLayout.set(width, height);
    }
  }

  controller.$inject = deps;
  app.controller(app.name + '.' + controllername, controller);
};
