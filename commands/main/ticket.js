const discord = require('discord.js')
module.exports = {
	description: 'Ticket with Harshfeudal via Keqing.',
	async run (bot, message, args) {
		let embed = new discord.MessageEmbed()
    .setAuthor(`Welcome to your ticket!`)
    .addField('Here you can:', ':one: Report an issue or bug of the server.\n:two: Suggest any idea for the server.\n:three: Report a staff member of the server.')
    .addField('Make sure to be patient, support will be with you shortly.', `<@&854767607193403463>`)
    .setColor('#468DFF')
    .setFooter(`AftNetwork`)

let embed2 = new discord.MessageEmbed()
    .setAuthor(`React with ⛔ if your issue has been resolved.`)
    .setColor('#468DFF')
    .setFooter(`AftNetwork`)

let reactionMessage = null;
try {
  reactionMessage = await channel.send(`${message.author}`, {
embed: embed,
}).then(message => message.channel.send(embed2));
} catch (error) {
  console.log(error);
  return message.channel.send(
    '⚠️ Error sending message in ticket channel!',
  );
}

try {
  await reactionMessage.react('🔒');
  await reactionMessage.react('⛔');
} catch (err) {
  console.log(err);
  return channel.send('⚠️ Error sending emojis!');
}

const collector = reactionMessage.createReactionCollector(
  (reaction, user) => {
    // collect only reactions from the original
    // author and users w/ admin permissions
    const isOriginalAuthor = message.author.id === user.id;
    const isAdmin = message.guild.members.cache
      .find((member) => member.id === user.id)
      .hasPermission('MANAGE_MESSAGES');

    return isOriginalAuthor || isAdmin;
  },
  { dispose: true },
);

collector.on('collect', (reaction, user) => {
  switch (reaction.emoji.name) {
    // lock: admins only
    case '🔒':
      const isAdmin = message.guild.members.cache
        .find((member) => member.id === user.id)
        .hasPermission('MANAGE_MESSAGES');

      if (isAdmin) {
        channel.updateOverwrite(message.author, {
          SEND_MESSAGES: false,
        });
      } else {
        // if not an admin, just remove the reaction
        // like nothing's happened
        reaction.users.remove(user);
      }
      break;
    // close: anyone i.e. any admin and the member
    // created the ticket
    case '⛔':
      channel.send('Deleting this ticket in 5 seconds...');
      setTimeout(() => channel.delete(), 5000);
      break;
  }
});
	}
}