module.exports = {
	description: 'Keqing will ban member the has mentioned',
	run (bot, message, args) {
		if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You cannot tell me to do that :(')
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
