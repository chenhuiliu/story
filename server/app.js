var koa = require('koa'),
  app = new koa(),
  logger = require('koa-logger'),
  json = require('koa-json'),
  views = require('koa-views'),
  onerror = require('koa-onerror'),
  path = require('path');


var index = require('./routes/index');
var interfaces = require('./routes/interfaces');
var setAllowResponse = require('./utils/setAllowResponse');

// error handler
onerror(app);

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'ejs'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function* (next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  setAllowResponse(this);
  if (this.method == 'OPTIONS') {
    this.status = 200;
    this.body = '';
  }
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(path.join(__dirname, '../client')));


// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(interfaces.routes(), interfaces.allowedMethods());

module.exports = app;