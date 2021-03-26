require('dotenv').config();
module.exports = {
    name: 'kill',
    aliases: ["kill"],
    description: "kills the mentioned user!",
    cooldown: 25,
    execute(message,args, cmd, client, Discord){
        const killer = message.author.tag
        const victim = message.mentions.users.first();
        const victim_name = victim.username 
        let userargs = args.join(" ").split(victim_name);
        let title = userargs[0];
        let desc = userargs.slice(1).join(" ")
        const killgifs = [
            'https://media.giphy.com/media/l1J9CiCufdrL0JRlu/giphy.gif',
            'https://media.giphy.com/media/Wouh6996d9UlTE3L2U/giphy.gif',
            'https://media.giphy.com/media/ifYaQJfd90oja1lEaQ/giphy.gif',
            'https://media.giphy.com/media/1hMgCfglrcw6HahbXp/giphy.gif',
            'https://media.giphy.com/media/yNFjQR6zKOGmk/giphy.gif',
            'https://media.giphy.com/media/XIKm9vocWWdJm/giphy.gif',
            'https://media.giphy.com/media/f73s136ppe6jkhSw3g/giphy.gif',
            'https://media.giphy.com/media/122PpN1BtlSxYQ/giphy.gif',
            'https://media.giphy.com/media/3oz8xy1gPFHsB6NMDm/giphy.gif',
            'https://media.giphy.com/media/cJM3y8PH6yIHS/giphy.gif',
            'https://media.giphy.com/media/l0HlAM4tGJyRkTOSY/giphy.gif',
            'https://tenor.com/view/murder-andy-samberg-happy-dance-will-forte-gif-4728975',
            'https://media.tenor.com/images/f315837da880501dc7ea00982eaebb47/tenor.gif',
            'https://tenor.com/view/dies-cat-dead-died-gif-13827091',
            'https://tenor.com/view/dead-out-spongebob-bury-cartoon-gif-4878270',
            'https://tenor.com/view/anime-gun-gif-19487996',
            'https://tenor.com/view/stab-knife-angry-anime-night-gif-16751402',
            'https://tenor.com/view/killed-em-hold-this-stabbed-gif-14017151',
            'https://tenor.com/view/akame-akame-of-demon-sword-murasame-akame-ga-kill-anime-blood-gif-17915729',
            'https://media1.tenor.com/images/cc998724fea262c7fadb72f1380ef8bb/tenor.gif',
        ];
        const kill_response = killgifs[Math.floor(Math.random() * killgifs.length)];
        const kill_embed = new Discord.MessageEmbed()
        .setColor('#0099FF')
        .setTitle('RIP! ' + killer + ' killed ' + victim_name)
        .setDescription(desc)
        .setImage(kill_response)
        .setFooter(client.user.username+process.env.DEV_FOOTER ,client.user.displayAvatarURL);
        message.channel.send(kill_embed)




  
        }
    }