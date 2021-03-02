const { execute } = require("./rules");

module.exports = {
    name: 'clear',
    description: 'Clears up to the last 100 messages.',
    async execute(message, args) { 
        if(isNaN(args[0])) return message.reply('Enter a real number, stupid!');
        if(!args[0]) return message.reply('Gotta tell me how many messages I should delete, son!');
        if(args[0] > 100) return message.reply("You can't delete so many messages, son!");
        if(args[0] < 1) return message.reply('Gotta delete at least one message, son!');

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}