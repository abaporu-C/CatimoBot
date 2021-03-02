const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.mongoose = require('./utils/mongoose');

const commandFile = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

//Gets all files for command handling
for(const file of commandFile){
    const command = require(`./commands/${file}`); 
    
    client.commands.set(command.name, command)
}

//Logs message on the console when bot is on
client.once('ready', () => {
    console.log('Catimobot is online');
})

//Bot prefix
const prefix = "~";

//Says hi to new member and creates new player models for mongodb
client.on('guildMemberAdd', async guildMember => {
    let welcomeRole = await guildMember.guild.roles.fetch()
    .then(roles => {
        return roles.cache.find(role => role.name === 'Member');
    })
    .catch(console.error);
    const Player = require('./models/player')


    guildMember.roles.add(welcomeRole);
    try {
        guildMember.guild.channels.cache.find(channel => channel.isText()).send(`Welcome <@${guildMember.user.id}> to our server!`);
    } catch(err){
        console.error(err);
    }
    finally{
        if(guildMember.user.bot){
            return;
        } else {
            const newPlayerModel = new Player({
                _id: mongoose.Types.ObjectId(),
                guildID: guildMember.guild.id,
                guildName: guildMember.guild.name,
                playerName: guildMember.user.username
            })
            await newPlayerModel.save();
            console.log(`I've created a new model for ${guildMember.user.username}`);
        }
    } 
})

//Creates new db when joining server
client.on('guildCreate', (gld) => {
    const server = require('./events/guildCreate');
    server(client, gld);
});

//Deletes db when leaving server
client.on('guildDelete', gld => require('./events/guildDelete')(client, gld));

//Command handler for the bot
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'pizza'){
        client.commands.get('pizza').execute(message, args);
    } else if (command == 'rules'){
        client.commands.get('rules').execute(message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'colorpie'){
        client.commands.get('colorpie').execute(message, args, Discord, client);
    } else if (command == 'gore'){
        client.commands.get('gore').execute(message, args, Discord, client);
    } else if (command == 'boast'){
        client.commands.get('boast').execute(message, args, Discord, client);
    } else if (command == 'fool'){
        client.commands.get('fool').execute(message, args, Discord, client);
    } else if (command == 'stats'){
        client.commands.get('stats').execute(message, args);
    } else if (command == 'results'){
        client.commands.get('results').execute(message, args);
    } else if (command == 'highscore'){
        client.commands.get('highscore').execute(message, args);
    } else if (command == 'redspell'){
        client.commands.get('redspell').execute(message, args, Discord, client);
    } else if (command == 'blackspell'){
        client.commands.get('blackspell').execute(message, args, Discord, client);
    } else if (command == 'greenspell'){
        client.commands.get('greenspell').execute(message, args, Discord, client);
    } else if (command == 'bluespell'){
        client.commands.get('bluespell').execute(message, args, Discord, client);
    } else if (command == 'whitespell'){
        client.commands.get('whitespell').execute(message, args, Discord, client);
    }
})

//Last line of the file
client.mongoose.init();
client.login(process.env.DISCORD_TOKEN);