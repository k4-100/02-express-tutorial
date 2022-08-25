const http = require("http");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>response has been sent</h1>");
  res.end();
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`LISTENING at ${HOSTNAME}:${PORT}`);
});
