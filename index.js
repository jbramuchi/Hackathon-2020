const { Client } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
  disableEveryone: true,
});

config({
  path: __dirname + "/.env",
});

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Hello!");
});

client.on("message", async (message) => {
  const user = message.author.username;
  if (user == client.username) {
    return;
  }

  const content = message.content;
  console.log(content);
});
