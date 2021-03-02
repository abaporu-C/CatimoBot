const fs = require('fs');

module.exports = {
    name: 'greenspell',
    description: 'Green Spell',
    async execute(message, args, cmd, client, Discord){
        const imageFile = fs.readdirSync('./images/greenMage/');
        const target = message.mentions.users.first()? message.mentions.users.first().id : "";
        const sender = message.member.user.username;
        const index = Math.floor(Math.random() * (imageFile.length));

        if(message.member.roles.cache.some(role => role.name === 'Green Mage')){
            if(target){
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle(`Muscles are better than magic!`)
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`<@!${target}> what will you do!? ${sender} is running amok on you!`)
                .attachFiles(`./images/greenMage/${imageFile[index]}`)
    
                await message.channel.send(await embed);
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle("Muscles are better than magic!")
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`${sender} NEVER skips leg day!`)
                .attachFiles(`./images/greenMage/${imageFile[index]}`)
                
                await message.channel.send(await embed);
            }
        } else {
            message.channel.send("You're not a Green Mage!");
        }  
    }
}