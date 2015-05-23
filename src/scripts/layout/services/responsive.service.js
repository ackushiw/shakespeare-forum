'use strict';
var servicename = 'responsive';

module.exports = function(app) {

  var dependencies = ['$famous', '$timeline', 'main.layout.famous', '$q', '$log'];

  function service($famous, $timeline, famousLayout, $q, $log) {
    //navbar
    var navbarSmP = {
      translate: [0, 0, 100],
      size: [undefined, 180]
    };
    var navbarSmL = {
      translate: [0, 0, 100],
      size: [undefined, 56]
    };
    var navbarMdP = {
      translate: [0, 0, 100],
      size: [undefined, 180]
    };
    var navbarMdL = {
      translate: [0, 0, 100],
      size: [undefined, 56]
    };
    //logo
    var logoSmP = {
      translate: [32, 8, 120],
      size: [100, 100]
    };
    var logoSmL = {
      translate: [50, 8, 120],
      size: [50, 50]
    };
    var logoMdP = {
      translate: [32, 8, 120],
      size: [100, 100]
    };
    var logoMdL = {
      translate: [50, 8, 120],
      size: [50, 50]
    };
    //title
    var titleSmP = {
      translate: [0, 80, 110],
      size: [undefined, 100]
    };
    var titleSmL = {
      translate: [100, 8, 110],
      size: [200, 40]
    };
    var titleMdP = {
      translate: [0, 80, 110],
      size: [undefined, 100]
    };
    var titleMdL = {
      translate: [100, 8, 110],
      size: [200, 40]
    };

    function logo() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(logoSmL);
              } else {
                defer.resolve(logoMdL);
              }
            } else if(device.sm) {
              defer.resolve(logoSmP);
            } else {
              defer.resolve(logoMdP);
            }
          });
        }
      });
      return defer.promise;
    }

    function navbar() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(navbarSmL);
              } else {
                defer.resolve(navbarMdL);
              }
            } else if(device.sm) {
              defer.resolve(navbarSmP);
            } else {
              defer.resolve(navbarMdP);
            }
          });
        }
      });
      return defer.promise;
    }

    function title() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(titleSmL);
              } else {
                defer.resolve(titleMdL);
              }
            } else if(device.sm) {
              defer.resolve(titleSmP);
            } else {
              defer.resolve(titleMdP);
            }
          });
        }
      });
      return defer.promise;
    }

    return {
      logo: logo,
      navbar: navbar,
      title: title
    };

  }
  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
