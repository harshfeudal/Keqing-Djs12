const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "automate rules bot",
    async execute(message, args) {
        message.channel.send('https://cdn.discordapp.com/attachments/846427288232394822/860118056537161748/HV7xOwu.gif')
        const embed1 = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setDescription(`Welcome to Harshfeudal Discord server!**
        
        This is my YouTube channel:
        :harshfeudal: https://www.youtube.com/c/Harshfeudal
        
        To be honest, this is the **Gaming community** server, where you can chat and share tips together, not only for Geometry Dash, but also Genshin Impact, Minecraft, and so on.
        
        First of all, you need to verify your Discord account to make sure that you are now joining into Discord community.
        
        :NitroBoost~1: :fallennitro~1: No need to registered Discord Nitro, but if you have it, it would be a great appreciate.`)

        const embed2 = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setDescription(`**———————————————**
        __**SERVER INFORMATION**__
        :harshfeudal: We have lots of channels and categories, and I will presented for you to know where and how these channels work. 
        
        #leveling-info is the information channel about ranking up your role to get some great stuffs and facilities.
        
        #gd-general-english , #gd-general-español , #gd-general-français and #gd-general-日本語 are 4 main channels for you to chat about Geometry Dash.
        
        #mc-general-english , #mc-general-español , #mc-general-français and #mc-general-日本語 are 4 main channels for you to chat about Minecraft.
        
        #gi-general-english  , #gi-general-español , #gi-general-français and #gi-general-日本語 are 4 main channels for you to chat about Genshin Impact.
        
        #genshin-impact-announcement is an announcement channel about Genshin Impact.
        
        #media-share is the place where you want to send our members about your photos, or some source links. 
        
        #genshin-impact-character , #anime-boy , #anime-girl and #cute-anime are the places where you can share some anime imagines. 
        
        And so on!
        
        #stream-suggestions is the place you can suggest for me to do my future stream.
        
        In **News Category**: you can see GD News at there; and we have divided for you into 4 separate channels so as to easy to look up: #gd-daily-weekly-level , #gd-level-rate , #gd-mods and #gd-news . Also, I have #internal-announcements is the place where I announced in this server only.
        
        In Collaboration Category: Read carefully the #team-rules and my request and tag me to join.`)

        const embed3 = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setDescription(`**———————————————**
        __**ADMIN INFORMATION:**__
        <@622450109317251088>: Owner
        
        <@621844409901776910> and <@742757174895444024> : Co-Owner
        
        <@642482771964592139>, <@804396521671229481>, <@771396049621352528> and <@729036388573511780> : Admins
        
        <@464243876022976512> : Staffs
        
        <@334461627225210880> , <@734090797611221083> : Developers
        
        This is my Discord server invitation
        https://discord.gg/WQ2sZK4Cwr
        
        Team contact email:
        *teamaddiction2021@gmail.com*`)

        message.channel.send(embed1);
        message.channel.send(embed2);
        message.channel.send(embed3);
    }
}