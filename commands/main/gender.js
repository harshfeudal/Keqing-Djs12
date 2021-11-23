module.exports = {
	description: 'bruh',
	run (bot, message, args) {
		const reply = [`I'm female, of course :(`, `Bruh, why you always ask my gender? I'm female <:ANKeqingPout:891185166305865768>`, `Who said I'm male? <:ANKeqingGun:891185070096912405>`]
		message.channel.send(`${reply[Math.floor(Math.random() * reply.length)]}`)
	}
}