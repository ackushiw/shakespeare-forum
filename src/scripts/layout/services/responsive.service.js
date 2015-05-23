'use strict';
var servicename = 'responsive';

module.exports = function(app) {

  var dependencies = ['$famous', '$timeline', 'main.layout.famous', '$q', '$log'];

  function service($famous, $timeline, famousLayout, $q, $log) {
    //homeView
    var homeViewSmP = {
      translate: [0, 180, 50],
      size: [undefined, undefined]
    };
    var homeViewSmL = {
      translate: [0, 56, 50],
      size: [undefined, undefined]
    };
    var homeViewMdP = {
      translate: [0, 180, 50],
      size: [undefined, undefined]
    };
    var homeViewMdL = {
      translate: [0, 56, 50],
      size: [undefined, undefined]
    };
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
    //primary
    var primarySmP = {
      translate: [0, 0, 0],
      size: [undefined, 300],
      align: [0, 0],
      origin: [0, 0]
    };
    var primarySmL = {
      translate: [0, 0, 0],
      size: [undefined, undefined],
      align: [0, 0],
      origin: [0, 0]
    };
    var primaryMdP = {
      translate: [0, 0, 0],
      size: [undefined, 100],
      align: [0, 0],
      origin: [0, 0]
    };
    var primaryMdL = {
      translate: [0, 0, 0],
      size: [undefined, undefined],
      align: [0, 0],
      origin: [0, 0]
    };
    //secondView
    var secondViewSmP = {
      translate: [0, 200, 5],
      size: [300, 300],
      align: [0.5, 0],
      origin: [1, 0]
    };
    var secondViewSmL = {
      translate: [0, 0, 5],
      size: [300, 300],
      align: [0.6, 0],
      origin: [0, 0]
    };
    var secondViewMdP = {
      translate: [0, 0, 5],
      size: [300, 300],
      align: [0.5, 0],
      origin: [1, 0]
    };
    var secondViewMdL = {
      translate: [0, 0, 5],
      size: [300, 300],
      align: [0.6, 0],
      origin: [0, 0]
    };
    //thirdView
    var thirdViewSmP = {
      translate: [0, 200, 10],
      size: [300, 300],
      align: [0.5, 0],
      origin: [0, 0]
    };
    var thirdViewSmL = {
      translate: [0, 0, 10],
      size: [300, 300],
      align: [0.6, 0.35],
      origin: [0, 0]
    };
    var thirdViewMdP = {
      translate: [0, 0, 10],
      size: [300, 300],
      align: [0.5, 0],
      origin: [0, 0]
    };
    var thirdViewMdL = {
      translate: [0, 0, 10],
      size: [300, 300],
      align: [0.6, 0.35],
      origin: [0, 0]
    };

    function homeView() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(homeViewSmL);
              } else {
                defer.resolve(homeViewMdL);
              }
            } else if(device.sm) {
              defer.resolve(homeViewSmP);
            } else {
              defer.resolve(homeViewMdP);
            }
          });
        }
      });
      return defer.promise;
    }

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

    function primary() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(primarySmL);
              } else {
                defer.resolve(primaryMdL);
              }
            } else if(device.sm) {
              defer.resolve(primarySmP);
            } else {
              defer.resolve(primaryMdP);
            }
          });
        }
      });
      return defer.promise;
    }

    function secondView() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(secondViewSmL);
              } else {
                defer.resolve(secondViewMdL);
              }
            } else if(device.sm) {
              defer.resolve(secondViewSmP);
            } else {
              defer.resolve(secondViewMdP);
            }
          });
        }
      });
      return defer.promise;
    }

    function thirdView() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(thirdViewSmL);
              } else {
                defer.resolve(thirdViewMdL);
              }
            } else if(device.sm) {
              defer.resolve(thirdViewSmP);
            } else {
              defer.resolve(thirdViewMdP);
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
      homeView: homeView,
      logo: logo,
      navbar: navbar,
      primary: primary,
      secondView: secondView,
      thirdView: thirdView,
      title: title
    };

  }
  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
