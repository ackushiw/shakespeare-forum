'use strict';
 /*eslint consistent-this:[2,  "resizeCtrl"] */
var directivename = 'resize';

module.exports = function(app) {

  var directiveDeps = ['$timeout', 'resize'];
var directive = function($timeout, resize) {
  return {
    restrict: 'A',
    scope: {

      action: '&'
    },
    link: function(scope, element, attrs) {
      function emitDimensions() {
        scope.action({
          height: element.prop('offsetHeight'),
          width: element.prop('offsetWidth')
        });
      }

      $timeout(function() {
        console.log(element);
        console.log(element.prop('offsetHeight'));
        emitDimensions();
      }, 2000);

      scope.$on('resize', function($event) {

        emitDimensions();
      });
    }
  };
};
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};