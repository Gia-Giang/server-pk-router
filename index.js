const express = require("express");
const app = express();

require("dotenv").config();
let port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello worasdasdsadld");
});

app.post("/github-webhook", (req, res) => {
  res.send("Github webhook successasdasdfully");
});

app.post("/github-webhook-apssi", (req, res) => {
  res.send("Github webhook successdfasdully");
});

app.post("/github-webhook-assssd", (req, res) => {
  res.send("Github webhook successasdasdasdsadasdasdfully");
});

app.listen(port, () => {
  console.log("sssss", port);
});
