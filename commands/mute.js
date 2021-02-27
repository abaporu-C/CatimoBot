const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'Mutes a member for a specific set of time',
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.roles.cache.has('800173728918798358')){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Membro');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                if(!args[1]){
                    memberTarget.roles.remove(mainRole);
                    memberTarget.roles.add(muteRole);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted.`);
                    return;
                }
                memberTarget.roles.remove(mainRole);
                memberTarget.roles.add(muteRole);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
    
                setTimeout(function(){
                    memberTarget.roles.remove(muteRole);
                    memberTarget.roles.add(mainRole);
                }, ms(args[1]))
            } else {
                message.channel.send("That member does not exist.");
            }
        } else {
            message.channel.send('You are not a moderator, son!');
        }  
    }
}