const { member_role_id } = require('../../config.json')
module.exports = {
	description: 'verify the participant',
	run (bot, message, args) {
		if (message.member.roles.cache.has(member_role_id)) {
			message.channel.send('You are verified already.').then(msg => {
				setTimeout(() => {
					message.delete()
					msg.delete()
				}, 3000)
			})
		} else {
			message.member.roles.add(member_role_id)
			message.member.roles.add(member_role_id)
			message.channel.send('You are now verified :)').then(msg => {
				setTimeout(() => {
					message.delete()
					msg.delete()
				}, 3000)
			})
		}
	}
}
