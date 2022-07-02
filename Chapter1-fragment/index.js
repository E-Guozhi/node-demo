// const express = require('express');
// const app = express();
// app.get('/', function (req, res) {
//   asyncFunction1(params, function () {
//     asyncFunction2(params, function () {
//       asyncFunction3(params, function () {
//         res.send('Hello World');
//       })
//     })
//   })
// })
// var server = app.listen(3000);


// var koa = require('koa');
// var app = koa.app;
// app.use(function* () {
//   yield asyncFunction1(params);
//   yield asyncFunction2(params);
//   yield asyncFunction3(params);
//   this.body = 'Hello world'
// })
// app.listen(3000);

const koa = require('koa');
const app = new koa();
app.use(async ctx => {
  await asyncFunction1(params);
  await asyncFunction2(params);
  await asyncFunction3(params);
  ctx.body = 'Hello world';
})

app.listen(3000);