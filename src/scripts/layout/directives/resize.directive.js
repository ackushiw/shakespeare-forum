'use strict';
/*eslint consistent-this:[2,  "resizeCtrl"] */
var directivename = 'resize';

module.exports = function(app) {

  var directiveDeps = ['$timeout', 'resize', 'main.layout.famous'];
  var directive = function($timeout, resize, famousLayout) {
    return {
      restrict: 'A',
      scope: {

        action: '&'
      },
      link: function(scope, element, attrs) {
        function emitDimensions() {
          var width = element.prop('offsetWidth');
          var height = element.prop('offsetHeight');
          scope.action({
            width: width,
            height: height
          });
          famousLayout.set(width, height);
        }

        $timeout(function() {
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
