module.exports = {
    name: 'kick',
    description: "Keqing will kick member the has mentioned",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("Keqing has kicked that user :( Sorry ;-;")
        } else {
            message.channel.send('Keqing cannot kick that user.');
        }
    }
}