require('dotenv').config()

const { Client, Collection } = require('discord.js')

const bot = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })

const fs = require('fs')

bot.commands = new Collection()

const folders = fs.readdirSync('./commands')
for (const folder of folders) {
	const files = fs.readdirSync(`./commands/${folder}`)
	for (const file of files) {
		const command = require(`./commands/${folder}/${file}`)
		if (!command.name) command.name = file.replace('.js', '')
		bot.commands.set(command.name, command)
	}
}

bot.on('ready', () => {
	console.log(`${bot.user.tag} is online :)`)

	bot.user.setPresence({ activity: { name: 'Watching my husband Harshfeudal fixing me. Call me by using [k?] <3' }, status: 'dnd' })

	// [372005]: REACTION ROLES
	reaction_role()
})

bot.on('message', message => {
	if (!message.content.toLowerCase().startsWith(process.env.prefix) || message.author.bot) return
	const args = message.content.toLowerCase().replace(process.env.prefix, '').trim().split(/ +/)
	const commandName = args.shift().toLowerCase()

	const command = bot.commands.get(commandName)
	if (!command) return message.channel.send('I dont know what you want to tell me something :(')
	command.run(message, args)
})

const http = require('http')
const server = http.createServer((req, res) => {
	res.writeHead(200)
	res.end('ok')
})
server.listen(3000)

bot.login(process.env.token)

// [372005]: REACTION ROLES

function reaction_role () {
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
}

// [372005]: DATABASE
const { Database } = require('quickmongo')
bot.db = new Database(process.env.db)
bot.db.among_us = bot.db.createModel('among_us')
