module.exports = {
	description: 'Keqing will kick member the has mentioned',
	run (bot, message, args) {
		if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You cannot tell me to do that :(')
		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to kick')
		try {
			member.kick()
			message.channel.send('Keqing has kicked that user :( Sorry ;-;')
		} catch {
			message.channel.send('Keqing cannot kick that user.')
		}
	}
}

// nothing.
