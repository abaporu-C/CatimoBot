module.exports = {
    name: 'unmute',
    description: 'Unmutes a member',
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.roles.cache.has('800173728918798358')){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Membro');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
    
                let memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.roles.remove(muteRole);
                memberTarget.roles.add(mainRole);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`)
            } else {
                message.channel.send("That member does not exist.");
            }
        } else {
            message.channel.send('You are not a moderator, son!');
        }   
    }
}