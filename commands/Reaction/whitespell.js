const fs = require('fs');

module.exports = {
    name: 'whitespell',
    description: 'White Spell',
    async execute(message, args, cmd, client, Discord){
        const imageFile = fs.readdirSync('./images/whiteMage/');
        const target = message.mentions.users.first()? message.mentions.users.first().id : "";
        const sender = message.member.user.username;
        const index = Math.floor(Math.random() * (imageFile.length));

        if(message.member.roles.cache.some(role => role.name === 'White Mage')){
            if(target){
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle(`METAL IS THE LAW!`)
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`<@!${target}> what will you do!? ${sender} is filing a complain form on you!`)
                .attachFiles(`./images/whiteMage/${imageFile[index]}`)
    
                await message.channel.send(await embed);
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('#927CAF')
                .setTitle("METAL IS THE LAW!")
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription(`${sender} follows the rules!`)
                .attachFiles(`./images/whiteMage/${imageFile[index]}`)
                
                await message.channel.send(await embed);
            }
        } else {
            message.channel.send("You're not a White Mage!");
        }  
    }
}