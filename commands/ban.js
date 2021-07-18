module.exports = {
    name: 'ban',
    description: "Keqing will ban member the has mentioned",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("Keqing has banned that member :( Sorry ;-;");
        } else {
            message.channel.send('Keqing cannot ban that user.');
        }
    }
}