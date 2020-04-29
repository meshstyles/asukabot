const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

const prefix = botconfig.prefix;
const alexa = botconfig.alexa;
const join  = botconfig.join;
const leave = botconfig.leave;

bot.on("ready", async() => {
    console.log(`Asuka is online`)
    bot.user.setActivity("type -help for help")
});

bot.on("message", async message => {
    
    
    if(message.author.bot) 
        return;
    
    if(message.channel.type === "dm" && !message.author.bot)
        return message.reply(botconfig.dm);
    
    const member = message.member;
    var argssingle = message.content.split(" ");

    //bot uptime calc
    let botuptime = bot.uptime;
    botuptime = botuptime*0.001;
    
    //uptime
    switch(message.content.toLocaleLowerCase()){
        case `${prefix}help`:
            return message.author.send(botconfig.help);
        case `${prefix}serverinfo`:
            let sicon = message.guild.iconURL();
            let serverembed = new Discord.MessageEmbed()
            .setDescription("Server Information")
            .setColor("#ff7357")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created on", message.guild.createdAt)
            .addField("You Joined", message.member.joinedAt)
            .addField("Total Memebers", message.guild.memberCount)
            .addField("AFK Timeout Limit", message.guild.afkTimeout)
            .addField("Uptime in sec", botuptime);
            return message.channel.send(serverembed);
        case `${prefix}botinfo`:
            let bicon = bot.user.displayAvatarURL();
            let botembed = new Discord.MessageEmbed()
            .setDescription("Bot Information")
            .setColor("#ff7357")
            .setThumbnail(bicon)
            .addField("Bot Name", bot.user.username)
            .addField("Uptime in sec", botuptime);
            return message.channel.send(botembed);
        //alexa meme        
        case `${alexa} play despacito`:
            return message.channel.send("ɴᴏᴡ ᴘʟᴀʏɪɴɢ: Despacito ───────────⚪────── ◄◄⠀▐▐ ⠀►►⠀⠀ ⠀ 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼 ⠀ ───○ 🔊⠀ ᴴᴰ ⚙️ ❐ ⊏⊐");
        case `${alexa} play despacito 2`:
            return message.channel.send("ɴᴏᴡ ᴘʟᴀʏɪɴɢ: Despacito 2 (Feat: Lil Pump) ───────────⚪────── ◄◄⠀▐▐ ⠀►►⠀⠀ ⠀ 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼 ⠀ ───○ 🔊⠀ ᴴᴰ ⚙️ ❐ ⊏⊐");
        case `${alexa} this is epic`:
            return message.channel.send("...");
        case `${alexa} this is sad`:
           return message.channel.send("ɴᴏᴡ ᴘʟᴀʏɪɴɢ: DespaSADto ───────────⚪────── ◄◄⠀▐▐ ⠀►►⠀⠀ ⠀ 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼 ⠀ ───○ 🔊⠀ ᴴᴰ ⚙️ ❐ ⊏⊐");
        case `oh no`:
            return message.channel.send("https://media.discordapp.net/attachments/264416258953314304/485228640049561600/Dl9TnQGXcAAlFHB.png");
    }
    
    //for single word commands
    switch(argssingle[0].toLocaleLowerCase()){
        case`dabs`:
            message.reply(botconfig.dabimg[Math.floor(Math.random() * botconfig.dabimg.length)]);
            message.delete()
                .catch(console.error);
            return ;
        case `burp`:
            return message.reply("Schulz!");
        case `beauty`:
            return message.reply("you make me blush! :heart: ");
        case "no":
            return message.channel.send("*no u !*");
        case `ping`:
            return message.channel.send("pong");
        case `boi`:
            return message.channel.send(":regional_indicator_b: :regional_indicator_o: :regional_indicator_i: :regional_indicator_i: :regional_indicator_i:");
        case `nibba`:
            return message.channel.send(":regional_indicator_n: :regional_indicator_i: :b: :b: :regional_indicator_a:");
        case `ay`:
            return message.channel.send(":a: :regional_indicator_y: :regional_indicator_y:    :regional_indicator_l: :regional_indicator_m: :regional_indicator_a: :regional_indicator_o:");
        case `yeet`:
            return message.channel.send(":regional_indicator_y: :regional_indicator_e: :regional_indicator_e: :regional_indicator_t: ");
        case `gey`:
            return message.channel.send(":regional_indicator_g: :regional_indicator_e: :regional_indicator_y: ");
        case `skeet`:
            return message.channel.send(":regional_indicator_s: :regional_indicator_k: :regional_indicator_e: :regional_indicator_e: :regional_indicator_t:");
        case `ban`:
            return message.channel.send(":b: :regional_indicator_a: :regional_indicator_n: ");
        case `oof`:
            return message.channel.send(":o2: :o2: :regional_indicator_f: ");
        case `ligma`:
            return message.channel.send(":regional_indicator_l: :regional_indicator_i: :regional_indicator_g: :regional_indicator_m: :regional_indicator_a:");
        case `y`:
            return message.channel.send(":regional_indicator_y:   :regional_indicator_n: :regional_indicator_u: :regional_indicator_t: ");
        case `haltstop`:
            return message.channel.send("https://i.imgur.com/kZRNDzP.gif");
        case `dickbutt`:
            return message.channel.send("https://i.imgur.com/Y7ajT50.gif?noredirect ");
        case `reggie`:
            return message.channel.send("https://files.gamebanana.com/img/ico/sprays/555c87e7008ad.png ");
        case `ready`:
            return message.channel.send("https://i.imgur.com/RiECI2K.gif?noredirect");
        case `gay`:
            return message.channel.send("https://i1.sndcdn.com/artworks-000075877369-c3ow6o-t500x500.jpg");
        case `diva`:
            return message.channel.send("http://www.clearancexl.co.uk/WebRoot/Store3/Shops/es136752/5860/491B/AE98/CEC8/8511/0A0F/111B/C8F3/snickers_bar_ml.jpg");
        case `save`:
            return message.channel.send("https://cdn.discordapp.com/attachments/436982736729931778/522862227728891915/Ist_noch_relativ_safe.jpg")
        case `iwd`:
            return message.channel.send("https://www.youtube.com/watch?v=54inBF55uxk");
        case `speech`:
            return message.channel.send("https://imgur.com/mn9rY3A");
        
    }

    function joiner(){
        var roler = message.guild.roles.find("name", `${args1}`);
        message.reply(`is ready for ${args1}`);
        return member.addRole(roler).catch(console.error);
    }

    function leaver(){
        var roler = message.guild.roles.find("name", `${args1}`);
        message.reply(`isn't available for ${args1}`);
        return member.removeRole(roler).catch(console.error);
    }

    if(message.content.startsWith(join)){
        var args1 = argssingle[1].toLocaleLowerCase();
        if(!message.member.roles.has(message.guild.roles.find("name", `${args1}`))){
            switch(args1){
                case `overwatch`:
                    joiner();
                    return;
                case `cs`:
                    joiner();
                    return;
                case `dota`:
                    joiner();
                    return;
                case `lol`:
                    joiner();
                    return;
                case `changes`:
                    joiner();
                    return;
                case "deals":
                    joiner();
                    return;
                default :
                    return message.reply(" nah that don't exist fam")
            }
        }
    }

    if(message.content.startsWith(leave)){
        var args1 = argssingle[1].toLocaleLowerCase();
        switch(args1){
            case `overwatch`:
                leaver();
                return;
            case "cs":
                leaver();
                return;
            case `dota`:
                leaver();
                return;
            case `lol`:
                leaver();
                return;
            case `changes`:
                leaver();
                return;
            case `deals`:
                leaver();
                return;
            default :
                return;
        }
    }
});
bot.login(botconfig.token);