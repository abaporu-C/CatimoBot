module.exports = {
    name: 'colorpie',
    description:'Choosing colors.',
    async execute(message, args, Discord, client){
        const channel = message.channel.id;
        const redMageRole = message.guild.roles.cache.find(role => role.name === 'Red Mage');
        const blackMageRole = message.guild.roles.cache.find(role => role.name === 'Black Mage');
        const blueMageRole = message.guild.roles.cache.find(role => role.name === 'Blue Mage');
        const greenMageRole = message.guild.roles.cache.find(role => role.name === 'Green Mage');
        const whiteMageRole = message.guild.roles.cache.find(role => role.name === 'White Mage');

        const redMageEmoji = '🔥';
        const blackMageEmoji = '💀';
        const blueMageEmoji = '💧';
        const greenMageEmoji = '🌳';
        const whiteMageEmoji = '☀️';

        const embed = new Discord.MessageEmbed()
            .setColor('#927CAF')
            .setTitle('Choose your colors wisely, you pathetic fool!')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`Pick up your side and never forget: Greatness, at any cost! \n\n
            ${redMageEmoji} for Red Mage \n
            ${blackMageEmoji} for Black Mage \n
            ${blueMageEmoji} for Blue Mage \n
            ${greenMageEmoji} for Green Mage \n
            ${whiteMageEmoji} for White Mage`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redMageEmoji);
        messageEmbed.react(blackMageEmoji);
        messageEmbed.react(blueMageEmoji);
        messageEmbed.react(greenMageEmoji);
        messageEmbed.react(whiteMageEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === redMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redMageRole);
                } if(reaction.emoji.name === blackMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blackMageRole);
                } if(reaction.emoji.name === blueMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueMageRole);
                } if(reaction.emoji.name === greenMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenMageRole);
                } if(reaction.emoji.name === whiteMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiteMageRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === redMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redMageRole);
                } if(reaction.emoji.name === blackMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blackMageRole);
                } if(reaction.emoji.name === blueMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueMageRole);
                } if(reaction.emoji.name === greenMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenMageRole);
                } if(reaction.emoji.name === whiteMageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteMageRole);
                }
            } else {
                return;
            }
        });
    }
}