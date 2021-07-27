module.exports = {
  name: 'spam',
  execute (message, args) {
    message.channel.send('SPAM! (Time Limit: 15 seconds)')

const filter = m => !m.author.bot
const collector = message.channel.createMessageCollector(filter, { time: 15000 });

collector.on('collect', m => {
	message.channel.send(`Collected ${m.content} from ${m.author.tag}`)
  console.log(`Collected ${m.content}`);
});

collector.on('end', collected => {
	message.channel.send(`Collected ${collected.size} items`)
  console.log(`Collected ${collected.size} items`);
});

  }
}