const Discord = require('discord.js')

const answers = [
    "https://i.redd.it/e7p5z2s7i7l61.jpg",
    "https://external-preview.redd.it/yJvtRO99iQiaXWGnwLRZcP3uThllT3G6S-MfrNEyCmI.jpg?width=640&crop=smart&auto=webp&s=c93b70646c70ed6cf38352989aff9ca91a4d8abe",
    "https://preview.redd.it/r5cdwnjdl7l61.jpg?width=640&crop=smart&auto=webp&s=8fb2d99de69dde7818641e6746617203f0fd4dca",
    "https://preview.redd.it/aj3l9bfkp7l61.jpg?width=640&crop=smart&auto=webp&s=ed00d36bd24adaf0026d2df86588194b7a8fd4eb",
    "https://preview.redd.it/5ui2v29658l61.jpg?width=640&crop=smart&auto=webp&s=4bd3b284e4fc3652819802f12ff53addb0e9d103",
    "https://i.redd.it/52axsiumu7l61.png",
    "https://preview.redd.it/86weppg8v7l61.jpg?width=640&crop=smart&auto=webp&s=b371a90bc85d15aee5dca141d4ae5c2ef5735e70",
    "https://i.redd.it/ixbccy6pz6l61.jpg",
    "https://preview.redd.it/96t6qjt1v6l61.jpg?width=640&crop=smart&auto=webp&s=f62c05b45bcca74bf2121ce62738def07b9db4b3",
    "https://i.redd.it/y8pvp4i457l61.jpg",
    "https://memeguy.com/photos/images/my-favorite-gif-in-the-past-few-years-of-reddit-48334.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/987/428/82a.gif",
    "https://i.redd.it/qmpj13da0gx51.gif",
    "https://media.giphy.com/media/e5EcjjJx3dCFi/giphy.gif",
    "https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif",
    "https://media.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif",
    "https://media.giphy.com/media/joYf3Ba2phD15ch9Nt/giphy.gif",
    "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif",
    "https://media.giphy.com/media/hOUnTqlzHv5m0/giphy.gif",
    "https://media.giphy.com/media/a5viI92PAF89q/giphy.gif",
    "https://media.giphy.com/media/JRE3AvLsSRXg360F6l/giphy.gif",
    "https://media.giphy.com/media/XhWvodKpLzk40/giphy.gif",
   
]

module.exports = {
    run: message => {
        const answer = answers[Math.floor(Math.random() * answers.length)]

        message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("😂 Meme 😂")
        .setImage(answer)
        .setFooter("Image provenant de https://giphy.com")
       

        )
        
    },
    name: 'meme'
        
}