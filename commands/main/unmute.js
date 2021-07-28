const { member_role_id, mute_role_id } = require('../../config.json')
module.exports = {
	description: 'Keqing will unmute member the has mentioned',
	run (message, args) {
		if (!message.member.hasPermission('')) return message.channel.send('You cannot tell me to do that :(')

		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to unmute')
		try {
			const member_role = message.guild.roles.cache.get(member_role_id)
			const mute_role = message.guild.roles.cache.get(mute_role_id)
			member.roles.add(member_role)
			member.roles.remove(mute_role)
			message.channel.send(`Keqing has unmuted <@${member.user.id}>`)
		} catch {
			message.channel.send('Keqing cannot unmute that user.')
		}
	}
}
