const http = require("http");
const fs = require("fs");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

// get all files
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyle = fs.readFileSync("./navbar-app/styles.css");
const homeImage = fs.readFileSync("./navbar-app/logo.svg");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/styles.css":
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyle);
      res.end();
      break;
    case "/logo.svg":
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeImage);
      res.end();
      break;
    case "/browser-app.js":
      res.writeHead(200, { "content-type": "text/js" });
      res.write(homeLogic);
      res.end();
      break;
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
      break;

    case "/about":
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>ABOUT</h1>");
      res.end();
      break;

    // 404
    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>ERROR 404</h1>");
      res.end();
  }

  console.log(req.url);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`LISTENING at ${HOSTNAME}:${PORT}`);
});
