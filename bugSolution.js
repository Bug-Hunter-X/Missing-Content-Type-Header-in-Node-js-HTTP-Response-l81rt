const http = require('http');

const server = http.createServer((req, res) => {
  // Setting the Content-Type header is crucial for proper browser interpretation.
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello, world!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});