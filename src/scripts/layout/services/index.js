'use strict';

module.exports = function(app) {
  // inject:start
  require('./famous.service')(app);
  require('./responsive.service')(app);
  // inject:end
};
