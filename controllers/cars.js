'use strict';

var CarsModel = require('../models/cars');


module.exports = function (router) {

    var model = new CarsModel();

    router.get('/', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        
    });

};
