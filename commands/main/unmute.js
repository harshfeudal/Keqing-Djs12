const { member_role_id, mute_role_id } = require('../../config.json')
module.exports = {
	description: 'Keqing will unmute member the has mentioned',
	run (bot, message, args) {
		if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('You cannot tell me to do that :(')

		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to unmute')
		try {
			member.roles.add(member_role_id)
			member.roles.remove(mute_role_id)
			message.channel.send(`Keqing has unmuted <@${member.user.id}>`)
		} catch {
			message.channel.send('Keqing cannot unmute that user.')
		}
	}
}
