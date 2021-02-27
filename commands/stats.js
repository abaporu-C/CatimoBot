const mongoose = require('mongoose');
const Player = require('../models/player');

module.exports = {
    name: 'stats',
    description: 'prints server stats',
    async execute(message, args){
        const target = message.mentions.users.first().username;
        const guild = message.guild.name;

        if(message.mentions.users.first().bot){
            return message.channel.send("Bots don't play games, punk!")
        } else {
            await Player.findOne({playerName: target, guildName: guild}, (err, doc) => {
                if (err) console.error(err);
                else {
                    return doc;
                }
            }).then(doc => {
                return message.channel.send(`${target} has currently ${doc.playerWins} wins and ${doc.playerLoses} losses.`);
            })
        }
    }
}