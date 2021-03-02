const fs = require('fs');

module.exports = {
    name: 'boast',
    description: 'display boast message',
    async execute(message, args, cmd, client, Discord){
        const imageFile = fs.readdirSync('./images/boast/');
        const target = message.mentions.users.first()? message.mentions.users.first().id : "";
        const sender = message.member.user.username;
        const index = Math.floor(Math.random() * (imageFile.length))

        if(target){
            const embed = new Discord.MessageEmbed()
            .setColor('#927CAF')
            .setTitle(`Let's go!`)
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`<@!${target}> what will you do!? ${sender} is boastin' on you!`)
            .attachFiles(`./images/boast/${imageFile[index]}`)

            await message.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
            .setColor('#927CAF')
            .setTitle("Let's Go!")
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`${sender} boasts like he means it!`)
            .attachFiles(`./images/boast/${imageFile[index]}`)
            
            await message.channel.send(embed);
        } 
    }
}