const { role_id, alive_role_id } = require('../../config.json')

module.exports = {
	async run (message, args) {
		message.channel.send('Randomly selecting an imposter...')
		let crewmates = []
		for (const member of message.guild.members.cache.map(member => member)) if (member.roles.cache.has(role_id))crewmates.push(member.id)
		const impostor = crewmates[Math.floor(Math.random() * crewmates.length)]
		crewmates = crewmates.filter(crewmate => crewmate !== impostor)

		const { among_us } = message.client.db
		among_us.set('state', 0)
		message.client.users.cache.get(impostor).send('IMPOSTOR').catch(error => console.log(error))
		among_us.set('impostor', impostor)
		const alive_role = message.guild.roles.cache.get(alive_role_id)
		message.client.members.cache.get(impostor).roles.add(alive_role)
		for (const crewmate of crewmates) {
			message.client.users.cache.get(crewmate).send('CREWMATE').catch(error => console.log(error))
			among_us.set(`${crewmate}.alive`, 1)
			message.client.members.cache.get(crewmate).roles.add(alive_role)
		}
		message.channel.send('Check your DM, participants! If you don\'t get a DM, Remember to tell the host to reset the game AND enabled Allow DM from server member')
	}
}
