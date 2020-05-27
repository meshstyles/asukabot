const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });

const prefix = botconfig.prefix;
const alexa = botconfig.alexa;
const join = botconfig.join;
const leave = botconfig.leave;

bot.on("ready", async () => {
    console.log(`Asuka is online`);
    bot.user.setActivity("type -help for help");
});

bot.on("message", async message => {

    if (message.author.bot)
        return;

    if (message.channel.type === "dm" && !message.author.bot)
        return message.reply(botconfig.dm);

    const member = message.member;
    var argssingle = message.content.split(" ");

    //for single word commands
    switch (argssingle[0].toLocaleLowerCase()) {
        case `dabs`:
            message.reply(botconfig.dabimg[Math.floor(Math.random() * botconfig.dabimg.length)]);
            return message.delete().catch(console.error);
        case `ping`:
            return message.channel.send("pong");
        case `ay`:
            return message.channel.send(":a: :regional_indicator_y: :regional_indicator_y:    :regional_indicator_l: :regional_indicator_m: :regional_indicator_a: :regional_indicator_o:");
        case `yeet`:
            return message.channel.send(":regional_indicator_y: :regional_indicator_e: :regional_indicator_e: :regional_indicator_t: ");
        case `oof`:
            return message.channel.send(":o2: :o2: :regional_indicator_f: ");
        case `dickbutt`:
            return message.channel.send("https://i.imgur.com/Y7ajT50.gif?noredirect ");
        case `speech`:
            return message.channel.send("https://imgur.com/mn9rY3A");
        case join:
            if (argssingle.length <= 1)
                return;

            var args1 = argssingle[1].toLocaleLowerCase();

            if (!botconfig.roles.includes(args1))
                return message.reply("this role is not supported");
            var roler = message.guild.roles.cache.find(r => r.name === args1);

            if (message.member.roles.cache.has(roler.id))
                return message.reply("you allready have that role");

            message.reply(` is ready for ${args1}`);
            return message.member.roles.add(roler).catch(console.error);

        case leave:
            if (argssingle.length <= 1)
                return;

            var args1 = argssingle[1].toLocaleLowerCase();

            if (!botconfig.roles.includes(args1))
                return message.reply("this role is not supported");
            var roler = message.guild.roles.cache.find(r => r.name === args1);

            if (!message.member.roles.cache.has(roler.id))
                return message.reply("you don't have that role");

            message.reply(` doesn't feel a need for ${args1} anymore`);
            return member.roles.remove(roler).catch(console.error);
        case prefix:
            switch (argssingle[1].toLocaleLowerCase()) {
                case "help":
                    return message.author.send(botconfig.help);
                case "serverinfo":
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
                    return message.channel.send(serverembed);
                case "botinfo":
                    let bicon = bot.user.displayAvatarURL();
                    //bot uptime calc
                    let botuptime = bot.uptime;
                    botuptime = botuptime * 0.001;
                    let botembed = new Discord.MessageEmbed()
                        .setDescription("Bot Information")
                        .setColor("#ff7357")
                        .setThumbnail(bicon)
                        .addField("Bot Name", bot.user.username)
                        .addField("Uptime in sec", botuptime);
                    return message.channel.send(botembed);
                default:
                    return;
            }
        case alexa:
            switch (message.content.toLocaleLowerCase()) {
                //alexa meme        
                case `${alexa} play despacito`:
                    return message.channel.send("ɴᴏᴡ ᴘʟᴀʏɪɴɢ: Despacito ───────────⚪────── ◄◄⠀▐▐ ⠀►►⠀⠀ ⠀ 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼 ⠀ ───○ 🔊⠀ ᴴᴰ ⚙️ ❐ ⊏⊐");
                case `${alexa} play despacito 2`:
                    return message.channel.send("ɴᴏᴡ ᴘʟᴀʏɪɴɢ: Despacito 2 (Feat: Lil Pump) ───────────⚪────── ◄◄⠀▐▐ ⠀►►⠀⠀ ⠀ 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼 ⠀ ───○ 🔊⠀ ᴴᴰ ⚙️ ❐ ⊏⊐");
                case `${alexa} this is sad`:
                    return message.channel.send("ɴᴏᴡ ᴘʟᴀʏɪɴɢ: DespaSADto ───────────⚪────── ◄◄⠀▐▐ ⠀►►⠀⠀ ⠀ 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼 ⠀ ───○ 🔊⠀ ᴴᴰ ⚙️ ❐ ⊏⊐");
                default:
                    return;
            }
    }
});

bot.login(botconfig.token);