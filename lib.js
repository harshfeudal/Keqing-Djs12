const chalk = require('chalk')
module.exports = {
	guild_id: '838697343251382282',
	channel_id: '867421994232446976',
	russia_emoji_name: '🇷🇺',
	russia_role_id: '864790983824375808',
	spanish_emoji_name: '🇪🇸',
	spanish_role_id: '864791172643291186',
	english_emoji_name: '🇺🇸',
	english_role_id: '864888482106703923',
	vietnam_emoji_name: '🇻🇳',
	vietnam_role_id: '864791251455180801',
	verify_role_id: '863443533000081418',
	member_role_id: '846426312661925899',
	mute_role_id: '863797707130273802',
	owners: ['379643682984296448', '622450109317251088'],
	/**
   * @param {*} level 0: Error | 1: Warn | 2: Info
   * @param {*} message
   */
	log (level, message) {
		switch (level) {
		case 0: return console.log(`${chalk.bold.hex('#000000').bgHex('#FF0000')(' [Error]: ')} ${message}`)
		case 1: return console.log(`${chalk.bold.hex('#000000').bgHex('#FFFF00')(' [Warn]: ')} ${message}`)
		case 2: return console.log(`${chalk.bold.hex('#000000').bgHex('#00FF00')(' [Info]: ')} ${message}`)
		}
	}
}
