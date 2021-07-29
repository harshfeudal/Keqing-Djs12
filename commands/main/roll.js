module.exports = {
	description: 'this is a lmao command!',
	run (bot, message, args) {
		const reply = ['nope', 'yes', 'nevermind', 0,1,2,3,4,5,6]
		message.channel.send(`${Math.floor(Math.random() * reply.length)} :)`)
	}
}
