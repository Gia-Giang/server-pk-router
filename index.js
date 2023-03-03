const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/webhooks/<WEBHOOK_ID>", (req, res) => {
  const event = req.body;
  console.log("Received webhook event:", event);
  // Process the event here...
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Hookdeck server listening on port ${port}`);
});
