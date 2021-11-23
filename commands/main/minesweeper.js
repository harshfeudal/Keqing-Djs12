module.exports = {
  aliases: ['mine'],
	description: `Let's play Minesweeper :)`,
	run (bot, message, args) {
		message.channel.send(`
||:one::two::two:||||:two::one:||||:one::white_large_square::white_large_square::one:||||:one:||||:one::white_large_square:||
||:two:||||:bomb:||||:bomb:||||:three:||||:bomb:||||:three:||||:two::two::two:||||:bomb:||||:two::one:||
||:two:||||:bomb:||||:four::five:||||:bomb:||||:five:||||:bomb:||||:bomb:||||:four::three:||||:bomb:||||:one:||
||:three:||||:four:||||:bomb:||||:three:||||:bomb:||||:four:||||:bomb:||||:bomb:||||:three:||||:bomb:||||:two::one:||
||:bomb:||||:bomb:||||:two::two::one::two::two::two::two:||||:one::one::white_large_square:||
||:two:||||:two:||||:one::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::one:||||:white_large_square::white_large_square:||
    `)
	}
}
