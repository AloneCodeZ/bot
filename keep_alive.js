const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Still Alive');
  res.end();
}).listen(8080);