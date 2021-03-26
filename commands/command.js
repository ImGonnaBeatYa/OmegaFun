module.exports = {
    name: 'embed',
    description: "An embeded Command!",
    execute(message,args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099FF')
        .setTitle('A Random Embed!')
        .setURL('https://www.youtube.com/channel/UCr5FGL0gQt6jD0rdj2N10vg')
        .setDescription('Click the title NOW!')
        .addField(
            {name: 'Blah', value: 'ShitPosting1'},
            {name: 'Blah', value: 'ShitPosting1'},
            {name: 'Blah', value: 'ShitPosting1'},
            {name: 'Blah', value: 'ShitPosting1'},
        )
        .setImage('https://cdn.discordapp.com/emojis/821063084138299402.png?v=1')
        .setFooter('No');
        message.channel.send(newEmbed)
        }
    }