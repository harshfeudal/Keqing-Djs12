module.exports = {
	description: 'this is a clear message command!',
	async run (bot, message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You cannot tell me to do that :(')

		if (!args[0]) return message.reply('Please enter the amount of message that Keqing can delete :(')
		if (isNaN(args[0])) return message.reply('Please enter the real number')
		if (args[0] > 100) return message.reply('Keqing cannot try to delete more than 100 messages ;-;')
		if (args[0] < 1) return message.reply('Keqing can delete at least 1 message :)')

		message.channel.delete(parseInt(args[0]), true)
	}
}
