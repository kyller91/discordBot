const Discord = require('discord.js')

module.exports = {
    run : message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**Info Server**`)
        .setTimestamp()
        .addField(`**Membre sur le Serveur : ${guild.memberCount}`,'(Connecté et non connecté inclus'))
       // .addField(`Membre connecté sur le serveur : ${bot.guild.botCount}`)
    },
    name: 'serverstats'
}