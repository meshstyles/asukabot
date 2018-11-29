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

    function roleCreator(){
        message.guild.createRole({
            name: role2create,
            color: "#1d1d1b",
          })
            .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
            .catch(console.error);
    }
    function channelCreator(role2create){
        message.guild.createChannel( `test` , 'text'[{
            topic : channel2Create,
            parentID : test
            /*get category 
            channel.setParent('174674066072928256')
                .then(updated => console.log(`Set the category of ${updated.name} to ${updated.parent.name}`))
                .catch(console.error);
            // Set a new channel topic
            channel.setTopic('Needs more rate limiting')
                .then(updated => console.log(`Channel's new topic is ${updated.topic}`))
                .catch(console.error);
            https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=createChannel
            https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=calculatedPosition
            */
        }])
        .then(console.log)
        .catch(console.error);
    }

    if(message.content.startsWith("setup")){
        var myRole = message.guild.roles.find("name","admin");
        if(message.member.roles.has(myRole.id)){
            var memberoni = message.member.toString();
            console.log(`setup is permitted and will be proceeded ${memberoni}`);

/*f2 CS ROLE AND CHANNEL CREATION */

            var f2modulesIt = [ "c", "cpp", "alg", "ana", "eng",
                                "bwl", "law", "ti", "algdat", "ra",
                                "disma", "einf", "oop", "stats", "sea",
                                "cn", "db", "os", "sed", "rtsys",
                                "itsec", "ds", "pe" ];
            var locationsC = ["slz.", "cafeteria."];
            var fbLearnC = ["f2.learn."];
            //ROLE CREATOR
            var i, k;
            for(i = 0; i < locationsC.length ; i++){
                var part = fbLearnC[0]
                var part1 = locationsC[i];
                for(k = 0; k < f2modulesIt.length ; k++ ){
                    var part2 = f2modulesIt[k]; 
                    var role2create = part + part1 + part2 ;
                    //roleCreator();
                    console.log(role2create);
                }
            }
            //CHANNEL CREATOR
            var locationsR = ["slz-", "cafeteria-"];
            var fbLearnR = ["f2-learn-"];
            for(i = 0; i < locationsR.length ; i++){
                var part = fbLearnR[0]
                var part1 = locationsR[i];
                for(k = 0; k < f2modulesIt.length ; k++ ){
                    var part2 = f2modulesIt[k]; 
                    var channel2Create = part + part1 + part2 ;
                    //channelCreator()
                    console.log(channel2Create);
                }
            }

/*END   f2 CS ROLE AND CHANNEL CREATION */

/*Gaming ROLE AND CHANNEL CREATION */

            var gamingRoles = ["overwatch", "r6", "cs", "dota", "lol", "gaming"];
            for(i = 0 ; i < gamingRoles.length ; i++){
                var mix2create = gamingRoles[i];
                //roleCreator()
                //channelCreator()
                console.log(mix2create);
                console.log(mix2create);
            }

/*END   Gaming ROLE AND CHANNEL CREATION */
        return;
    }else{
            console.log("a un permitted user tried to run setup. \n if you attemped it make sure you have the role name \"admin\"");
        }
    }
});

bot.login(botconfig.token);