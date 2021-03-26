module.exports = () => {
    console.log('Bot has started!');
}


/*1
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is starting!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'giveadmin'){
        client.commands.get('giveadmin').execute(message, args);
    } else if(command === 'tom-momment'){
        client.commands.get('tom-momment').execute(message, args);
    } else if(command === 'embed'){
        client.commands.get('embed').execute(message, args);
    } else if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    } else if(command === 'meme'){
        client.commands.get('meme').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'mcserver'){
        client.commands.get('mcserver').execute(message, args);
    }
});
client.once('ready', () => {
    console.log('Bot is online!');
});
*/