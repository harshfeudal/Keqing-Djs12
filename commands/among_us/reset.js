module.exports = {
	async run (message, args) {
		const { among_us } = message.client.db
		await among_us.deleteAll()
		message.channel.send(':white_check_mark:')
	}
}
