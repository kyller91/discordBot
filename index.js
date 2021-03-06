const { type } = require('os')

const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true,
        partials: ['MESSAGE', 'REACTION']
    }),
    config = require('./config.json'),
    fs = require('fs')

client.login(process.env.TOKEN)
client.command = new Discord.Collection()

fs.readdir('./command', (err,files) => {
    if(err) throw err
    files.forEach(file => {
        if(!file.endsWith('.js')) return
        const command = require(`./command/${file}`)
        client.command.set(command.name, command)
    });
})

client.on('message', message => {
    if(message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if(!commandName.startsWith(config.prefix)) return
    const command = client.command.get(commandName.slice(config.prefix.length))
    if(!command) return
    if(command.guildOnly && !message.guild) return message.channel.send('^^🙂 Cette commande ne peut pas être utilliser ici 🙃^^')
    command.run(message, args, client)
    
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
    .setTitle(`**  Notre ${member.guild.memberCount} membre est arrivé 🎉**`)
    .addField(`${member.user.username}`,'💗',true)
    .addField('Bienvenu(e)','🎊' , true)
    .setImage("https://thumbs.gfycat.com/AshamedAccomplishedIrishredandwhitesetter-small.gif")
    .addField('N\'hésite pas a regarder et a lire le réglement et a passez du bon temps sur se serveur et si tas la moindre question %help', 'Bonne journ(e)  a toi')
  
    .setTimestamp()
    )
    member.roles.add(config.greeting.role)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(`${member.user.tag} nous a quitter 😢`) 
})
client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})
 
client.on('messageReactionRemove', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

client.on('ready', () => {
    client.user.setActivity(`Beta Boot`)
})

