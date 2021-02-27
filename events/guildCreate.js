const mongoose = require('mongoose');
const Guild = require('../models/guild');
const Player = require('../models/player');

module.exports = async (client, guild) => {
    
    guild.members.cache.each(async member => {

        if(member.user.bot){
            return;
        } else {
            const newPlayerModel = new Player({
                _id: mongoose.Types.ObjectId(),
                guildID: guild.id,
                guildName: guild.name,
                playerName: member.user.username
            })
            newPlayerModel.save();
            console.log(`I've created a new model for ${member.user.username}`);
        }
    }, (err, res) => {if (err) console.error(err)});

    guild = new Guild ({
        _id: mongoose.Types.ObjectId(),
        guildID: guild.id,
        guildName: guild.name
    });

    guild.save().then(result => console.log(result)).catch(err => console.error(err));
    console.log('I have joined a new server!');
}