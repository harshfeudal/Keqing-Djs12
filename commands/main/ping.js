module.exports = {
	description: 'this is a ping command!',
	async run (bot, message, args) {
		message.channel.send('Pinging...').then(msg => msg.edit(`Pong! The message round-trip took ${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms. The heartbeat ping is ${Math.round(bot.ws.ping)}ms.`))
	}
}
