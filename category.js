const botconfig = require("./botconfig.json");
const Discord = require("discord.js"); 
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client();
//const opus = require('opusscript');
//const fs = require('fs');
//const ytdl = require('ytdl-core');

bot.on("ready", async() => {
    console.log(`Meety Setup bot is online, use !setup for seting up your discord roles and channels\n the role management might be implemented in the future so`)
    bot.user.setActivity("type -help for help")
});

bot.on("message", async message => {
    var myRole = message.guild.roles.find("name","Root");
    if(message.member.roles.has(myRole.id)){
        var memberoni = message.member.toString();
        console.log(`setup is permitted and will be proceeded ${memberoni}`);

        function ChannelCreator(){
            message.guild.createChannel( `${mix2create}` , 'text'[{
                topic : mix2create
        }])
        .then(console.log)
        .catch(console.error);
        }
        function roleCreator(){
            message.guild.createRole({
                name: mix2create,
                color: "#64ff00",
              })
                .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
                .catch(console.error);
        }

        var gamingRoles = ["overwatch", "r6", "cs", "dota", "lol", "gaming"];
        for(i = 0 ; i < gamingRoles.length ; i++){
            var mix2create = gamingRoles[i];
            ChannelCreator();
            roleCreator();
        }

    }
});

bot.login(botconfig.token);