const { Channel } = require("discord.js")

module.exports = {
    name: 'pizza',
    description: "you don't wanna know",
    execute(message, args){
        if(message.member.roles.cache.has('800173728918798358')){
            message.channel.send('https://www.youtube.com/watch?v=lpvT-Fciu-4');   
        } else {
            message.channel.send('Kawabanga! You are not a moderator, son!')
        }
    }
}