module.exports = {
	async run (bot, message, args) {
		message.channel.send('Vibe check...').then(msg => {
			msg.edit(`Pong! The message round-trip took ${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms. The heartbeat ping is ${Math.round(bot.ws.ping)}ms.`)
			setTimeout(() => {
				message.delete()
				msg.delete()
			}, 3000)
		})
	}
}
