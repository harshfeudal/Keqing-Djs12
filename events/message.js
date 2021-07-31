const { prefix } = process.env
const { owners } = require('../lib')
module.exports = {
	run (bot, message) {
		// Preventing Botception
		if (message.author.bot) return

		// Checking Prefix
		if (!message.content.toLowerCase().startsWith(prefix)) return

		const args = message.content.slice(prefix.length).trim().split(/ +/)
		const command_name = args.shift().toLowerCase()
		const command = bot.commands.get(command_name) || bot.commands.find(_command => _command.aliases && _command.aliases.includes(command_name))

		if (!command) return

		// checking owners only
		if (command.owner_only && !owners.includes(message.author.id)) return message.channel.send(`The ${command.name} command can only be used by the bot owners`)

		// checking guild only
		if (command.guild_only && !message.guild) return message.channel.send(`The ${command.name} command must be used in a server channel.`)

		// checking permissions only
		if (command.permissions) for (const permission of command.permissions) if (!message.member.hasPermission(permission)) return message.channel.send(`You dont have the following permission: ${command.permissions}`)

		// checking args
		if (args.length < command.args) return message.channel.send(`You didn't provide ${args.length ? 'enough' : 'any'} arguments`)

		command.run(bot, message, args)
	}
}
