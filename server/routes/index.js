var router = require('koa-router')();


router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello Koa!',
    content:'mrhu'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello Koa!',
    content:'TalkingData'
  });
});

module.exports = router;
