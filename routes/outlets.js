var utils = require('../lib/utils');

exports.outletInfo = function(req, res) {
   var id = req.params.id,
       cp = require('child_process');
    if (!utils.isIntString(id)) {
       res.statusCode = 404;
       return res.send('Error 404: No outlet found');
    }
   //cp.exec("touch food.txt");
   res.send({id:id, name: 'Heater'});
};
