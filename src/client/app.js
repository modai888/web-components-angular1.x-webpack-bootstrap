'use strict';

var isString = require('./tmp/b');
var isUndefined = require('./tmp/a');

module.exports = function () {
    var a;
    var b = a;
    console.log('a is undefined:' + isUndefined(a));
    console.log('b is string:' + isString(b));
};
