module.exports = {
	description: 'Keqing will unmute member the has mentioned',
	run (message, args) {
		const target = message.mentions.users.first()

		if (message.member.roles.cache.has('854767607193403463')) {
			if (target) {
				const mainRole = message.guild.roles.cache.find(role => role.name === 'member')
				const muteRole = message.guild.roles.cache.find(role => role.name === 'mute')

				const memberTarget = message.guild.members.cache.get(target.id)

				memberTarget.roles.remove(muteRole.id)
				memberTarget.roles.add(mainRole.id)
				message.channel.send(`Keqing has unmuted <@${memberTarget.user.id}> :)`)
			} else {
				message.channel.send('Keqing could not unmute that member lmao :(')
			}
		} else {
			message.channel.send('You cannot tell me to do that :(')
		}
	}
}
