const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/github-webhook", (req, res) => {
  res.send("Github webhook successfully");
});

app.listen(3000, () => {
  console.log("ss");
});
