const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ' + process.env.ENV_VARIABLE + '!');
});

console.log('Hello ' + process.env.ENV_VARIABLE + '!');

server.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});
