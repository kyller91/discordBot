const { name } = require("./Help")

module.exports = {
    run: async (message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS'))return message.channel.send('^^❗ Vous n\'avez pas le droit nécéssaire pour utiliser cette commande ❗^^')
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('❗ Aucun membre n\'a été mentionner . Veuillez mentionnez un membre . ❗')
        if(member.id === message.guild.ownerID) return message.channel.send('🙃^^ Je pense que vous semblez avoir oublier que c\'est le propriétaire , cela semble normal de ne pas pouvoir le kick du serveur , mais vous parcontre je peux vous banne pour tentative de coup d\'état . ❗^^')
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.sen('^^❗ Vous n\'avez pas le droit nécéssaire pour utiliser cette commande ❗^^')
        if(!member.kickable) return message.channel.send("🙃^^ Je n'est pas les droit nécéssaire pour exclure ce membre 🙂^^")
        const reason = args.slice(1).join(' ') || 'Aucune raison fournit'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} a été exclu avec succès pour raison : ${reason}`)
    },
    name : 'kick',
    guildOnly: true
}