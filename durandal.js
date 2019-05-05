const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const { token, prefix } = require('./config.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  }
  else {
    message.channel.send(`${command} : Unknown command.`);
  }

});

client.login(token);
