module.exports = {
    name: 'kick',
    description: 'Kicks user.',
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.roles.cache.has('800173728918798358')){
            if(member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("User has been kicked!");
            } else {
                message.channel.send("You couldn't kick a member!");
            }
        } else {
            message.channel.send('You are not a moderator, son!');
        }
    }
}