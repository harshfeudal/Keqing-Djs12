module.exports = {
	async run (bot, message, args) {
		if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You cannot tell me to do that')
		let bans = await message.guild.fetchBans()
		bans = bans.map(ban => `To unban ${ban.user.tag} send k?unban ${ban.user.id}`).join('\n')
		if (!args.length) message.channel.send(bans || 'No bans found.')
		if (args[0] && !bot.users.cache.get(args[0])) return message.channel.send('I dont know what you mean :( (Invalid User ID, send k?unban for a ban list)')
		try {
			message.guild.members.unban(bot.users.cache.get(args[0]))
			message.channel.send('Keqing has unban that user')
		} catch {
			message.channel.send('Keqing cannot unban that user.')
		}
	}
}
