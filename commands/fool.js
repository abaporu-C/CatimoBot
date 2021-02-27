const fs = require('fs');

module.exports = {
    name: 'fool',
    description: 'calls another member a fool',
    async execute(message, args, Discord, client){
        const imageFile = fs.readdirSync('./images/fool/');
        const target = message.mentions.users.first()? message.mentions.users.first().id : "";
        const sender = message.member.user.username;
        const index = Math.floor(Math.random() * (imageFile.length))

        if(target){
            const embed = new Discord.MessageEmbed()
            .setColor('#927CAF')
            .setTitle(`You maggot`)
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`<@!${target}> what will you do!? ${sender} says you are a fool!`)
            .attachFiles(`./images/fool/${imageFile[index]}`)

            await message.channel.send(embed);
        } else {
            await message.channel.send('You have to tag someone, fool!');
        }
    } 
}