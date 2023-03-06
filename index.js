const express = require("express");
const app = express();

require("dotenv").config();
let port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world giang");
});

app.post("/github-webhook", (req, res) => {
  res.send("Github webhook successfully");
});

app.post("/github-webhook-apssi", (req, res) => {
  res.send("Github webhook successdfully apidd");
});

app.post("/github-webhook-assssd", (req, res) => {
  res.send("Github webhook successdfully asdddddsfsddd");
});

app.listen(port, () => {
  console.log("sssss", port);
});
