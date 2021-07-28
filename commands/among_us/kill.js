const { alive_role_id, dead_role_id } = require('../../config.json')

module.exports = {
	async run (message, args) {
		message.delete()
		const { among_us } = message.client.db
		if (message.author.id !== await among_us.get('impostor')) return message.channel.send('You\'re not the impostor!')
		const victim = message.mentions.members.map(member => member.id)[Math.floor(Math.random() * message.mentions.members.size)]
		await among_us.set(`${victim}.role`, 0)
		const alive_role = message.guild.roles.cache.get(alive_role_id)
		const dead_role = message.guild.roles.cache.get(dead_role_id)
		message.client.members.cache.get(victim).roles.remove(alive_role)
		message.client.members.cache.get(victim).roles.add(dead_role)
	}
}
