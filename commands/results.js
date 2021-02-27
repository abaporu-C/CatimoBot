const mongoose = require('mongoose');
const Player = require('../models/player');

module.exports = {
    name: 'results',
    description: 'Give player results.',
    async execute(message, args){
        const target = message.mentions.users.first().username;
        const guild = message.guild.name;

        const wins = await Player.where({playerName: `${target}`, guildName: guild}, {guildName: guild}, (err, array) => {
            if (err) console.error(err)
            else return array
        })
        .findOne({playerName: `${target}`}, (err, doc) => {
            if (err) console.error(err)
            else return doc
        })
        .then(doc => {return doc.get('playerWins')})

        const newWins = parseInt(wins) + parseInt(args[1])

        const losses = await Player.where({playerName: `${target}`, guildName: guild}, {guildName: guild}, (err, array) => {
            if (err) console.error(err)
            else return array
        })
        .findOne({playerName: `${target}`}, (err, doc) => {
            if (err) console.error(err)
            else return doc
        })
        .then(doc => {return doc.get('playerLoses')})

        const newLosses = parseInt(losses) + parseInt(args[2]);

        if(isNaN(newWins) || isNaN(newLosses)){
            return message.channel.send('Please type in actual numbers. Remember, this command arguments should be: ~results @user nuberOfWins numberOfLosses.')
        } else {
            await Player.findOneAndUpdate({playerName: target, guildName: guild}, {playerWins: newWins, playerLoses: newLosses, highscore: ((newWins *10)-(newLosses*7))}, (err, doc) => {
                if (err) console.error(err);
                else {
                    return doc
                }
            }).then(doc => {
                return message.channel.send(`${target} results have been updated.`);
            });
        }       
    }
}