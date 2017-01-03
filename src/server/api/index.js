var Router = require('koa-router');
var api = require('./controllers');

var router = new Router({
    prefix: '/api'
});

module.exports = function (app) {

    router
        .get('/users', api.getUsers)
        .get('/theme', api.getTheme);


    app.use(router.routes());
    app.use(router.allowedMethods());
};