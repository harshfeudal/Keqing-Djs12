const { MessageEmbed } = require('discord.js')
module.exports = {
	async run (bot, message, args) {
		message.channel.send('https://cdn.discordapp.com/attachments/850784210976505917/859475734656843776/level_perks_banner___aurora_by_narkofficial_decht8v-pre.png')
		const embed1 = new MessageEmbed()
			.setColor('#85FFF2')
			.setDescription(`**Level Information**

<@&850790258866258000> when members reach at that level (Show in RoboTop notification) - Can access media in General chat. 

<@&850790153403236354> when members reach at that level (Show in RoboTop notification) - Can react emoji in General Chat, but cannot use External Emoji.

<@&850790057577021512> when members reach at that level (Show in RoboTop notification). - You can use External Emoji in everywhere. 

<@&850789677882671145> when members reach at that level (Show in RoboTop notification). - You can change your nickname. 

<@&850789568538083389> when members reach at that level (Show in RoboTop notification). - You can dm me and send your server so as to partner with you at #partner-server. 

<@&850788898447163443> when members reach at that level (Show in RoboTop notification) + include this symbol: ◇. - Unlocked  **#Other Stream** channel. 

<@&850788810371104768> when members reach at that level (Show in RoboTop notification) - You can be as a *Lieutenant* of our server with an application.

<@&850788065441349652> when members reach at that level (Show in RoboTop notification) + include this symbol: ♮ 

<@&850787348315635712> when members reach at that level (Show in RoboTop notification) + include this symbol: ∆ - You may as a **Developer** of our server.

<@&850786794157113445> when members reach at that level (Show in RoboTop notification) + include this symbol: ✤ - You can add friend me on Discord.

<@&850785947280211999> when members reach at that level (Show in RoboTop notification) + include this symbol: ✧ - You can easily gain as Co-Owner with an application.

————————————————

<@&846425937276305458> , <@&857661860072390716> , <@&851000012891881472> , <@&861943044433117224> , <@&859300924659728384> , <@&846426200464818186> and <@&854767607193403463> can join together too!

<@&848801951902203924> cannot be leveled by RoboTop

Note: Tell me if you have subscribed me I will give you 10,000XP from the beginning;and if you boost my server, for each boost I will add you 5,000XP. 

Big thanks to <@621844409901776910> , the developer of our server!`)

		message.channel.send(embed1)
	}
}
