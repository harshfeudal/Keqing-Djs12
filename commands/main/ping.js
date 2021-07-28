module.exports = {
	description: 'this is a ping command!',
	run (bot, message, args) {
		message.channel.send('pong!')
	}
}
