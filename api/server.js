const express = require("express");
const accountsRouter = require("./accountsRouter");

const db = require("../data/dbConfig.js");
const server = express();

server.use(express.json());
server.use("/accounts", accountsRouter);
server.use(logger);

server.get("/", (req, res) => {
  res.json({ message: "Server is up" });
});

function logger(req, res, next) {
  console.log(
    `Request: ${req.method}`,
    `Request Url : ${req.url}`,
    `Timestamp: ${Date.now()}`
  );
  next();
}

module.exports = server;
