const Discord = require('discord.js')

module.exports = {
	description: 'Keqing will add a role for who has reacted',
	async run (message, args) {
		const channel = ''
		const russia = message.guild.roles.cache.find(role => role.name === '🇷🇺 русский язык')
		const spanish = message.guild.roles.cache.find(role => role.name === '🇪🇸 Español')
		const english = message.guild.roles.cache.find(role => role.name === 'English')
		const vietnam = message.guild.roles.cache.find(role => role.name === '🇻🇳 Vietnamese')

		const russiaEmoji = '🇷🇺'
		const spanishEmoji = '🇪🇸'
		const englishEmoji = '🇺🇸'
		const vietnamEmoji = '🇻🇳'

		const embed = new Discord.MessageEmbed()
			.setColor('#85FFF2')
			.setTitle('Welcome to Geometry Dash hall!')
			.setDescription('Choose your own language **here**\n\n' +
            `${russiaEmoji} for Russian people\n` +
            `${spanishEmoji} for Spanish people\n` +
            `${englishEmoji} for Russian people\n` +
            `${vietnamEmoji} for Spanish people\n`
			)

		const messageEmbed = await message.channel.send(embed)
		messageEmbed.react(russiaEmoji)
		messageEmbed.react(spanishEmoji)
		messageEmbed.react(englishEmoji)
		messageEmbed.react(vietnamEmoji)
	}
}
