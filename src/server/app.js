var app = require('./lib');
var handlebars = require('koa-handlebars');

// api
require('./api')(app);

app.use(handlebars({
    viewsDir: 'build',
    extension: ['html']
}));

// 后台管理页面
require('./admin/routes')(app);

// 启动app
app.listen(3000, function () {
    console.log('lifted!')
});