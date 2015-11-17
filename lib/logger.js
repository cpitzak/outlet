exports.getLogger = function() {
  var winston = require('winston');
  winston.loggers.add('standard', {
       console: {
         level: 'silly',
         colorize: true
       }
  });
  logger = winston.loggers.get('standard');
  return logger;
};
