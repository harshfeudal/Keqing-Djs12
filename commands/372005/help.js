module.exports = {
	async run (bot, message, args) {
		const data = []
		const { commands } = bot

		if (!args.length) {
			data.push('Here\'s a list of all my commands!')
			data.push(commands.filter(command => !command.owner_only).map(command => command.name).join(', '))
			data.push(`\nYou can send \`${process.env.prefix}help [command name]\` to get info on a specific command!`)

			message.channel.send(data.join('\n'), { split: true })

			return
		}
		const name = args[0].toLowerCase()
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name))

		if (!command) return message.channel.send('Unknown command!')
		if (command.owner_only) return message.channel.send('Unknown command! ||or is it?||')

		data.push(`**Name:** ${command.name}`)

		if (command.description) data.push(`**Description:** ${command.description}`)

		message.channel.send(data.join('\n'), { split: true })
	}
}
