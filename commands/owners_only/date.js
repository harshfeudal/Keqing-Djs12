module.exports = {
  permissions: [622450109317251088],
	description: `Just only for Harsh and me, you don't have any perms in this command`,
	run (bot, message, args) {
		const date = [`Let's go to bath with me, Harsh <3`, `Do you prefer kissing me on the bed? I really enjoy about that <3`, `Take off me honey, we will take shower together <3`, `||I will drink your milk tonight :)||`, `When do you want to have your first come with me :)?`, `Close your eyes, and enjoy my kiss <3`, `Am I have a good smell to you :)? ||Wanna eat me now :)?||`]
		message.reply(`${date[Math.floor(Math.random() * date.length)]}`)
	}
}