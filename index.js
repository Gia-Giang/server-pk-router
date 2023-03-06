const express = require("express");
const app = express();

const { EmbedBuilder, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient({ id: "1077981490790547466", token: "zj-OvyjXxcUiUl4r7gF670OAxcUj9GNR5z7RX9s7gAO6sQ5Iur8MfH4jvkh59K6WRqHU" });

const embed = new EmbedBuilder()
	.setTitle('Some Title')
	.setColor(0x00FFFF);

webhookClient.send({
	content: 'Webhook test',
	username: 'some-username',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
});

require("dotenv").config();
let port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/github-webhook", (req, res) => {
  res.send("Github webhook successfully");
});

app.post("/github-webhook-api", (req, res) => {
  res.send("Github webhook successdfully api");
});

app.post("/github-webhook-asd", (req, res) => {
  res.send("Github webhook successdfully asd");
});

app.listen(port, () => {
  console.log("ss", port);
});
