module.exports = {
    name: 'unmute',
    description: "Keqing will unmute member the has mentioned",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`Keqing has unmuted <@${memberTarget.user.id}> :)`);
        } else {
            message.channel.send('Keqing could not unmute that member lmao :(');
        }
    }
}