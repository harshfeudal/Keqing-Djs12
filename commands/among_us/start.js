const { prefix } = require('../../config.json')

module.exports = {
	async run (message, args) {
		message.channel.send(`[372005]: Make sure you have mention **ALL** participants AND ALL PARTICIPANTS have enabled Allow DM from server member. If any participants don't get a DM, Remember to tell the host to reset the game\nIf you miss any participants, please reset the game with ${prefix} reset`)
		// if (message.mentions.members.size < 3) return message.channel.send('Cannot start with less than 3 paritipants.')
		message.channel.send('Randomly selecting an imposter...')
		let crewmates = message.mentions.members.map(member => member.id)
		const impostor = crewmates[Math.floor(Math.random() * crewmates.length)]
		crewmates = crewmates.filter(crewmate => crewmate !== impostor)

		const { among_us } = message.client.db
		message.client.users.cache.get(impostor).send('IMPOSTOR').catch(error => console.log(error))
		among_us.set('impostor', impostor)
		console.log(`Impostor ${impostor} (${message.client.users.cache.get(impostor).username})`)
		for (const crewmate of crewmates) {
			console.log(`Crewmate ${crewmate} (${message.client.users.cache.get(crewmate).username})`)
			message.client.users.cache.get(crewmate).send('CREWMATE').catch(error => console.log(error))
			among_us.set(`${crewmate}.alive`, 1)
		}
		message.channel.send('Check your DM, participants! If you don\'t get a DM, Remember to tell the host to reset the game AND enabled Allow DM from server member')
	}
}
