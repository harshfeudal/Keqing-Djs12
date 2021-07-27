module.exports ={
  name: 'reset',
  async execute (message, args) {
    message.channel.send('Currently only reset dead roles')
    if(!message.mentions.members.size) return message.channel.send('Please mentions people you want to reset their roles, You can mention multiple people to reset their dead roles!')
    for (const member of message.mentions.members.map(member => member)) {
      member.roles.remove(await message.guild.roles.fetch('869252442032840714')).then(()=> message.channel.send(`Successfully reset ${member.displayName} dead role`)).catch(error => message.channel.send('An error had occurred. Please tell 372005. Error:' + error))
    }
    
  }
}