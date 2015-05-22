'use strict';

module.exports = function(app) {
  // inject:start
  require('./famous.service')(app);
  // inject:end
};
