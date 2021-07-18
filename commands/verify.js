module.exports = {
    name: 'verify',
    description: "verify the participant",
    execute(message, args){
        if (message.member.roles.cache.has('863443533000081418')){
            message.channel.send('You have already verified.');
        } else {
            message.channel.send('You has verified in this server! Enjoy :)');
            message.member.roles.add('846426312661925899');
            message.member.roles.add('863443533000081418');
        }
    }
}
// 838697343251382282 everyone role
// 846426312661925899 member role
// 863443533000081418 member verified role