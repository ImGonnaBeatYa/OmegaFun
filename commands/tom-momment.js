module.exports = {
    name: 'tom-momment',
    aliases: ["tom"],
    description: "~~Bruh Momment~~, more like Tom Momment",
    cooldown: 25,
    execute(message,args, cmd, client, Discord){
        
        const wallpapers = [
            'https://media.discordapp.net/attachments/801065492763770942/822055269113921546/download.jpeg',
            'https://media.discordapp.net/attachments/801065492763770942/822055269264654336/pigeon.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055269806637116/IMG_20210109_205326.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055270045581353/tumblr_71c6161d0d78d1b455fcc0cf5146ae49_aeccf6d3_1280.jpg?width=457&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055270255558656/17b8325c1fb38cb19d596a2269da5b43.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055270405505054/flat800x800075f.u1.jpg?width=406&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055350215770132/8clFw0e.jpg?width=609&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055350374891520/889f071a5ea4d14e457ccb4efb455c2c.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055350571106304/56755529a764cf043208342548438ae9.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055350899441694/1200b3d273dd3869fc7ec511f96475be.jpg?width=458&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055351075340308/IMG_20210123_073549.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055351296720906/download_3.jpeg',
            'https://media.discordapp.net/attachments/801065492763770942/822055439000403969/image0-2.jpg?width=457&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055439306850364/hiknight.png?width=338&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055439612117022/image0-9.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055439738601502/cover2.jpg?width=813&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055439989866516/Screenshot_20210223_025401.jpg?width=707&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055565022461982/image010.jpg?width=475&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055565177126912/EzQXDeN9.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055565316194394/AddText_02-25-12.31.32.jpg?width=457&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055565521190932/image0-1.png?width=684&height=457',
            'https://media.discordapp.net/attachments/801065492763770942/822055565786218536/forg.png',
            'https://media.discordapp.net/attachments/801065492763770942/822055566012055602/FB_IMG_1615430017430.jpg',
            'https://media.discordapp.net/attachments/801065492763770942/822055566238679090/image0.jpg',
        ];
        const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        const TomEmbed = new Discord.MessageEmbed()
        .setColor('#0099FF')
        .setTitle('What a ~~Bruh~~ (Tom) Momment')
        .setDescription('')
        .setImage(response)
        .setFooter('Powered by Tom\'s Epic photo stash');
        message.channel.send(TomEmbed)






/*

            Unused Stashes
        'https://media.discordapp.net/attachments/796021147530821632/819883825189617664/FB_IMG_1615430017430.jpg',
        'https://media.discordapp.net/attachments/796021147530821632/818298885504106526/56755529a764cf043208342548438ae9.jpg',
        'https://cdn.discordapp.com/attachments/796021147530821632/817200467980320798/video0.mp4',
        'https://cdn.discordapp.com/attachments/796021147530821632/817001127298990130/video2.mp4',
        'https://cdn.discordapp.com/attachments/796021147530821632/816007419792588810/video0-8.mp4',
        'https://cdn.discordapp.com/attachments/796021147530821632/815911641794871326/video0_10-1.mp4',
        'https://media.discordapp.net/attachments/796021147530821632/808506483951009802/image0.jpg?width=343&height=456',
        'https://cdn.discordapp.com/attachments/796021147530821632/808288808494956624/video0-15.mp4',
        'https://cdn.discordapp.com/attachments/796021147530821632/806862652977971200/video0-5.mp4',
        'https://cdn.discordapp.com/attachments/796021147530821632/806652521979445248/video0-1.mov',
        'https://cdn.discordapp.com/attachments/796021147530821632/806151754915381248/video0_3.mp4',
        'https://cdn.discordapp.com/attachments/796021147530821632/805563616572342312/siren_dance_2.mp4',
        'https://media.discordapp.net/attachments/796021147530821632/805409564103147550/static-assets-upload6958739573471436882.png',
        'https://cdn.discordapp.com/attachments/796021147530821632/805296221865902110/nice.mp4',
        'https://media.discordapp.net/attachments/796021147530821632/804953657053151242/b9fcs17mdtn21.jpg?width=872&height=438',
        'https://media.discordapp.net/attachments/796021147530821632/802137222581190676/c04f8b31f30a6d031db192654b77e208.jpg?width=321&height=457',
        'https://media.discordapp.net/attachments/796021147530821632/800227200926351380/image0-19.png https://media.discordapp.net/attachments/796021147530821632/800227201106575370/image1.png?width=812&height=457 https://media.discordapp.net/attachments/796021147530821632/800227201521680426/image2.png',
        'https://media.discordapp.net/attachments/796021147530821632/799360932412653619/IMG_20210114_113043.jpg',

*/




        
        }
    }