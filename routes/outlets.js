var utils = require('../lib/utils');

exports.outletInfo = function(req, res) {
   var id = req.params.id,
       cp = require('child_process');
    if (!utils.isIntString(id)) {
       res.statusCode = 404;
       return res.send('Error 404: No outlet found');
    }
   //cp.exec("touch food.txt");
   res.send({id: id, name: 'Heater'});
};

// GET /api/outlet/:id/schedule
exports.scheduleInfo = function(req, res) {
	var id = req.params.id,
		cronstring = req.params.cronstring;

	console.log('getting schedule for id: ' + id);
	res.send({id: id, cronstring: '* * * * *'});
};

// POST /api/outlet/:id/schedule/:cronstring
exports.schedule = function(req, res) {
	var id = req.params.id,
		cronstring = req.params.cronstring,
		CronJob = require('cron').CronJob,
		job,
		job2;

		job = new CronJob('* * * * * *', function() {
			console.log('You will see this message every second');
		}, null, true, 'America/Los_Angeles');

		job2 = new CronJob({
			cronTime: '00 51 10 * * 1-5',
			onTick: function() {
				job.stop();
				console.log('stopped cron job');
			},
			start: true,
			timeZone: 'America/Los_Angeles'
		});

	console.log('setting schedule for id: ' + id + 'cronstring: ' + cronstring);
	res.send({id: id, message: 'scheduled'});
};