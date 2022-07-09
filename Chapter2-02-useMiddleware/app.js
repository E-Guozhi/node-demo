const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
  const startTime = new Date().getTime();
  await next();
  const endTime = new Date().getTime();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello world!</h1>'
  console.log(`请求地址：${ctx.path}，相应时间：${endTime - startTime}ms`)
});
app.use(async (ctx, next) => {
  console.log('中间件dosomething');
  await next();
  console.log('中间件执行完毕');
});


app.listen(3000, () => {
  console.log('open http://localhost:3000');
})