module.exports = {
    name: 'ping',
    description: 'this is a ping command',
    execute(message, args) {
        message.channel.send('I do no have time for silly games of ping pong!');
    }
}