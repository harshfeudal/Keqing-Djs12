module.exports = {
  name: 'ghost',
  async execute (message, args) {
    message.channel.send('Warning! Currently only support 1 mention, 372005 is too lazy atm, will change this later')
    if(!message.mentions.members.size) return message.channel.send('You need to ping the person who is now dead / a ghost')
    message.mentions.members.first().roles.add(await message.guild.roles.fetch('869252442032840714'))
      .then(() => message.channel.send(`Successfully make ${message.mentions.members.first().displayName} dead`))
      .catch(error => {
        console.log(error)
        message.channel.send('An error occurred. Error:' + error)
      })
  }
}