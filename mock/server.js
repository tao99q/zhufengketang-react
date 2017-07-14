let Koa = require('koa');
let app = new Koa();
let Router = require('koa-router');
let cors = require('koa-cors');
let router = new Router();
router.get('/api/sliders',function(ctx){
  ctx.body = require('./data/slider');
});
router.get('/api/lessons/:type/:offset/:limit',ctx=>{
  ctx.body = require('./data/lessonList');
});
app.use(cors());
app.use(router.routes());
app.listen(3000);