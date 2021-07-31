module.exports = {
	permissions: ['BAN_MEMBERS'],
	description: 'Keqing will ban member the has mentioned',
	run (bot, message, args) {
		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to ban')
		try {
			member.ban()
			message.channel.send('Keqing has banned that member :( Sorry ;-;')
		} catch {
			message.channel.send('Keqing cannot ban that user.')
		}
	}
}
