const ms = require('ms')
const { warn_1 } = require('../../lib')
module.exports = {
	args: 1,
	permissions: ['MUTE_MEMBERS'],
	description: 'Keqing will warn member has mentioned (first warn)',
	run (bot, message, args) {
		if (args[1] && !ms(args[1]) && ms(args[1]) !== 0) return message.channel.send('Invalid Warn Duration')

		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to warn')
		try {
			member.roles.add(warn_1)
			message.channel.send(`Keqing has warned <@${member.user.id}> ${args[1] ? `for ${ms(ms(args[1]), { long: true })} ` : ''}:( Sorry ;-; (first warn)`)
			if (args[1]) {
				setTimeout(() => {
					member.roles.remove(warn_1)
					message.channel.send(`Keqing has removed the warn from <@${member.user.id}> :)`)
				}, ms(args[1]))
			}
		} catch {
			message.channel.send('Keqing cannot warn that user.')
		}
	}
}