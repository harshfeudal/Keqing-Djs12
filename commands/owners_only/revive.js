
module.exports = {
  permissions: [622450109317251088],
	description: 'revive chat :(',
	run (bot, message, args) {
			message.channel.send('<@&863443533000081418>')
      .then(msg => {
				setTimeout(() => {
					message.delete()
					msg.delete()
			}, 1)
		})
	}
}