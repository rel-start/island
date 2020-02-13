const Koa = require('koa');
const app = new Koa();

// 路由
const { classicRouter } = require('./api/v1/classic.js');
const { bookRouter } = require('./api/v1/book.js');


app
  .use(classicRouter.routes())
  .use(bookRouter.routes())

app.listen(3000);

// "GET" 查询 RESTFUL
// "POST" 新增
// "PUT" 更新
// "DELETE" 删除