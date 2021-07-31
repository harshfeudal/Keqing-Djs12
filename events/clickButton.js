module.exports = {
	async run (bot, button) {
		if (button.id.startsWith('ban')) {
			await button.clicker.fetch()

			const [, user_id, member] = button.id.split('_')

			if (user_id[1] !== button.clicker.user.id) return await button.reply.send('You cannot do this', true)

			try {
				member.ban()
				button.message.edit(`Keqing has banned ${member.user.tag} (${member.user.id}) :( Sorry ;-;`, { components: [] })
			} catch {
				button.message.edit('Keqing cannot ban that user.', { components: [] })
			}
		}
	}
}
