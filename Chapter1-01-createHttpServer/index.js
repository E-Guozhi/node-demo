const http = require('http');
const path = require('path');
const fs = require('fs');
console.log(http)
const port = '8080';
const host = '127.0.0.1';
// 创建http服务
const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${host}:${port}`);
  const { pathname } = myUrl;
  const extname = path.extname(pathname);
  
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(path.join(__dirname, pathname, 'index.html')));
  } else if (extname === '.jpg' || extname === '.png') {
    res.writeHead(200, { 'Content-Type': `image/${extname.substring(1)}` });
    res.end(fs.readFileSync(path.join(__dirname, pathname)));
  } else {
    res.statusCode = 404;
    res.end();
  }
})

// 监听http服务
server.listen(port, host, () => {
  console.log(`Start to server http://${host}:${port}`)
})