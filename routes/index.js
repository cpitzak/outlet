module.exports = function(app) {
  var outlets = require('./outlets');
  app.get('/api/outlet/:id', outlets.getOutlet);
  app.get('/api/schedule/:outletId', outlets.getSchedule);
  app.get('/api/schedules', outlets.getSchedules);
};
