module.exports = {
	description: 'Keqing will ban member the has mentioned',
	run (message, args) {
		const member = message.mentions.users.first()
		if (member) {
			const memberTarger = message.guild.members.cache.get(member.id)
			memberTarger.ban()
			message.channel.send('Keqing has banned that member :( Sorry ;-;')
		} else {
			message.channel.send('Keqing cannot ban that user.')
		}
	}
}
