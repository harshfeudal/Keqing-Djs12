require('dotenv').config()

// Discord Bot
const { Client, Collection } = require('discord.js')
const bot = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
bot.login(process.env.token)

// Event Handler
bot.on('ready', () => {
	console.log(`[Bot] Logged in as ${bot.user.tag}!`)

	bot.user.setPresence({ activity: { name: 'Watching my husband Harshfeudal fixing me. Call me by using [k?] <3' }, status: 'dnd' })

	const { guild_id, channel_id, russia_emoji_name, russia_role_id, spanish_emoji_name, spanish_role_id, english_emoji_name, english_role_id, vietnam_emoji_name, vietnam_role_id } = require('./config.json')

	const guild = bot.guilds.cache.get(guild_id)

	const russia_role = guild.roles.cache.get(russia_role_id)
	const spanish_role = guild.roles.cache.get(spanish_role_id)
	const english_role = guild.roles.cache.get(english_role_id)
	const vietnam_role = guild.roles.cache.get(vietnam_role_id)

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
})

bot.on('message', message => {
	if (!message.content.toLowerCase().startsWith(process.env.prefix) || message.author.bot) return
	const args = message.content.slice(process.env.prefix.length).trim().split(/ +/)
	const commandName = args.shift().toLowerCase()

	const command = bot.commands.get(commandName)
	if (!command) return message.channel.send('I dont know what you want to tell me something :(')
	command.run(bot, message, args)
})

// Commands Handler
bot.commands = new Collection()
const { readdirSync } = require('fs')
const folders = readdirSync('./commands')
for (const folder of folders) {
	const files = readdirSync(`./commands/${folder}`)
	for (const file of files) {
		const command = require(`./commands/${folder}/${file}`)
		if (!command.name) command.name = file.replace('.js', '')
		if (!command.group) command.group = folder
		bot.commands.set(command.name, command)
	}
}

// Database
const { Database } = require('quickmongo')
bot.db = new Database(process.env.db)

// Database Models
bot.db.among_us = bot.db.createModel('among_us')

// Database Event Handler
bot.db.on('ready', () => console.log('[Database] Connected to 372005 Database!'))

// Website
require('./dashboard/index')
