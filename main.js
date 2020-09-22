const Discord = require('discord.js');

const bot = new Discord.Client();

const PREFIX = "p?";

bot.on('ready', () =>{
    console.log("Online");
});

bot.on('message', message =>{
    let args = message.content.slice(PREFIX.length).split(' ');

    switch(args[0]){
        case "poll":
            const embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Inititate Poll")
            .setDescription("p?poll to inititate a simple yes or no poll")
            
            if(!args[1]){
                message.channel.send(embed);
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
            });

        break;
    }
});

bot.login(process.env.BOT_TOKEN);
