const ms = require('ms')
const { member_role_id, mute_role_id } = require('../../config.json')
module.exports = {
	description: 'Keqing will mute member the has mentioned',
	run (bot, message, args) {
		if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('You cannot tell me to do that :(')
		if (args[1] && !ms(args[1])) return message.channel.send('I dont know what you mean :( (Invalid duration)')

		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to mute')
		try {
			const member_role = message.guild.roles.cache.get(member_role_id)
			const mute_role = message.guild.roles.cache.get(mute_role_id)
			member.roles.remove(member_role)
			member.roles.add(mute_role)
			message.channel.send(`Keqing has muted <@${member.user.id}> ${args[1] ? `for ${ms(ms(args[1]), { long: true })} ` : ''}:( Sorry ;-;`)
			if (args[1]) {
				setTimeout(() => {
					member.roles.remove(mute_role)
					member.roles.add(member_role)
					message.channel.send(`Keqing has unmuted <@${member.user.id}> :)`)
				}, ms(args[1]))
			}
		} catch {
			message.channel.send('Keqing cannot mute that user.')
		}
	}
}
