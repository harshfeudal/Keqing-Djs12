const { verify_role_id, mute_role_id } = require('../../config.json')
module.exports = {
	permissions: ['MUTE_MEMBERS'],
	description: 'Keqing will unmute member the has mentioned',
	run (bot, message, args) {
		const member = message.mentions.members.first()
		if (!member) {
			return message.channel.send(`Muted members (Due to how Harsh implement the temp mute command I cannot show duration/time left until auto unmute):\n${message.guild.roles.cache.get(mute_role_id).members.map(member => `${member.displayName} (${member.user.tag})`).join('\n') || 'None'}`)
		}
		try {
			member.roles.add(verify_role_id)
			member.roles.remove(mute_role_id)
			message.channel.send(`Keqing has unmuted <@${member.user.id}>`)
		} catch {
			message.channel.send('Keqing cannot unmute that user.')
		}
	}
}
