var log4js = require('log4js');
var config =require('../config');
// logger configure
log4js.configure({
    appenders: [
        {
            type: 'console'
        },
        // {
        //     type: 'log4js-ain2',
        //     tag: 'nanjing',
        //     facility: 'user',
        //     hostname:config.sysLog
        // }
    ],
    levels: {
        "[all]": "ALL"
    }
    ,
    replaceConsole: true
});

module.exports = log4js;