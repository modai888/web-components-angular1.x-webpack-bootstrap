var events = require('events');
var util = require('util');

var koa = require('koa');

function KoaApp() {
    koa.call(this);
}

util.inherits(KoaApp, koa);

module.exports = KoaApp;