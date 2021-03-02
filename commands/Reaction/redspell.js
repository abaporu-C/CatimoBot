const fs = require('fs');

module.exports = {
    name: 'redspell',
    description: 'Red Spell',
    async execute(message, args, cmd, client, Discord){
        const imageFile = fs.readdirSync('./images/redMage/');
        const target = message.mentions.users.first()? message.mentions.users.first().id : "";
        const sender = message.member.user.username;
        const index = Math.floor(Math.random() * (imageFile.length));

        if(message.member.roles.cache.some(role => role.name === 'Red Mage')){
            if(target){
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle(`FIREEEEEEE!`)
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`<@!${target}> what will you do!? ${sender} is casting a red spell on you!`)
                .attachFiles(`./images/redMage/${imageFile[index]}`)
    
                await message.channel.send(await embed);
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle("FIREEEEEEE!")
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`${sender} is burning in flames!`)
                .attachFiles(`./images/redMage/${imageFile[index]}`)
                
                await message.channel.send(await embed);
            }
        } else {
            message.channel.send("You're not a Red Mage!");
        }  
    }
}