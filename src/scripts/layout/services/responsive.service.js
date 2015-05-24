'use strict';
var servicename = 'responsive';

module.exports = function(app) {

  var dependencies = ['$famous', '$timeline', 'main.layout.famous', '$q', '$log'];

  function service($famous, $timeline, famousLayout, $q, $log) {
    //homeView
    var homeViewXs = {
      translate: [0, 56, 50],
      size: [undefined, undefined]
    };
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
    var homeViewLg = {
      translate: [300, 0, 50],
      size: [undefined, undefined]
    };
    var homeViewGtLg = {
      translate: [300, 0, 50],
      size: [undefined, undefined]
    };
    //navbar
    var navbarXs = {
      translate: [0, 0, 100],
      size: [undefined, 56]
    };
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
    var navbarLg = {
      translate: [0, 0, 100],
      size: [300, undefined]
    };
    var navbarGtLg = {
      translate: [0, 0, 100],
      size: [300, undefined]
    };
    //logo
    var logoXs = {
      translate: [50, 8, 120],
      size: [40, 40]
    };
    var logoSmP = {
      translate: [32, 8, 120],
      size: [100, 100]
    };
    var logoSmL = {
      translate: [50, 8, 120],
      size: [40, 40]
    };
    var logoMdP = {
      translate: [80, 8, 120],
      size: [100, 100]
    };
    var logoMdL = {
      translate: [50, 8, 120],
      size: [50, 50]
    };
    var logoLg = {
      translate: [25, 8, 120],
      size: [80, 80]
    };
    var logoGtLg = {
      translate: [25, 8, 120],
      size: [80, 80]
    };
    //title
    var titleXs = {
      translate: [0, -50, 110],
      size: [300, 0]
    };
    var titleSmP = {
      translate: [0, 80, 110],
      size: [360, 100]
    };
    var titleSmL = {
      translate: [100, 8, 110],
      size: [200, 40]
    };
    var titleMdP = {
      translate: [0, 80, 110],
      size: [600, 100]
    };
    var titleMdL = {
      translate: [100, 8, 110],
      size: [200, 50]
    };
    var titleLg = {
      translate: [0, 64, 110],
      size: [300, 70]
    };
    var titleGtLg = {
      translate: [0, 64, 110],
      size: [300, 70]
    };
    //primary
    var primaryXs = {
      translate: [0, 0, 0],
      size: [undefined, 300],
      align: [0, 0],
      origin: [0, 0]
    };
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
    var primaryLg = {
      translate: [0, 0, 0],
      size: [undefined, undefined],
      align: [0, 0],
      origin: [0, 0]
    };
    var primaryGtLg = {
      translate: [0, 0, 0],
      size: [undefined, undefined],
      align: [0, 0],
      origin: [0, 0]
    };
    //secondView
    var secondViewXs = {
      translate: [0, 200, 5],
      size: [300, 300],
      align: [0.5, 0],
      origin: [1, 0]
    };
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
      translate: [0, 320, 5],
      size: [300, 600],
      align: [0.5, 0],
      origin: [1, 0]
    };
    var secondViewMdL = {
      translate: [0, 0, 5],
      size: [300, 300],
      align: [0.6, 0],
      origin: [0, 0]
    };
    var secondViewLg = {
      translate: [0, 0, 5],
      size: [undefined, 300],
      align: [0, 1],
      origin: [0, 1]
    };
    var secondViewGtLg = {
      translate: [0, 0, 5],
      size: [undefined, 400],
      align: [0, 1],
      origin: [0, 1]
    };
    //thirdView
    var thirdViewXs = {
      translate: [0, 200, 10],
      size: [300, 300],
      align: [0.5, 0],
      origin: [0, 0]
    };
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
      translate: [0, 320, 10],
      size: [300, 600],
      align: [0.5, 0],
      origin: [0, 0]
    };
    var thirdViewMdL = {
      translate: [0, 0, 10],
      size: [300, 300],
      align: [0.6, 0.35],
      origin: [0, 0]
    };
    var thirdViewLg = {
      translate: [0, 0, 10],
      size: [undefined, 300],
      align: [0.4, 1],
      origin: [0, 1]
    };
    var thirdViewGtLg = {
      translate: [0, 0, 10],
      size: [undefined, 400],
      align: [0.4, 1],
      origin: [0, 1]
    };
    //socialbar
    var socialbarXs = {
      translate: [0, 0, 90],
      size: [undefined, 56],
      align: [0, 1],
      origin: [0, 1]
    };
    var socialbarSmP = {
      translate: [0, 0, 90],
      size: [undefined, 56],
      align: [0, 1],
      origin: [0, 1]
    };
    var socialbarSmL = {
      translate: [0, 0, 90],
      size: [undefined, 56],
      align: [0, 1],
      origin: [0, 1]
    };
    var socialbarMdP = {
      translate: [0, 0, 90],
      size: [undefined, 56],
      align: [0, 1],
      origin: [0, 1]
    };
    var socialbarMdL = {
      translate: [0, 0, 90],
      size: [undefined, 56],
      align: [0, 1],
      origin: [0, 1]
    };
    var socialbarLg = {
      translate: [0, 0, 150],
      size: [300, 56],
      align: [0, 1],
      origin: [0, 1]
    };
    var socialbarGtLg = {
      translate: [0, 0, 150],
      size: [300, 56],
      align: [0, 1],
      origin: [0, 1]
    };


    function homeView() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device, dimensions) {
        console.log(device);
        if(device.xs) {
          defer.resolve(homeViewXs);
        } else
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
        } else if(device.lg) {
          defer.resolve(homeViewLg);
        } else {
          defer.resolve(homeViewGtLg);
        }
      });
      return defer.promise;
    }

    function logo() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.xs) {
          defer.resolve(logoXs);
        } else
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
        } else if(device.lg) {
          defer.resolve(logoLg);
        } else {
          defer.resolve(logoGtLg);
        }
      });
      return defer.promise;
    }

    function navbar() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.xs) {
          defer.resolve(navbarXs);
        } else
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
        } else if(device.lg) {
          defer.resolve(navbarLg);
        } else {
          defer.resolve(navbarGtLg);
        }
      });
      return defer.promise;
    }

    function primary() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.xs) {
          defer.resolve(primaryXs);
        } else
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
        } else if(device.lg) {
          defer.resolve(primaryLg);
        } else {
          defer.resolve(primaryGtLg);
        }
      });
      return defer.promise;
    }

    function secondView() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.xs) {
          defer.resolve(secondViewXs);
        } else
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
        } else if(device.lg) {
          defer.resolve(secondViewLg);
        } else {
          defer.resolve(secondViewGtLg);
        }
      });
      return defer.promise;
    }

    function thirdView() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.xs) {
          defer.resolve(thirdViewXs);
        } else
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
        } else if(device.lg) {
          defer.resolve(thirdViewLg);
        } else {
          defer.resolve(thirdViewGtLg);
        }
      });
      return defer.promise;
    }

    function socialbar() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.xs) {
          defer.resolve(socialbarXs);
        } else
        if(device.sm || device.md) {
          famousLayout.getLandscape().then(function(landscape) {
            if(landscape) {
              if(device.sm) {
                defer.resolve(socialbarSmL);
              } else {
                defer.resolve(socialbarMdL);
              }
            } else if(device.sm) {
              defer.resolve(socialbarSmP);
            } else {
              defer.resolve(socialbarMdP);
            }
          });
        } else if(device.lg) {
          defer.resolve(socialbarLg);
        } else {
          defer.resolve(socialbarGtLg);
        }
      });
      return defer.promise;
    }

    function title() {
      var defer = $q.defer();
      famousLayout.getDevice().then(function(device) {
        if(device.xs) {
          defer.resolve(titleXs);
        } else
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
        } else if(device.lg) {
          defer.resolve(titleLg);
        } else {
          defer.resolve(titleGtLg);
        }
      });
      return defer.promise;
    }

    //combine all in one function?!
    function update(view) {
      var defer = $q.defer();
      var selectedView = JSON.parse(view);
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
      socialbar: socialbar,
      title: title
    };

  }
  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
