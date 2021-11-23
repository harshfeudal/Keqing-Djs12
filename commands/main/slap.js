module.exports = {
	description: 'Say well done to someone :)',
	run (bot, message, args) {
		const replies = ['Good job!', 'Amazing!', 'GG!', `Wtf that's so impressive!`, `OMG`]
		message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`)
	}
}