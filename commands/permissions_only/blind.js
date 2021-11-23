const ms = require('ms')
const { blind_role_id } = require('../../lib')
module.exports = {
	args: 1,
	permissions: ['MUTE_MEMBERS'],
	description: 'Keqing will blind that member has mentioned',
	run (bot, message, args) {
		if (args[1] && !ms(args[1]) && ms(args[1]) !== 0) return message.channel.send('Invalid Blind Duration')

		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to blind')
		try {
			member.roles.add(blind_role_id)
			message.channel.send(`Keqing has blinded <@${member.user.id}> ${args[1] ? `for ${ms(ms(args[1]), { long: true })} ` : ''}:( Sorry ;-;`)
			if (args[1]) {
				setTimeout(() => {
					member.roles.remove(blind_role_id)
					message.channel.send(`Keqing has unblinded <@${member.user.id}> :)`)
				}, ms(args[1]))
			}
		} catch {
			message.channel.send('Keqing cannot blind that user.')
		}
	}
}