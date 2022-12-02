import { hostname } from 'os';
import { createServer } from 'http';
const message = 'Hello World from AWS\n';
const port = 8080; 
const server = createServer((req, res) => { 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname()}:${port}/`);
});