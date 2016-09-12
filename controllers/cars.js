'use strict';

var CarsModel = require('../models/cars');


module.exports = function (router) {

    var model = new CarsModel();


        router.get('*', function (req, res) {
            res.render(req.url, model);
        });

};
