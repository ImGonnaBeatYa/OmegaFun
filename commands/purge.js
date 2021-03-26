require('dotenv').config();
module.exports = {
    name: 'purge',
    description: "Purges the chat!",
    cooldown: 128,
    async  execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    //Purge error = Invalid Amount
    const Err_Invalid_AMNT = new Discord.MessageEmbed()
    .setColor(process.env.EMBED_COLOR)
    .setTitle('❌ Error:')
    .setDescription('```Invalid amount passed as second argument! \n'+process.env.PREFIX+'purge [amount]```')
    .setFooter(process.env.DEV_FOOTER);
    //Purge error = Invalid Characters
    const Err_High_AMNT = new Discord.MessageEmbed()
    .setColor(process.env.EMBED_COLOR)
    .setTitle('❌ Error:')
    .setDescription('```You may only enter Numbers on the purge command! \n'+process.env.PREFIX+ 'purge [amount in number]```')
    .setFooter(process.env.DEV_FOOTER);
    //Purge error = Number Higher than 1000
    const Err_Invalid_CHRCTRS = new Discord.MessageEmbed()
    .setColor(process.env.EMBED_COLOR)
    .setTitle('❌ Error:')
    .setDescription('```The highest amount of messages that can be purged per command is 1000 \n' + process.env.PREFIX + 'purge [amount in number < 1000]```')
    .setFooter(process.env.DEV_FOOTER);
    //Purge error = number lessser than 1
    const Err_Nom_Negative = new Discord.MessageEmbed()
    .setColor(process.env.EMBED_COLOR)
    .setTitle('❌ Error:')
    .setDescription('```You cannot purge messages with an amount that is equal to 0 or less! \n' + process.env.PREFIX + 'purge [amount in number > 1]```')
    .setFooter(process.env.DEV_FOOTER);
    

    
    if(message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[0]) return message.channel.send(Err_Invalid_AMNT);

            if(isNaN(args[0])) return message.channel.send(Err_Invalid_CHRCTRS);

            if(args[0] > 1000) return message.channel.send(Err_High_AMNT);
            
            if(args[0] < 1) return message.channel.send(Err_Nom_Negative);

            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                let messageamount = messages
                message.channel.bulkDelete(messages)
                const PurgeSuccess = new Discord.MessageEmbed()
                .setColor('#0099FF')
                .setTitle('Omega Moderation Command: ``Purge``')
                .setDescription('Success: deleted ' + args[0] + ' messages!')
                .setFooter(process.env.DEV_FOOTER);
                message.channel.send(PurgeSuccess)
    });
    }
 }
}   