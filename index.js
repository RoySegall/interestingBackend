var yml = require('yamljs');
var thinky = require('thinky')(yml.load(__dirname + '/config/config.yml'));
var type = thinky.type;

// Get the modules.
var Room = require('./modules/room').setThinky(thinky).setType(type).createModel();