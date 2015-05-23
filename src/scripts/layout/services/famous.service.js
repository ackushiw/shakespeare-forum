'use strict';
var servicename = 'famous';

module.exports = function(app) {

  var dependencies = ['$famous', '$q', '$log'];

  function service($famous, $q, $log) {
    var dimensionsDefer = $q.defer();
    var dimensionsPromise = dimensionsDefer.promise;

    var deviceDefer = $q.defer();
    var devicePromise = deviceDefer.promise;

    var landscapeDefer = $q.defer();
    var landscapePromise = landscapeDefer.promise;

    var breakPoints = [ // width in px
      600, //mobile
      960, //tablet portrait
      1200 //tablet landscape
    ];

    service.dimensions = {
      width: 0,
      height: 0
    };

    //device settings
    service.init = true; //fresh View

    service.device = {
      sm: false, // > mobile
      md: false, // > tablet portrait
      lg: false, // > tablet landscape
      gtSm: false, // =< mobile
      gtMd: false, // =< tablet portrait
      gtLg: false // =< tablet landscape
    };

    service.landscape = false;

    function setDevice(mobile, tabletP, tabletL, desktop, callback) {
      var gtSm = false;
      var gtMd = false;
      var gtLg = desktop;
      if(mobile) {
        gtSm = false;
        gtMd = false;
        gtLg = false;
      } else {
        gtSm = true;
        if (tabletP) {
          gtMd = false;
          gtLg = false;
        } else {
          gtMd = true;
          if (tabletL) {
            gtLg = false;
          } else {
            gtLg = true;
          }
        }
      }
      service.device = {
        sm: mobile,    // > mobile
        md: tabletP,   // > tablet portrait
        lg: tabletL,   // > tablet landscape
        gtSm: gtSm,   // =< mobile
        gtMd: gtMd,   // =< tablet portrait
        gtLg: gtLg    // =< tablet landscape
      };
      deviceDefer.resolve(service.device);
      callback(service.device);
    }

    function checkDevice(width, height, callback) {
      //dimensionsPromise.then(function(dimensions){
        //$log.log('checkDevice', dimensions);
        //var width = service.dimensions.width;
        if(width < breakPoints[0]) {
          $log.log('sm', width);
          setDevice(true, false, false, false, callback);
        } else if(width < breakPoints[1]) {
          $log.log('md', width);
          setDevice(false, true, false, false, callback);
        } else if (width < breakPoints[2]) {
          $log.log('lg', width);
          setDevice(false, false, true, false, callback);
        } else {
          $log.log('gt-lg', width);
          setDevice(false, false, false, true, callback);
        }
      //});


    }

    function checkLandscape() {
      var defer = $q.defer();
      var width = service.dimensions.width;
      var height = service.dimensions.height;
      if(width > height) {
        service.landscape = true;
        //callback(service.landscape);
        defer.resolve(true);
      } else {
        service.landscape = false;
        //callback(service.landscape);
        defer.resolve(false);
      }
      return defer.promise;
    }

    function get() {
      var defer = $q.defer();
      dimensionsPromise.then(function(data) {
        $log.log('get data', data);
        $log.log('get dimensions', service.dimensions);
        if (data === service.dimensions) {
          defer.resolve(data);
        } else {
          defer.resolve(service.dimensions);
        }

      });
      return defer.promise;
    }

    function getDevice() {
      var defer = $q.defer();
      devicePromise.then(function (value) {
        defer.resolve(service.device);
      });
      return defer.promise;
    }

    function set(width, height) {
      dimensionsDefer = $q.defer();
      if (width && height) {
        service.dimensions = {
          width: width,
          height: height
        };

      } else {
        $log.error('no dimensions set');
      }

      checkDevice(service.dimensions.width, service.dimensions.height, testLogCallback);
      dimensionsDefer.resolve(service.dimensions);
      $log.log('famousLayout Set', service.dimensions);
    }

    function testLogCallback() {
      getDevice().then(function (value) {
        $log.log('testLog', value);
      });
      checkLandscape(test).then(function (value) {
        $log.log('testLog', value);
      });
    }
    function test (status) {
      $log.log('test', status);
    }

    return {
      get: get,
      getDevice: getDevice,
      getLandscape: checkLandscape,
      set: set
    };

  }
  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
