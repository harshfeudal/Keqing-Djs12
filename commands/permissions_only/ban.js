const { MessageButton } = require('discord-buttons')

module.exports = {
	args: 1,
	permissions: ['BAN_MEMBERS'],
	description: 'Keqing will ban member the has mentioned',
	run (bot, message, args) {
		const member = message.mentions.members.first()
		if (!member) return message.channel.send('You must mention someone to ban')
		message.channel.send(`Are you sure? Click the button below to ban ${member.displayName}`, new MessageButton()
			.setLabel(`Ban ${member.displayName}`)
			.setStyle('red')
			.setID(`ban_${message.author.id}_${member.user.id}`)
		).then(_message => setTimeout(() => _message.edit('Button removed as you did not press it in time.', { components: [] }), 10000))
	}
}
