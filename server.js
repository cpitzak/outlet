'use strict'

var express = require('express'),
    path = require('path'),
    outlets = require('./routes/outlets'),
    port = 8080,
    publicDir = path.dirname(require.resolve('./package.json')) + '/public',
    app = express(),
    logger = require('./lib/logger.js').getLogger();

    app.get('/api/outlet/:id', outlets.outletInfo);

    app.use(express.compress());
    app.use('/', express.static(publicDir));
    app.listen(port);

    logger.info('listening on port ' + port);
