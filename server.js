'use strict'

var express = require('express'),
    path = require('path'),
    winston = require('winston'),
    outlets = require('./routes/outlets'),
    port = 8080,
    publicDir = path.dirname(require.resolve('./package.json')) + '/public',
    app = express(),
    logger;

    winston.loggers.add('standard', {
      console: {
        level: 'silly',
        colorize: true
      }
    });
    
    logger = winston.loggers.get('standard');

    app.get('/api/outlet/:id', outlets.outletInfo);

    app.use(express.compress());
    app.use('/', express.static(publicDir));
    app.listen(port);

    logger.info('listening on port ' + port);
