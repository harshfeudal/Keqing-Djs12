const { prefix } = process.env
const { log } = require('../lib')
module.exports = {
	async run (bot) {
		log(2, `[Bot] Logged in as ${bot.user.tag}!`)

		bot.user.setPresence({ activity: { name: `Watching my husband Harshfeudal fixing me. Call me by using [${prefix}] <3` }, status: 'dnd' })

		const { guild_id, channel_id, russia_emoji_name, russia_role_id, spanish_emoji_name, spanish_role_id, english_emoji_name, english_role_id, vietnam_emoji_name, vietnam_role_id } = require('../lib')

		const guild = await bot.guilds.fetch(guild_id)

		const russia_role = await guild.roles.fetch(russia_role_id)
		const spanish_role = await guild.roles.fetch(spanish_role_id)
		const english_role = await guild.roles.fetch(english_role_id)
		const vietnam_role = await guild.roles.fetch(vietnam_role_id)

		bot.on('messageReactionAdd', async (reaction, user) => {
			if (user.bot) return
			if (reaction.message.partial) await reaction.message.fetch()
			if (reaction.message.channel.id !== channel_id) return
			if (reaction.partial) await reaction.fetch()

			switch (reaction.emoji.name) {
			case russia_emoji_name: return await guild.members.cache.get(user.id).roles.remove(russia_role)
			case spanish_emoji_name: return await guild.members.cache.get(user.id).roles.remove(spanish_role)
			case english_emoji_name: return await guild.members.cache.get(user.id).roles.remove(english_role)
			case vietnam_emoji_name: return await guild.members.cache.get(user.id).roles.remove(vietnam_role)
			}
		})

		bot.on('messageReactionRemove', async (reaction, user) => {
			if (user.bot) return
			if (reaction.message.partial) await reaction.message.fetch()
			if (reaction.message.channel.id !== channel_id) return
			if (reaction.partial) await reaction.fetch()

			switch (reaction.emoji.name) {
			case russia_emoji_name: return await reaction.message.guild.members.cache.get(user.id).roles.remove(russia_role)
			case spanish_emoji_name: return await reaction.message.guild.members.cache.get(user.id).roles.remove(spanish_role)
			case english_emoji_name: return await reaction.message.guild.members.cache.get(user.id).roles.remove(english_role)
			case vietnam_emoji_name: return await reaction.message.guild.members.cache.get(user.id).roles.remove(vietnam_role)
			}
		})
	}
}
