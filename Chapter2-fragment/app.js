const koa = require('koa');
const app = new koa();

// GET请求参数获取
// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/html';
//   let { url, query, querystring } = ctx.request;
//   ctx.response.body = {
//     url,
//     query,
//     querystring
//   }
// })

// POST请求参数获取
// app.use(async (ctx, next) => {
//   let postdata = '';
//   ctx.req.on('data', (data) => {
//     postdata += data;
//   })
//   ctx.req.on('end', () => {
//     console.log(postdata);
//   })
// })

// ctx.request 路由处理
// app.use(async (ctx) => {
//   let { method, path } = ctx.request;
//   if (method === 'POST') {

//   } else if (method === 'GET') {
//     if (path !== '/') {
//       ctx.response.type = 'html'
//       ctx.response.body = '<a href="/">Go To Index</a>';
//     } else {
//       ctx.response.body = 'Hello World!';
//     }
//   }
// })

// 设置请求状态
// app.use(async (ctx) => {
//   ctx.response.status = 200;
//   if (ctx.request.accepts('json')) {
//     ctx.response.type = 'json';
//     ctx.response.body = { data: 'Hello world!' }
//   }else if(ctx.request.accepts('html')){
//     ctx.reponse.type='html';
//     ctx.response.body='<h2>Hello world!</h2>';
//   }else {
//     ctx.reponse.type='text';
//     ctx.response.body='Hello world!';
//   }
// })


// 打印日志
// app.use(async (ctx, next) => {
//   console.log(ctx.method, ctx.host + ctx.url);
//   await next();
//   ctx.body='Hello World!';
// })

// 打印日志函数抽象
// const logger = async (ctx, next) => {
//   console.log(ctx.method, ctx.host + ctx.url);
//   await next();
// }
// app.use(logger);   //使用app.use加载中间件
// app.use(async (ctx, next) => {
//   ctx.body = 'Hello World!';
// })

// 中间件执行顺序
// app.use(async (ctx, next) => {
//   console.log('one');
//   await next();
//   console.log('one end.');
// })
// app.use(async (ctx, next) => {
//   console.log('two');
//   await next();
//   console.log('two end.');
// })
// app.use(async (ctx, next) => {
//   console.log('three');
//   await next();
//   console.log('three end.');
// })


// 中间件导出
// const compose = require('koa-compose');
// const middleware1 = async (ctx, next) => {
//   // do something
//   console.log('1');
//   await next();
// }
// const middleware2 = async (ctx, next) => {
//   // do something
//   console.log('2');
//   await next();
// }
// const middleware3 = async (ctx, next) => {
//   // do something
//   console.log('3');
//   await next();
// }
// const all = compose([middleware1, middleware2, middleware3]);
// app.use(all);

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
