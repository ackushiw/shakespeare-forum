'use strict';

module.exports = function(app) {
    // inject:start
    require('./home-page.directive')(app);
    require('./resize.directive')(app);
    // inject:end
};