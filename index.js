require('dotenv').config()
const { readdirSync } = require('fs')
const { log } = require('./lib')

// Bot
const { Client, Collection, TextChannel } = require('discord.js')
const bot = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
bot.login(process.env.token)

// Events
const files = readdirSync('./events')
for (const file of files) {
	const event = require(`./events/${file}`)
	if (!event.name) event.name = file.replace('.js', '')
	if (event.run) bot.on(event.name, (...args) => event.run(bot, ...args))
	else log(1, `[${file}] run () {} missing! The ${file.slice(0, -3)} event will NOT be handled!`)
}

// Commands
bot.groups = []
bot.commands = new Collection()
const folders = readdirSync('./commands')
for (const folder of folders) {
	if (folder !== 'owners_only') bot.groups.push(folder)
	const files = readdirSync(`./commands/${folder}`)
	for (const file of files) {
		const command = require(`./commands/${folder}/${file}`)
		if (!command.group) command.group = folder
		if (!command.name) command.name = file.replace('.js', '')
		if (command.run) bot.commands.set(command.name, command)
		else log(1, `[${file}] run () {} missing! The ${file.slice(0, -3)} command will NOT be handled`)
	}
}

// Buttons
const buttons = require('discord-buttons')
buttons(bot)

// Database
const { Database } = require('quickmongo');
bot.db = new Database(process.env.db);
bot.db.on('ready', () => log(2, `[Database] Connected to Harshfeudal's Database`)); 

//Mongoose database
const mongoose = require('mongoose');

mongoose.connect(process.env.db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(()=>{
	console.log(`Connected to Harshfeudal's Database!`);
}).catch((err) => {
	console.log(err);
})

// Website
require('./dashboard/index')
