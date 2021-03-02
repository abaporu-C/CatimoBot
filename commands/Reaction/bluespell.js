const fs = require('fs');

module.exports = {
    name: 'bluespell',
    description: 'Blue Spell',
    async execute(message, args, cmd, client, Discord){
        const imageFile = fs.readdirSync('./images/blueMage/');
        const target = message.mentions.users.first()? message.mentions.users.first().id : "";
        const sender = message.member.user.username;
        const index = Math.floor(Math.random() * (imageFile.length));

        if(message.member.roles.cache.some(role => role.name === 'Blue Mage')){
            if(target){
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle(`I'll counter that spell, fine Sir!`)
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`<@!${target}> what will you do!? ${sender}is playing mind tricks on you!`)
                .attachFiles(`./images/blueMage/${imageFile[index]}`)
    
                await message.channel.send(await embed);
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle("I'll counter that spell, fine Sir!")
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`${sender} has intellect beyond comprehension!`)
                .attachFiles(`./images/blueMage/${imageFile[index]}`)
                
                await message.channel.send(await embed);
            }
        } else {
            message.channel.send("You're not a Blue Mage!");
        }  
    }
}