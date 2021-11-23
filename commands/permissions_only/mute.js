const ms = require('ms')
const { mute_role_id } = require('../../lib')
module.exports = {
	args: 1,
	permissions: ['MUTE_MEMBERS'],
	description: 'Keqing will mute member has mentioned',
	run (bot, message, args) {
		if (args[1] && !ms(args[1]) && ms(args[1]) !== 0) return message.channel.send('Invalid Mute Duration')

		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to mute')
		try {
			member.roles.add(mute_role_id)
			message.channel.send(`Keqing has muted <@${member.user.id}> ${args[1] ? `for ${ms(ms(args[1]), { long: true })} ` : ''}:( Sorry ;-;`)
			if (args[1]) {
				setTimeout(() => {
					member.roles.remove(mute_role_id)
					message.channel.send(`Keqing has unmuted <@${member.user.id}> :)`)
				}, ms(args[1]))
			}
		} catch {
			message.channel.send('Keqing cannot mute that user.')
		}
	}
}