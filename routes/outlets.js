var utils = require('../lib/utils'),
    logger = require('../lib/logger.js').getLogger(),
    mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db,
    server = new Server('localhost', 27017, {auto_reconnect: true});

db = new Db('outletdb', server);
db.open(function(err, db) {
   if(!err) {
      logger.info('Connected to outletdb');
   }
});

// GET /api/outlet/:id
exports.getOutlet = function(req, res) {
   var id = req.params.id,
       cp = require('child_process');
   if (!utils.isIntString(id)) {
       res.statusCode = 404;
       return res.send('Error 404: No outlet found');
   }
   db.collection('wines', {strict:true}, function(err, collection) {
       if (err) {
           logger.warn('The schedules collection does not exist!');
       }
   });
   //cp.exec("touch food.txt");
   res.send({id:id, name: 'Heater'});
};

// GET /api/schedule/:outletId
exports.getSchedule = function(req, res) {
  res.send({message: 'schedule not implemented'});
};

// GET /api/schedules
exports.getSchedules = function(req, res) {
  res.send({message: 'schedules not implemented'});
};
