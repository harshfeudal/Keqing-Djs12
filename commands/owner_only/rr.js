const Discord = require('discord.js')
const { russia_emoji_name, spanish_emoji_name, english_emoji_name, vietnam_emoji_name } = require('../../config.json')

module.exports = {
	owner_only: true,
	description: 'Keqing will add a role for who has reacted',
	async run (bot, message, args) {
		const embed = new Discord.MessageEmbed()
			.setColor('#85FFF2')
			.setTitle('Welcome to Geometry Dash hall!')
			.setDescription('Choose your own language **here**\n\n' +
            `${russia_emoji_name} for Russian people\n` +
            `${spanish_emoji_name} for Spanish people\n` +
            `${english_emoji_name} for Russian people\n` +
            `${vietnam_emoji_name} for Spanish people\n`
			)

		const messageEmbed = await message.channel.send(embed)
		messageEmbed.react(russia_emoji_name)
		messageEmbed.react(spanish_emoji_name)
		messageEmbed.react(english_emoji_name)
		messageEmbed.react(vietnam_emoji_name)
	}
}
