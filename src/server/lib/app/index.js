var KoaApp = require('./KoaApp');

module.exports = function KAppFactory() {
    return new KoaApp();
};