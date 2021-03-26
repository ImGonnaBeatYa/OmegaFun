module.exports = {
    name: 'hack',
    cooldown: 128,
    description: 'This Command Gives You Adminstartive access!',
    execute(message,args, cmd, client, Discord) {
        const person = message.member
        let Muted = message.guild.roles.cache.find(role => role.id == "816536273870258248")
        if(message.member.permissions.has("ADMINISTRATOR")) {
            message.channel.send('<:er_staff:821979593640116234> You already have Adminstrator Access!')
        } else {
            message.channel.send('<a:er_PandaHacking:814451214786887690> Installing Virus.exe on the server!')
            setTimeout(() => {
                message.channel.send('<a:er_fbi:821980664634540063> Mission Failed, you have been found out by the cops! Good Luck getting muted!')
                message.member.roles.add('814840272374464553').catch(console.error)
                setTimeout(() => {
                    message.channel.send('🤔 That was enough for a lesson i guess...')
                    message.member.roles.remove('814840272374464553').catch(console.error)
                    }, 60000)
                }, 15000)
        }
        
    },
};

