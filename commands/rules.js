const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "automate rules bot",
    async execute(message, args) {
        
        if (message.member.roles.cache.has('846425937276305458')){
        
        message.channel.send('https://cdn.discordapp.com/attachments/846427288232394822/860118056537161748/HV7xOwu.gif')
        const embed1 = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setDescription(`**Welcome to Harshfeudal Discord server!**
    
    This is my YouTube channel:
    <:harshfeudal:848815852886949908> https://www.youtube.com/c/Harshfeudal
    
    To be honest, this is the **Gaming community** server, where you can chat and share tips together, not only for Geometry Dash, but also Genshin Impact, Minecraft, and so on.
        
    First of all, you need to verify your Discord account to make sure that you are now joining into Discord community.
        
    <:NitroBoost:854707844930994226> No need to registered Discord Nitro, but if you have it, it would be a great appreciate.`)

        const embed2 = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setDescription(`**———————————————**
    __**SERVER INFORMATION**__
    <:harshfeudal:848815852886949908> We have lots of channels and categories, and I will presented for you to know where and how these channels work. 
    
    <#850784210976505917> is the information channel about ranking up your role to get some great stuffs and facilities.
        
    <#838697343251382284> , <#848798136200724490> , <#848798188688244746> and <#852271405172129792> are 4 main channels for you to chat about Geometry Dash.
        
    <#858933891493265418> , <#859795442376114186> , <#859795540434485309> and <#859795570800590858> are 4 main channels for you to chat about Minecraft.
        
    And so on!
        
    <#857280791649845248> is an announcement channel about Genshin Impact.
        
    <#847777776505192458> is the place where you want to send our members about your photos, or some source links. 
        
    <#851906813699031080> , <#851906902153625630> , <#851906942007115778> , <#851906990024032311> and <#865672934374244383> are the places where you can share some anime imagines. 
        
    And so on!
        
    <#841705846706405406> is the place you can suggest for me to do my future stream.
        
    In **News Category**: you can see GD News at there; and we have divided for you into 4 separate channels so as to easy to look up: #gd-daily-weekly-level , #gd-level-rate , #gd-mods and #gd-news . Also, I have #internal-announcements is the place where I announced in this server only.
        
    In Collaboration Category: Read carefully the #team-rules and my request and tag me to join.`)

        const embed3 = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setDescription(`**———————————————**
    __**ADMIN INFORMATION:**__
    <@622450109317251088>: Owner
        
    <@621844409901776910> and <@742757174895444024> : Co-Owner
        
    <@642482771964592139>, <@804396521671229481>, <@771396049621352528> and <@729036388573511780> : Admins
        
    <@464243876022976512> and <@716668405008171072> : Staffs
        
    <@334461627225210880> , <@734090797611221083> : Developers
        
    This is my Discord server invitation
    https://discord.gg/WQ2sZK4Cwr
        
    Team contact email:
    *teamaddiction2021@gmail.com*`)

        const embed4 = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setDescription(`**So these are the rules in this chat:**
    1. Try to contribute to the conversation! Spamming is not allowed.
        
    2. Do not start or partake in drama. This includes vocalizing an opinion that insults others or is controversial and raiding other servers. 
        
    3. Do not annoy or harass other members. That includes advertising, tagging randomly, impersonating others, and just trolling in general. Naturally, terms that insult a race, disability, sexual orientation, or nationality are prohibited. Revealing someone else's info without consent or pressuring them into doing so counts as harassment. Let's make this a nice server for @everyone.
        
    4. Do not post or talk about NSFW content, such as sexual acts, drugs, and human indecencies. Debating over these things is still talking about them! 
        
    5. Do not harm the Geometry Dash community or cheat to gain a statistical advantage. If you are affiliated with trolling in comments, botting likes, or hacking others, you will be banned immediately.
        
    6. Do not use channels for anything other than their intended purposes. For example, sending bot commands in any of the general chats is not allowed. English is the language to use if not stated otherwise.
        
    7. Do not try to bypass any of the rules. This includes leaving and rejoining the server to remove a warn, and using an alternate account after being banned.
        
    8. Use this icon to chat :harshfeudal: if you want to tag me or suggest to me
        
    9. Don’t be a liar or else you will be kicked. If your lie not too serious, you will have a possible mute time.
    
    **Breaking the Discord Terms of Service will result in a ban without warning. You can appeal a ban by sending a direct message to an <@854767607193403463>. Based on the severity and time of your infractions, we will decide whether you will be unbanned or not.
    **`)

        message.channel.send(embed1);
        message.channel.send(embed2);
        message.channel.send(embed3);
        message.channel.send('https://cdn.discordapp.com/attachments/846427288232394822/860118371948167208/712e573d6c0d6e8db0c918c649b8fc88.png')
        message.channel.send(embed4);
        } else {
            message.channel.send('You cannot tell me to do that :(');
        }
    }
}