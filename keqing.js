const Discord = require('discord.js');

require('dotenv').config()

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = 'k?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'Watching my husband Harshfeudal fixing me. Call me by using [k?] <3' }, status: 'dnd' });
	console.log(`${client.user.tag} is online :)`);
});

client.on('message', message =>{
    if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
    message.content.replace(prefix, '').split(' ');
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
    if (!command) return message.channel.send('I dont know what you want to tell me something :(');
    command.execute(message, args);
});

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);

client.login(process.env.token);