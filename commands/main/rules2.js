const Discord = require('discord.js')

module.exports = {
	description: 'automate rules bot',
	async run (bot, message, args) {
		if (message.member.roles.cache.has('846425937276305458')) {
			message.channel.send('https://cdn.discordapp.com/attachments/846427288232394822/860118371948167208/712e573d6c0d6e8db0c918c649b8fc88.png')
			const embed1 = new Discord.MessageEmbed()
				.setColor('#85FFF2')
				.setDescription(`**Welcome to my GD Collaboration Team!**

__Team name:__ Team Addiction.
        
First of all, to join this server, you need to have my permission to join inside here. 
        
This group may be separated into 2 teams:
        
**1. Gameplay Team.**
        
**2. Decoration Team**
        
**———————————————**
        
**RULES IN BOTH TEAMS**
        
**1.** Respect and suggest to each other. 
**2.** NO WAR in here. Be friendly. 
**3.** I will let you have permission to share media together, so please don’t share any *pornography, annoyed memes, or everything that may get people feel annoyed, disturb, cringe, or feel shy to chat on this community.*
        
**~~~~~~~~~~~~~~~~~~~~~**
**FOR GAMEPLAY TEAM**

- Will have a role to come in ( <@&851894856975384637> ). 
- Make a fun gameplay so as to let the level more epic!

**~~~~~~~~~~~~~~~~~~~~~**
**FOR DECORATION TEAM**

- Will have a role to come in ( <@&851895577813188669> ). 
- All of my suggestion for <@&851895577813188669> : drawing anime, blocks decoration quite more like Sami’s style or CitraX’s style. Other famous creator styles can be accepted too. 

**--------------------------------------**
**How to join in here:** Go to <#860125059057319966> so as to collaborate with me in this Team Addiction!

Moreover, I have created a <@&860895503398862879> role, which is help me verify some of level that the team can't verify it, or to verify extreme demon level in our team. To enroll in it, I need you to list some extreme demon levels that you **have beaten it completely with no hack**, and at least 2 extreme demon levels you have won.

**Before you write an application**
1. Please write in formal way. 
2. Do not plagiarism with each other.
3. Do not write abbreviation words (idk, wdym, etc, ... ).
*Cooldown: 1h*

**Any question?** Contact with us by email: teamaddiction2021@gmail.com

Have fun and try your best!`)

			message.channel.send(embed1)
		}
	}
}
