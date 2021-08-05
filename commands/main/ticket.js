const discord = require('discord.js')
module.exports = {
	description: 'Ticket with Harshfeudal via Keqing.',
	async run (bot, message, args) {
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    channel.setParent('872132632811540580');

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send("Thanks for contacting support!");

    try {

      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");

    } catch (err) {
      channel.send("Keqing cannot send emojis ;-;");
      throw err;
    }

    const collector = reactionMessage.createReationCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
      { dispose: true }
      );

    collector.on('collect', (reaction, user) => {
      switch (reaction.emoji.name){
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false});
          break;
        case "⛔":
          channel.send("Keqing will delete this channel in 5 seconds :)");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel.send(`I will be right with you :) ${channel}`).then((msg) => {
      setTimeout(() => msg.delete(), 7000);
      setTimeout(() => message.delete(), 3000);
    }).catch((err) => {
      throw err;
    })
	}
}
// symbol: 🔒, ⚠️, ⛔