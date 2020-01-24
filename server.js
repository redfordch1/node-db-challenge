const express = require("express");
const projectsRouter = require("./projects/projectsRouter");
const server = express();
//! ================================================
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use(logger);
//! ================================================
server.get("/", (req, res) => {
  res.send("Must be doing something right!!");
});
//! ================================================
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}
//! ================================================
module.exports = server;
