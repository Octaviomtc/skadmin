var mongoose              = require('mongoose');
var request               = require('superagent');
var logger                = require("../utils/winston");
var idiomas     = mongoose.model('idiomas');
var moment                = require('moment');
var _                     = require('underscore');





exports.findIdiomas = function(req, res, next) {
    idiomas.find(function(err, idiomasList) {
        if(err) res.send(500, err.message);
        console.log("FindIdiomas");
        console.log(idiomasList);
        res.locals.idiomas = idiomasList;
        return next();
    });

};


exports.addIdioma = function(req, res, next) {

    var idioma = new escuela(req.body);

    idioma.save(function(err, unidad) {
        if(err) return res.send(500, err.message);
    return next(), req.flash('message','Idioma agregado');
    });
};
