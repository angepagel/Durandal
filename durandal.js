
const Discord = require('discord.js');
const client = new Discord.Client();

const { token, prefix } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.reply('Pong!');
  }

});

client.login(token);
