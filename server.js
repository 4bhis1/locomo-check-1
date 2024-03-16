const express = require("express");
const http = require("http");
const { automaticFileRouting, automaticModelRouting } = require("./func1");

const app = express();

//setting cors
app.options("*", (req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers":
      "access-control-allow-origin, content-type, accept, Authorization",
  });
  res.end();
});

automaticFileRouting();

automaticModelRouting();

const server = http.Server(app);

server.listen(5020, () => {
  console.log(`Listening to port ${5020}`);
});
