const express = require("express");
const app = express();

require("dotenv").config();
let port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world saassa");
});

app.post("/github-webhook", (req, res) => {
  res.send("Github webhook sadasda ");
});

app.post("/github-webhook-apssi", (req, res) => {
  res.send("Github webhook ");
});

app.post("/github-webhook-assssd", (req, res) => {
  res.send("Github webhook ");
});

app.listen(port, () => {
  console.log("sssss", port);
});
