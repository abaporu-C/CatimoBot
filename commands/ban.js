module.exports = {
    name: 'ban',
    description: 'Bans user.',
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.roles.cache.has('800173728918798358')){
            if(member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("User has been banned!");
            } else {
                message.channel.send("You couldn't ban a member!");
            }
        } else {
            message.channel.send('You are not a moderator, son!')
        }
    }
}