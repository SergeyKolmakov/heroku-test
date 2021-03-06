const fs = require('fs');
const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  //console.log(req.method, req.url);

  const file = req.url === '/style.css' ? 'style.css' : 'index.html';
  const text = fs.readFileSync(file, 'utf-8');
  res.end(text);
});

server.listen(PORT);
//console.log('Server started!');
