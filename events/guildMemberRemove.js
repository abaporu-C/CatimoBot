module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(member) {
        const Player = require('./models/player');
    
        await Player.findOneAndDelete({playerName: member.user.username, guildName: member.guild.name}, (err, res) => {
            if(err) console.error(err);
            else if (res) console.log(`${member.user.username} mongodb file deleted.`)
        })
    }
}