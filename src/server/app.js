var app = require('./lib');


app.use(function *() {
    //
    this.body = 'Hello World!'
});


// 启动app
app.listen(3000, function () {
    console.log('lifted!')
});