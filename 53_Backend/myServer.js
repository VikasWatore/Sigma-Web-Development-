// common js 
// require used in common js 
// const { createServer } = require('node:http');
// module js
// import is used in module js
import { Server } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end( '<h1> Hello World </h1> ');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
