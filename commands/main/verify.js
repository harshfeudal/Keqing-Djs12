const { verify_role_id } = require('../../config.json')
module.exports = {
	description: 'verify the participant',
	run (bot, message, args) {
		if (message.member.roles.cache.has(verify_role_id)) {
			message.channel.send('You are verified already.')
		} else {
			message.member.roles.add(verify_role_id)
			message.member.roles.add(verify_role_id)
			message.channel.send('You are now verified :)')
		}
	}
}
