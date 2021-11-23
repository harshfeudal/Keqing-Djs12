const { mute_role_id } = require('../../lib')
module.exports = {
	permissions: ['MUTE_MEMBERS'],
	description: 'Keqing will unmute member has mentioned',
	run (bot, message, args) {
		const member = message.mentions.members.first()
		if (!member) return message.channel.send(`Members currently being muted:\n${message.guild.roles.cache.get(mute_role_id).members.map(member => `${member.displayName} (${member.user.tag})`).join('\n') || 'None'}`)
		try {
			member.roles.remove(mute_role_id)
			message.channel.send(`Keqing has unmuted <@${member.user.id}>`)
		} catch {
			message.channel.send('Keqing cannot unmute that user.')
		}
	}
}
