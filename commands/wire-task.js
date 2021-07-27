module.exports = {
  name: 'wiretask',
  description: 'Wire Task',
  execute (message, args) {
    message.channel.send('Test\nReact :+1:\n(Limit: 15 seconds)').then(message => {
      const filter = (reaction) => {
  	    return reaction.emoji.name === '👍';
      };

      const collector = message.createReactionCollector(filter, { time: 15000 });

      collector.on('collect', (reaction, user) => {
	      message.channel.send(`Collected ${reaction.emoji.name} from ${user.tag}`)
        console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
      });

      collector.on('end', collected => {
	      message.channel.send(`Collected ${collected.size} items`)
        console.log(`Collected ${collected.size} items`);
      });
    })
  }
}