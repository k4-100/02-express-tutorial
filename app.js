const path = require("path");
const express = require("express");
const app = express();

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

// setup and middleware
app.use(express.static("./public"));

// get home page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "navbar-app/index.html"));
});

// handle errors
app.all("*"),
  (req, res) => {
    res.status(404).send("resource not found");
  };

// listen at
app.listen(PORT, HOSTNAME, () => {
  console.log(`server is listening at ${HOSTNAME}:${PORT}`);
});
