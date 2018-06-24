const fs = require('fs');
const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  const text = fs.readFileSync('index.html', 'utf-8');
  res.end(text);
});

server.listen(PORT);
console.log('Server started!');
