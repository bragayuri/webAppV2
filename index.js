const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Hello Nodejs");
});

server.listen(3000);
