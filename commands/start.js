module.exports = {
  name: 'start',
  execute (message, args) {
    message.channel.send('Make sure that you mention everyone involved in the game')
    if(message.mentions.members.size)
  }
}