const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: 'The mighty catimoneiro rules.',
    execute(message, args){
        const rulesEmbed = new Discord.MessageEmbed()
            .setColor('#927CAF')
            .setTitle('Rules')
            .setURL('https://www.youtube.com/videogamedunkey')
            .setDescription('Obey the law, you punk!')
            .addFields(
                {name: 'Rule 1:', value: 'Burno always lose.'},
                {name: 'Rule 2:', value: 'Luigi always wins.'},
                {name: 'Rule 3:', value: 'Grixis is the best color combination.'}
            )
            .setImage('https://cdn.shopify.com/s/files/1/1601/3103/products/NicolBolas_DragonGod_5000x.jpg?v=1603743437')
            .setFooter('Grixis is The Law!');

            message.channel.send(rulesEmbed);
        }
    }