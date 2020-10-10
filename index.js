const { Client } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
  disableEveryone: true,
});

config({
  path: __dirname + "/.env",
});

const canvasToken = process.env.CANVAS_TOKEN;
client.login(process.env.TOKEN);
const commandIdicator = "!";

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

  if (content[0] !== commandIdicator) {
    //If the message does not start with the command indicator, exit
    return;
  }

  const args = content.split(" ");

  switch (args[0]) {
    case "help":
      sendHelp(args);
      break;
  }
});

function sendHelp(args) {
  console.log(args);
  return;
}
