const { MessageEmbed } = require('discord.js')
module.exports = {
  permissions: [622450109317251088],
	async run (bot, message, args) {
		const embed1 = new MessageEmbed()
			.setColor('#85FFF2')
			.setDescription(`**Welcome to Harshfeudal Discord server!**

This is my YouTube channel:
<:harshfeudal:848815852886949908> https://www.youtube.com/c/Harshfeudal
My **second** Youtube channel:
<:harshfeudal:848815852886949908> https://www.youtube.com/channel/UCnM88rgfYYaN65do-wvWr1w

*(very glad if your guys can subscribe me both <:KeqingHeart_Milkman:883257327657041930>)*

To be honest, this is the **Gaming community** server, where you can chat and share tips together, not only for Geometry Dash, but also Genshin Impact, Minecraft, and so on.
    
First of all, you need to verify your Discord account to make sure that you are now joining into Discord community.
    
<:NitroBoost:854707844930994226> No need to registered Discord Nitro, but if you have it, it would be a great appreciate.`)

		const embed2 = new MessageEmbed()
			.setColor('#85FFF2')
			.setDescription(`**———————————————**
__**SERVER INFORMATION**__
<:harshfeudal:848815852886949908> We have lots of channels and categories, and I will presented for you to know where and how these channels work. 
    
<#857280791649845248> is an announcement channel about Genshin Impact.
    
<#847777776505192458> is the place where you want to send our members about your photos, or some source links. 
    
<#851906813699031080> , <#851906902153625630> , and <#865672934374244383> are the places where you can share some anime imagines. 
    
And so on!
    
<#841705846706405406> is the place you can suggest for me to do my future stream.
    
In **News Category**: you can see GD News at there; and we have divided for you into 4 separate channels so as to easy to look up: <#853942983472316426> , <#853981460046544896> , <#853981880407949336> and <#853998496781041714> . Also, I have <#850235991356735518> is the place where I announced in this server only.
    
In Collaboration Category: Read carefully the <#851888900091674684> and my request and tag me to join.`)

		const embed3 = new MessageEmbed()
			.setColor('#85FFF2')
			.setDescription(`**———————————————**
__**ADMIN INFORMATION:**__
<@!622450109317251088>: Main Owner
<@!290154392538054657>: My second owner.
    
This is my Discord server invitation
https://discord.gg/R3QPeJgK9C
    
Team contact email:
*teamaddiction2021@gmail.com*`)

		const embed4 = new MessageEmbed()
			.setColor('#85FFF2')
			.setDescription(`**So these are the rules in this chat:**
1. Try to contribute to the conversation! Spamming is not allowed.
    
2. Do not start or partake in drama. This includes vocalizing an opinion that insults others or is controversial and raiding other servers. 
    
3. Do not annoy or harass other members. That includes advertising, tagging randomly, impersonating others, and just trolling in general. Naturally, terms that insult a race, disability, sexual orientation, or nationality are prohibited. Revealing someone else's info without consent or pressuring them into doing so counts as harassment. Let's make this a nice server for @everyone.
    
4. Do not post or talk about NSFW content, such as sexual acts, drugs, and human indecencies. Debating over these things is still talking about them! 
    
5. Do not harm the Geometry Dash community or cheat to gain a statistical advantage. If you are affiliated with trolling in comments, botting likes, or hacking others, you will be banned immediately.
    
6. Do not use channels for anything other than their intended purposes. For example, sending bot commands in any of the general chats is not allowed. English is the language to use if not stated otherwise.
    
7. Do not try to bypass any of the rules. This includes leaving and rejoining the server to remove a warn, and using an alternate account after being banned.
    
8. Use this icon to chat <:harshfeudal:848815852886949908> if you want to tag me or suggest to me
    
9. Don’t be a liar or else you will be kicked. If your lie not too serious, you will have a possible mute time.

**Breaking the Discord Terms of Service will result in a ban without warning. You can appeal a ban by sending a direct message to an <@&854767607193403463>. Based on the severity and time of your infractions, we will decide whether you will be unbanned or not.
**`)

		const embed5 = new MessageEmbed()
			.setColor('#85FFF2')
			.setDescription(`**__Please note:__** To welcome this chat, type *k?verify* at <#870507834209603624> so as to have a role and unlock the channel!

    **React your role without a game may cannot show your right channel for you to get in; react with the flag so as to go inside your correct general, so don't forget to react twice! General English may set as default if you neither react the flag nor the game.**`)

		message.channel.send(embed1)
		message.channel.send(embed2)
		message.channel.send(embed3)
		message.channel.send(embed4)
		message.channel.send(embed5)
	}
}
