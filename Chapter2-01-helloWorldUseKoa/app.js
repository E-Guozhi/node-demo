const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
  await next();
  ctx.response.type='text/html';
  ctx.response.body='<h2>Hello World!</h2>';
});

app.listen(3000, () => {
  console.log('http://location:3000');
})