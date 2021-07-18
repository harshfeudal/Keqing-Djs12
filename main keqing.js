const Discord = require('discord.js');

require('dotenv').config()

const client = new Discord.Client();

const prefix = 'k?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
	console.log(`${client.user.tag} is online :)`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'yt'){
        client.commands.get('yt').execute(message, args);
    } else if (command === 'verify'){
        client.commands.get('verify').execute(message, args);
    } else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command === 'roll'){
        client.commands.get('roll').execute(message, args);
    } else if (command === 'msgclr'){
        client.commands.get('msgclr').execute(message, args);
    }
});

client.login(process.env.token);
