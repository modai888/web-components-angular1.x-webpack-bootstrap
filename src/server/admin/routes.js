var Router = require('koa-router');

var controller = require('./controller');

var router = new Router({
    prefix: '/admin'
});

module.exports = function (app) {

    router
        .get('/', controller.index)
        .get('/layout', controller.index)
        .get('/redux', controller.index);


    app.use(router.routes());
    app.use(router.allowedMethods());
};