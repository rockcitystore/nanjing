/**
 * Created by root on 16/9/5.
 */
"use strict";

const Promise = require('bluebird');
const constant = require("../utils/constant.js");
const loger = require("../utils/loger").getLogger('aframe');

let obj =(ctx, next) =>{
    return ctx.render('obj')

}

let ply =(ctx, next) =>{
    return ctx.render('ply');
}



module.exports = function (router,prefix) {
    router.get(prefix + '/obj', obj);
    router.get(prefix + '/ply', ply);
};
