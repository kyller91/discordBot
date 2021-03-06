const Discord = require('discord.js')

module.exports = {
    run : message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('📑__Menu d\'aide au commande du Bot__📑      ')
        .addField('**🎊__Command Fun__ 🎉** **:**   ', '\n- **%RDMe**🖼️ : \nFait apparaître un meme random . \n- 🐶**%dogs**🖼️ \nFait Apparaître une image ou un meme de chien')
        .addField('**👮Commande Modérateur👮‍♀️** **:**','**%report @user** 📢**:** \nReporte un joueur qui doit n\'a pas respecter les règle .\n**Ban @user {raison} ⛔ :** \nsert a bannir un membre du server a vie ')
        .addField(`'le bot est toujour en developpement soyey indulgent`,'merci de votre comprehension')
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter('Fais en bonne usage')
       

        )
        
    },
    name: 'help',
    class:'member'
}