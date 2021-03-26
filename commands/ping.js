module.exports = {
    name: 'ping',
    aliases: ["p"],
    cooldown: 2,
    description: "Shows user the bots ping!",
    execute(message,args, cmd, client, Discord){
        message.channel.send('Finding the bots Latency!').then(msg => {
             const ping = msg.createdTimestamp - message.createdTimestamp;
             msg.edit(`<a:er_ping:821996201482256385> heres my ping ${ping}ms`)
        })
    }
  }