const mongoose = require('mongoose');
const Player = require('../../models/player');

module.exports = {
    name: 'highscore',
    description: 'Gives back player highscore',
    async execute(message, args){
        const target = message.mentions.users.first().username;
        
        if (message.mentions.users.first().bot){
            return message.channel.send("Bots don't have a highscore, dum-dum!");
        } else {
            message.channel.send(await Player.where({playerName: target, guildName: message.guild.name}, (err, array) => {
                if (err) console.error(err)
                else return array;
            })
            .findOne({playerName: target}, (err, doc) => {
                if (err) console.error(err)
                else return doc;
            })
            .then(doc => {
                return `${target} highscore is currently ${doc.get('highscore')}`;
            }, err => console.error(err)));
        }
    }
}