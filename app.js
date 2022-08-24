const http = require("http");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("response has been sent");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`LISTENING ${HOSTNAME}:${PORT}`);
});
