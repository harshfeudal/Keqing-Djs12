module.exports = {
	description: 'this is a clear message command!',
	async run (message, args) {
		if (message.member.roles.cache.has('846425937276305458')) {
			if (!args[0]) return message.reply('Please enter the amount of message that Keqing can delete :(')
			if (isNaN(args[0])) return message.reply('Please enter the real number')

			if (args[0] > 100) return message.reply('Keqing cannot try to delete more than 100 messages ;-;')
			if (args[0] < 1) return message.reply('Keqing can delete at least 1 message :)')

			await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
				message.channel.bulkDelete(messages, true)
			})
		} else {
			message.channel.send('You cannot tell me to do that :(')
		}
	}
}

// owner id: 846425937276305458

// if (message.member.roles.cache.has('846425937276305458')){
//    message.channel.send('You have already verified.');
// } else {
//    message.channel.send('You cannot tell me to do that :(');
// }
