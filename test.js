const botconfig = require("./botconfig.json");
const Discord = require("discord.js"); 
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client();
const opus = require('opusscript');
const fs = require('fs');
const ytdl = require('ytdl-core'); 

var servers = {};

function play (connection, message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly" } ));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
        
    })
}

bot.on("ready", async() => {
    console.log(`Asuka is online`)
    bot.user.setActivity("type -help for help")
});

bot.on("message", async message => {

    var arg = message.content.split(" ");
    
    if(message.content.startsWith("gg")){          
        var myRole = message.guild.roles.find("name","overwatch");
        if(message.member.roles.has(myRole.id)){
            console.log(`Yay, the author of the message has the role!`);
        }else{
            console.log(`Nope, noppers, nadda.`);
        }
    }
    var i = 0;
    if(message.content.startsWith("play music")){
        const broadcast = client.createVoiceBroadcast();
        message.member.voiceChannel.join()
            .then(connection => {
                var musiclist = ["./music.mp3" , "./jazz.mp3" ];
                broadcast.playFile(musiclist[i]);
                const dispatcher = connection.playBroadcast(broadcast);
                dispatcher.on("end", function() {
                    console.log("ente")
                    if(i === musiclist.length){
                        connection.disconnect();
                    }
                    else{
                        i++;
                        message.channel.send("play music");
                    }
                })
            })
            .catch(console.error);
    }

    if(message.content.startsWith("play")){
        if(!arg[1]){
            message.channel.send("Please add a link or command as args[1]");
            return;
        }
        if(!message.member.voiceChannel){
            message.channel.send("must be in a VC");
            return;
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };
        var server = servers[message.guild.id];
        server.queue.push(arg[1]);
        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
            play(connection, message);
        });

    }
    if(message.content.startsWith("skip")){
        if(!arg[1]){
        var server = servers[message.guild.id];
        if(server.dispatcher) server.dispatcher.end();
        }
    }
    if(message.content.startsWith("stop")){
        if(!arg[1]){
            var server = servers[message.guild.id];
            if (message.guild.voiceConnection){
                for (var i = server.queue.length - 1; i >= 0; i--){
                    server.queue.splice(i, 1);
                }
                server.dispatcher.end();
                console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
            }
        }
    }
    

});

bot.login(botconfig.token);