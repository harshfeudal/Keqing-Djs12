const { MessageEmbed } = require('discord.js')

module.exports = {
	async run (bot, message, args) {
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
			.setTimestamp()

		if (!args.length) {
			embed.setTitle('Here\'s a list of all my commands!')
			embed.setDescription(`You can send ${process.env.prefix}help [command name] to get info on a specific command!`)

			for (const group of bot.groups) embed.addField(group, bot.commands.filter(command => command.group === group).map(command => command.name).join(', '), true)

			return message.channel.send(embed)
		}
		const command_name = args[0].toLowerCase()
		const command = bot.commands.get(command_name) || bot.commands.find(_command => _command.aliases && _command.aliases.includes(command_name))

		if (!command) return message.channel.send('Unknown command!')
		if (command.group === 'owners_only') return message.channel.send('Unknown command! ||or is it?||')

		embed.setTitle(command.name)
		if (command.description) embed.setDescription(command.description)
		if (command.aliases) embed.addField('Aliases:', command.aliases.join(', '))
		if (command.permissions) embed.addField('Require the following permissions:', command.permissions.join(', '))
		message.channel.send(embed)
	}
}
