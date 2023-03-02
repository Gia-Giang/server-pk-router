const express = require("express");
const app = express();

require("dotenv").config();
let port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/github-webhook", (req, res) => {
  res.send("Github webhook successfully");
});

app.post("/github-webhook-api", (req, res) => {
  res.send("Github webhook successfully api");
});

app.listen(port, () => {
  console.log("ss", port);
});
