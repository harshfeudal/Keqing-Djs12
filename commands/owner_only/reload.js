const { owners } = require('../../config.json')
module.exports = {
	async run (bot, message, args) {
		if (!owners.includes(message.author.id)) return message.channel.send(`The ${this.name} command can only be used by the bot owners`)
		if (!args.length) return message.channel.send('You didn\'t provide any arguments')
		const command_name = args[0].toLowerCase()
		const command = bot.commands.get(command_name) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command_name))

		if (!command) return message.channel.send('Unknown command!')

		delete require.cache[require.resolve(`../${command.group}/${command.name}.js`)]

		const new_command = require(`../${command.group}/${command.name}.js`)

		new_command.group = command.group
		new_command.name = command.name

		bot.commands.set(new_command.name, new_command)

		message.channel.send('Reloaded command!')
	}
}
