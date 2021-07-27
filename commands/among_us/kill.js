module.exports = {
	async run (message, args) {
		const { among_us } = message.client.db
		if (message.author.id !== await among_us.get('impostor')) return message.channel.send('You\'re not the impostor!')
		if (!message.mentions.members.size) return message.channel.send('Mention who you want to kill, mention 2 or more to randomly kill someone :)')
		const victim = message.mentions.members.map(member => member.id)[Math.floor(Math.random() * message.mentions.members.size)]
		await among_us.set(`${victim}.role`, 0)
		message.channel.send(`Successfully killed <@${victim}>`)
	}
}
