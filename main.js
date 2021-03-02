//Utils
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
require('dotenv').config();
const fs = require('fs');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./commands');
client.commands = new Discord.Collection();
const mongoose = require('mongoose');
client.mongoose = require('./utils/mongoose');

//Event Handler
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client, Discord));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client, Discord));
	}
}

//Sets Commands Collection
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

//Last line of the file
client.mongoose.init();
client.login(process.env.DISCORD_TOKEN);