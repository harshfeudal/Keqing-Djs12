const { blind_role_id } = require('../../lib')
module.exports = {
	permissions: ['MUTE_MEMBERS'],
	description: 'Keqing will unblind member has mentioned',
	run (bot, message, args) {
		const member = message.mentions.members.first()
		if (!member) return message.channel.send(`I cannot see that so I always reply:\n${message.guild.roles.cache.get(blind_role_id).members.map(member => `${member.displayName} (${member.user.tag})`).join('\n') || 'None'}`)
		try {
			member.roles.remove(blind_role_id)
			message.channel.send(`Keqing has unblinded <@${member.user.id}>`)
		} catch {
			message.channel.send('Keqing cannot unblind that user.')
		}
	}
}
