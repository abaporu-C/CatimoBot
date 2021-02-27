const fs = require('fs');

module.exports = {
    name: 'gore',
    description: 'display gore pic',
    async execute(message, args, Discord, client){
        const imageFile = fs.readdirSync('./images/gore/');
        const target = message.mentions.users.first()? message.mentions.users.first().id : "";
        const sender = message.member.user.username;
        const index = Math.floor(Math.random() * (imageFile.length))

        if(target){
            const embed = new Discord.MessageEmbed()
            .setColor('#927CAF')
            .setTitle(`Let's break some bones!`)
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`<@!${target}> what will you do!? ${sender} says he bathes on your blood!`)
            .attachFiles(`./images/gore/${imageFile[index]}`)

            await message.channel.send(embed);
        } else {
            const embed = await new Discord.MessageEmbed()
            .setColor('#927CAF')
            .setTitle("Let's break some bones!")
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`${sender} likes it bloody!`)
            .attachFiles(`./images/gore/${imageFile[index]}`)
            
            await message.channel.send(embed);
        } 
    }
}