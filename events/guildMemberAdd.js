module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(guildMember){
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
    }
}