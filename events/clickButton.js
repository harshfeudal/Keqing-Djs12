module.exports = {
	async run (bot, button) {
		if (button.id.startsWith('ban')) {
			await button.clicker.fetch()

			const [, user_id, member_id] = button.id.split('_')

			if (user_id !== button.clicker.user.id) return await button.reply.send('You cannot do this', true)

			const member = button.guild.members.fetch(member_id)
			try {
				member.ban()
				button.channel.send(`Keqing has banned ${member.user.tag} (${member.user.id}) :( Sorry ;-;`)
			} catch (e) {
				console.log(e)
				button.channel.send(`Keqing cannot ban ${member.user.tag}`)
			}
		}
		if (button.id.startsWith('kick')) {
			await button.clicker.fetch()

			const [, user_id, member_id] = button.id.split('_')

			if (user_id !== button.clicker.user.id) return await button.reply.send('You cannot do this', true)

			const member = button.guild.members.fetch(member_id)
			try {
				member.ban()
				button.channel.send(`Keqing has kick ${member.user.tag} (${member.user.id}) :( Sorry ;-;`)
			} catch (e) {
				console.log(e)
				button.channel.send(`Keqing cannot kick ${member.user.tag}`)
			}
		}
	}
}
