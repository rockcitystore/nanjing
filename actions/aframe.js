/**
 * Created by root on 16/9/5.
 */
"use strict";

const Promise = require('bluebird');
const constant = require("../utils/constant.js");
const loger = require("../utils/loger").getLogger('aframe');

let obj =(ctx, next) =>{
    loger.debug(111);
     ctx.render('obj')
}

let ply =(ctx, next) =>{
    ctx.render('ply')
}


module.exports = function (app,prefix) {
    app.get(prefix + '/obj', obj)
    app.get(prefix + '/ply', ply)
};
