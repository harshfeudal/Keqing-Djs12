module.exports = {
	run (message, args) {
		const { among_us } = message.client.db
		among_us.set('state', 0)
	}
}
