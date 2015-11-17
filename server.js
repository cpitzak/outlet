'use strict'

var express = require('express'),
    path = require('path'),
    port = 8080,
    publicDir = path.dirname(require.resolve('./package.json')) + '/public',
    app = express(),
    logger = require('./lib/logger.js').getLogger();

require('./routes')(app);
app.use(express.compress());
app.use('/', express.static(publicDir));
app.listen(port);

logger.info('listening on port ' + port);
