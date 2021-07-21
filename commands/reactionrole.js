const Discord = require("discord.js");

module.exports = {
    name: 'rr',
    description: "Keqing will add a role for who has reacted",
    async execute(message, args){
        const channel = '867421994232446976';
        const russia = message.guild.roles.cache.find(role => role.name === "🇷🇺 русский язык");
        const spanish = message.guild.roles.cache.find(role => role.name === "🇪🇸 Español");
        const english = message.guild.roles.cache.find(role => role.name === "English");
        const vietnam = message.guild.roles.cache.find(role => role.name === "🇻🇳 Vietnamese");

        const russiaEmoji = '🇷🇺';
        const spanishEmoji = '🇪🇸';
        const englishEmoji = '🇺🇸';
        const vietnamEmoji = '🇻🇳';

        let embed = new Discord.MessageEmbed()
        .setColor('#85FFF2')
        .setTitle('Welcome to Geometry Dash hall!')
        .setDescription('Choose your own language **here**\n\n'
            + `${russiaEmoji} for Russian people\n`
            + `${spanishEmoji} for Spanish people\n`
            + `${englishEmoji} for Russian people\n`
            + `${vietnamEmoji} for Spanish people\n`
        );

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(russiaEmoji);
        messageEmbed.react(spanishEmoji);
        messageEmbed.react(englishEmoji);
        messageEmbed.react(vietnamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === russiaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(russia);
                }
            }
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === spanishEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(spanish);
                }
            }
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === englishEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(english);
                }
            }
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === vietnamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(vietnam);
                }
            }
        })
    }
}