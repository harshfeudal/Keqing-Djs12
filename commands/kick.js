module.exports = {
    name: 'kick',
    description: "Keqing will kick member the has mentioned",
    execute(message, args){
        if (message.member.roles.cache.has('854767607193403463')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("Keqing has kicked that user :( Sorry ;-;")
            } else {
                message.channel.send('Keqing cannot kick that user.');
                }
            } else {
                message.channel.send('You cannot tell me to do that :(');
        }
    }
}

//nothing.