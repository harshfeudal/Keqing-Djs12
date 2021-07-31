module.exports = {
	async run (bot, button) {
		if (button.id.startsWith('ban')) {
			await button.clicker.fetch()

			const [, user_id, member] = button.id.split('_')

			if (user_id !== button.clicker.user.id) return await button.reply.send('You cannot do this', true)

			try {
				member.ban()
				button.channel.send(`Keqing has banned ${member.user.tag} (${member.user.id}) :( Sorry ;-;`)
			} catch {
				button.channel.send('Keqing cannot ban that user.')
			}
		}
	}
}
