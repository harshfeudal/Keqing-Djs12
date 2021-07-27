module.exports = {
	description: 'this is a ping command!',
	run (message, args) {
		message.channel.send('pong!')
	}
}
