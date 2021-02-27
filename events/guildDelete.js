const mongoose = require('mongoose');
const Guild = require('../models/guild');
const Player = require('../models/player')

module.exports = async (client, guild) => {
    Guild.findOneAndDelete({
        guildID: guild.id
    }, (err, res) => {
        if(err) console.error(err)
        console.log('I have been removed from a server.');
    })

    await Player.deleteMany({guildName: `${guild.name}`}, (err, res) => {
        if (err) console.error(err);
        console.log('Deleted documents.')
    });
}