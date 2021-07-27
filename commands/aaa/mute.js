const ms = require('ms')
module.exports = {
	description: 'Keqing will mute member the has mentioned',
	run (message, args) {
		if (!ms(args[1])) return message.channel.send('I dont know what you mean :(')

		const target = message.mentions.users.first()

		if (message.member.roles.cache.has('854767607193403463')) {
			if (target) {
				const mainRole = message.guild.roles.cache.find(role => role.name === 'member')
				const muteRole = message.guild.roles.cache.find(role => role.name === 'mute')

				const memberTarget = message.guild.members.cache.get(target.id)

				if (!args[1]) {
					memberTarget.roles.remove(mainRole.id)
					memberTarget.roles.add(muteRole.id)
					message.channel.send(`Keqing has muted <@${memberTarget.user.id}> :( Sorry ;-;`)
					return
				}
				memberTarget.roles.remove(mainRole.id)
				memberTarget.roles.add(muteRole.id)
				message.channel.send(`Keqing has muted <@${memberTarget.user.id}> for ${ms(ms(args[1]))} :( Sorry ;-;`)

				setTimeout(function () {
					memberTarget.roles.remove(muteRole.id)
					memberTarget.roles.add(mainRole.id)
					message.channel.send(`Keqing has unmuted <@${memberTarget.user.id}> :)`)
				}, ms(args[1]))
			} else {
				message.channel.send('Keqing could not mute that member lmao :(')
			}
		} else {
			message.channel.send('You cannot tell me to do that :(')
		}
	}
}

// staff id: 854767607193403463

// if (message.member.roles.cache.has('854767607193403463')){
//    message.channel.send('You have already verified.');
// } else {
//    message.channel.send('You cannot tell me to do that :(');
// }
