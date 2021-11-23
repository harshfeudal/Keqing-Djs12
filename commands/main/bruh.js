module.exports = {
	description: 'bruh',
	run (bot, message, args) {
		const reply = ['bruh', `lmao`, 'lol', `haha`, 'nothing fun to me', 'dark', `<:sus:870298975863967834>`]
		message.channel.send(`${reply[Math.floor(Math.random() * reply.length)]}`)
	}
}