const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api'); 
const fs = require("fs");      
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();   
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map();
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat');
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};
 
// check permissions
if (!message.member.hasPermission("perm"){
// now see if he is owner
if (message.author.id === '350947930670104577')
// if he is owner, do nothing and continue

} else {
    // stop process by return
    return message.channel.send(' you dont have perms!')
}
}
// execute reset code

client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help**)(") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000") 
      .setDescription(`
	  
	         Please Chose: 
			 
${prefix}help1 ⇏    **  | All Commands**  

${prefix}help-p ⇏    **  | General Commands**  

${prefix}help-a ⇏    **  | Staff Commands**  

${prefix}help-m ⇏    **  | Music Commands**  

The Bot Protected By MacDonalds

        `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   


   

  

client.on('message', message => {
    if (message.content === "-help-p") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Done" , ":envelope: | :sleuth_or_spy::skin-tone-3:Check Your DM")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
client.on('message', message => {
    if (message.content === "-help-a") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Done" , ":envelope: | :sleuth_or_spy::skin-tone-3:Check Your DM")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  client.on('message', message => {
    if (message.content === "-help-m") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Done" , ":envelope: | :sleuth_or_spy::skin-tone-3:Check Your DM")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   client.on("message", message => {
    if (message.content === "-help--1") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
         .setDescription(`**  The Official Bot Server :  :dove:  Until Now We Dont Have One :scroll: **`)
        
   message.author.sendEmbed(embed)
   
   }
   });
  
   client.on("message", message => {
    if (message.content === "-help-a") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
         .setDescription(`**  Official Bot Server :  :dove:  Coming Soon :scroll: **`)
        
   message.author.sendEmbed(embed)
   
   }
   });
  
     client.on("message", message => {
      if (message.content === "-help-a") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#FF0000")
           .setDescription(`**    :sleuth_or_spy::skin-tone-1: Staff Commands :sleuth_or_spy::skin-tone-1:**
**============ **
  ** -move @user |  Move Someone To Your Channel** :confused: 

  ** -bc | Send DM Message To Everyone** :mega:

  ** -role @user <rank> | Role Someone**:large_orange_diamond: 

  ** -roleremove @user <rank> | Remove A Role From Someone** :orange_book: 

  ** -role all <rank> | Role Everything/Everyone**:shield: 

  ** -role humans <rank> | Role A Specific Member **:man: , :woman: 

  **-role bots <rank> | Role The Bots**:robot: 

  ** -schannel | Show Hidden Chat**:blush: 

  ** -hchannel | Hide A Chat**:arrow_heading_down: 

  ** -clr <numbr> | Clear The Chat With A Number**:information_source: 

  ** -clear | Clear Chat ** :recycle: 

  ** -mute @user <reason> | Mute A User <Muted>**:mute:

  ** -unmute @user | Unmute A User ** :loud_sound:

  ** -kick @user <reason> | Kick A Member From The Server**  :outbox_tray:

  ** -ban @user <reason> | Ban A Member From The Server** :no_entry:

  ** -mutechannel | Close The Chat**:no_entry:

  ** -unmutechannel | Open The Chat**:on:   

  ** -ct <name> | Create A Chat Channel**:rolling_eyes:

  ** -cv <name> | Create A Voice Channel**:crown:

  ** -ccolors <number> | Create Colors With How Many Colors You Want**

  ** -say | Rewrite What Did You Say**:sparkles: 

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`)
     message.author.sendEmbed(embed)
     
     }
     });

   client.on("message", message => {
      if (message.content === "-help-m") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#57FEFF")
           .setDescription(`** Music :play_pause:  **
  ** -play | Play A Music By A Link Or Name** 

  ** -skip | Skip The Music**

  ** -pause | Pause The Music**

  ** -resume | Resume The Song That You Stopped Before**

  ** -vol |  0-100 Change The Volume

  ** -stop | Kick The Bot From Your Channel**

  ** -np | Info About The Song **

  ** -queue | Show The Songs In The List**
  
  `)
     message.author.sendEmbed(embed)
     }
     });
  
   client.on("message", message => {
      if (message.content === "-help-p") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#FF0000")
           .setDescription(`**   :earth_africa: General Commands :earth_africa: **
**============ **

  ** -allbots | All Bots In The Server** :robot: 

  ** -server | General Info About The Server **:fire: 

  ** -bot | General Info About The Bot**:computer: 
  
  ** -skin <name> | Your Minecraft Skin**:blush:

  ** -count | Show How Many Members On The Server __Without Bots__** :information_source:

  ** -invites | How Many Invites You Have ** :microscope: 

  ** -invite-codes | Show Your Invites Links To The Server **:spy: 

  ** -cal | Calculator**:slot_machine: 

  ** -trans <language> <any thing> | Translate Any Language**:writing_hand: 

  ** -short | Shorten Long Links Into Short Links**:mortar_board: 

  ** -tag | Write With A Nice & Big Way**:sunglasses: 

  ** -google | Search In Google From Discord**:desktop: 

  ** -perms | Show Your Perms In The Server**:pushpin: 

  ** -rooms | Show How Many Voice & Chat Rooms In The Server**:rocket: 

  ** -roles | Show All The Roles In The Server In A Nice Way**

  ** -emojilist | Show All Server Emojis**:cry: :smile: :joy: 

  ** -image | Show The Server Picture**:bust_in_silhouette: 

  ** -members | States Of The Members / Bots Count / Member Count**:selfie: 

  ** -profile | Show Your Profile** 

  ** -bans | Show The Number Of Banned Users **:no_entry: 

  ** -avatar | Your Pic Or The Member That You Mention**:bust_in_silhouette:

  ** -embed | Rewrite What You Say In A Nice Way**:small_blue_diamond: 

  ** -emoji <any things> | Transfer Any Word Into Emojis**:small_orange_diamond: 
  
  ** -contact | Send A Suggestion To The Bot Creator**
  
**  ======:blossom:Hope You Enjoy:blossom:======  **`)
     message.author.sendEmbed(embed)
     
     }
     });

  
 
       client.on("message", message => {
      if (message.content === "-help-a") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By server Mirage ')
           .setDescription(`**__Hope You Love The Bot Your The Best:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });

     client.on("message", message => {
      if (message.content === "-help-m") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By server Mirage  ')
           .setDescription(`**__Hope You Love The Bot Your The Best:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });

  
       client.on("message", message => {
      if (message.content === "-help-p") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By server Mirage  ')
           .setDescription(`**__Hope You Love The Bot Your The Best:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });

    client.on('message', async msg => {
    var prefix = "-";
    var user = msg.author;
        if (msg.content === (prefix +'help')) {
        if(!msg.channel.guild) return msg.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
        msg.channel.send({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
 .setDescription(`**If You Want General Commands Press On** 🌏 \n**If You Want Staff Commands Press On**🔧**If You Want Music Commmands **🎶\n **Thanks For Bot Users**`)  
 
 .setTimestamp()
}).then(zg => {
     zg.react('🌏').then(r=>{
     zg.react('🔧').then(r=>{
     zg.react('🎲').then(r=>{
     zg.react('🎶').then(r=>{          
 var aaa = (reaction, user) => reaction.emoji.name === '🌏' && user.id === msg.author.id;
   var mmm = (reaction, user) => reaction.emoji.name === '🔧' && user.id === msg.author.id;
    var vvv = (reaction, user) => reaction.emoji.name === '🎲' && user.id === msg.author.id;
    var ccc = (reaction, user) => reaction.emoji.name === '🎶' && user.id === msg.author.id;
 
    var aa = zg.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
    var mm = zg.createReactionCollector(mmm, { maxMatches:1 , time: 60000 , });
    var vv = zg.createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
    var cc = zg.createReactionCollector(ccc, { maxMatches:1 , time: 60000 , });
 
aa.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
          .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
.setDescription(`        ***__General Commands__*** **\n${prefix}**allbots/All Bots In The Server』**\n${prefix}**server/General Info About The Server 』**\n${prefix}**bot/General Info About The Bot』**\n${prefix}**credit/Show How Many Credi You Have』**\n${prefix}**daily/Get Your Daily Credits』**\n${prefix}**profile/Show Your Profile』**\n${prefix}**setwelcomer <name chat> /Activate Welcome Msg With A Picture 』**\n${prefix}**invites/ Show How Many Invites That You Have In The Server 』**\n${prefix}**invite-codes/Show Your Invite Links In The Server 』**\n${prefix}**cal/Calculator**\n${prefix}**trans <language> <any thing>/Translate Any Word』**\n${prefix}**short/Shortcut Any Long Link』**\n${prefix}**tag/Make What Did You Said Bigger And Nice』**\n${prefix}**google/Search In Google From Discord』**\n${prefix}**perms/Show Your Perms In The Server』**\n${prefix}**rooms/Show How Many Rooms In The Server』**\n${prefix}**roles/Show All Roles In A Nice Way』**\n${prefix}**image/Show The Server Picture』**\n${prefix}**members/��Show All Members/Bots Status & Members Count』**\n${prefix}**id/Info About You』**\n${prefix}**bans / Banned Members Count 』**\n${prefix}**avatar/Your Avatar Or The Member That You Mention』**\n${prefix}**embed/Rewrite What Did You Said With Embed』**\n${prefix}**discrim/Show The Members Who Have Your Tag』**\n${prefix}**emoji <any things>Transfer Any Word Into Emojis』**\n${prefix}**contact/Send A Suggestion To The Bot Creator』`)
 
 .setTimestamp()
    });
   
   
    })//
mm.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
.setDescription(`        ***__Staff Commands__*** **\n${prefix}**move @user /  لسحب الشخص الى روومك』**\n${prefix}**bc / رسالة جماعية الى كل اعضاء السيرفر』**\n${prefix}**role @user <rank> / لأعطاء رتبة لعضو معين』**\n${prefix}**roleremove @user <rank> / لازالة الرتبة من شخص معين』**\n${prefix}**role all <rank> / لأعطاء رتبة للجميع』**\n${prefix}**role humans <rank> / لأعطاء رتبة للاشخاص فقط』**\n${prefix}**role bots <rank> / لأعطاء رتبة لجميع البوتات』**\n${prefix}**hchannel / اخفاء الشات』**\n${prefix}**schannel / اضهار الشات المخفية』**\n${prefix}**clr <numbr> / مسح الشات بعدد』**\n${prefix}**clear / مسح الشات』**\n${prefix}**mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』**\n${prefix}**unmute @user / لفك الميوت عن الشخص 』**\n${prefix}**kick @user <reason> / طرد الشخص من السيرفر』**\n${prefix}**ban @user <reason> / حضر الشخص من السيرفر』**\n${prefix}**mutechannel / تقفيل الشات』**\n${prefix}**unmutechannel / فتح الشات』**\n${prefix}**ct <name> / انشاء شات』**\n${prefix}**cv <name> / انشاء رووم فويس』**\n${prefix}**delet <name> / مسح الشات او الرووم فويس』**\n${prefix}**ccolors <number> /** Make Colors With How Many You Want』**\n${prefix} ** -say / It Rewrite What Did You Say』**`)  
 
.setTimestamp()
    });
   
    })
cc.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
.setDescription(`        ***__اوامر اغاني__*** **\n${prefix}**play / لتشغيل أغنية برآبط أو بأسم』**\n${prefix}**skip / لتجآوز الأغنية الحآلية』**\n${prefix}**pause / إيقآف الأغنية مؤقتا』**\n${prefix}**resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا』**\n${prefix}**vol / لتغيير درجة الصوت 100 - 0』**\n**-stop / لإخرآج البوت من الروم』**\n${prefix}**np / لمعرفة الأغنية المشغلة حآليا』**\n**-queue / لمعرفة قآئمة التشغيل』`)
 
 
 .setTimestamp()
    });
   
})
     }).then(msg => msg.delete(15000));
     })
     })
     })
})
     }
     });




const prefix = "-"
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('You Should Be In A Voice Channel.');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('I Dont Have Permmission To Speak Here');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I Dont Have Permmision To Speak Here');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**Perms Must Be Available `EMBED LINKS`I Have **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** Added To The Playlist`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**Please Selet The Number Of The Music/Song** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("Mirage")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Didnot Select Any Music/Song');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: Theres No Result ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You Should Be In A Voice Room .');
		if (!serverQueue) return msg.channel.send('Theres No Songs To Be Skipped');
		serverQueue.connection.dispatcher.end('Skipped Into Another Music/Song');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You Should Be In A Voice Room .');
		if (!serverQueue) return msg.channel.send('Theres No Songs To Be Skipped');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('This Song/Music Got Stopped');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You Should Be In A Voice Room .');
		if (!serverQueue) return msg.channel.send('Nothing In Progress RN.');
		if (!args[1]) return msg.channel.send(`:loud_sound: Music Volume **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: Changed The Volume **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('Nothing In Progress RN.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: Now Currently Playing : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('Nothing In Progress RN.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Stopped Playing Music!');
		}
		return msg.channel.send('Nothing In Progress RN.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('Resumed Music For You !');
		}
		return msg.channel.send('Nothing In Progress RN.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** This Song Got Added To The Queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Started Playing : **${song.title}**`);
}
const adminprefix = "-";
const devs = ['518872353615380497'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} Changed Bot Playing Status**`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Changed The Bot Name Successfully`)
return message.reply("**You Cant Change The Bot Picture You Should Wait For 2 Hours . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : The Bot Picture Got Changed`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.youtube.com/user/Purpled");
    message.channel.sendMessage(`**You Changed The Bot Twitch Successfully ${argresult}**`)
}
});

  
  client.on('message' , async message => {
	  var prefix = "-";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });




client.on('message', ra3d => {
var prefix = "-";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`Please Choose How Many Colors `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` You Dont Have Permmision**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });


const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**Word Translation.**\Use: `-translate <The Language> <The Word>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**Word Translation.**\Use: `-translate <The Language> <The WOrd>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});


			      
client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "-";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
        if(!message.channel.guild) return;
let args = message.content.split(' ').join(" ");
if (message.content.startsWith('-legend')){
if (message.author.id !== '350947930670104577') return message.reply('** This Command Only For My Creator **')
message.channel.sendMessage('Sending Message |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
	 var prefix ="-";
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});
client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Mirage`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('My Creator | Dr_Omar ')
    })
}
});






client.on('message', message => {
	var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``To Use This Command Write This Command : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`I Moved<@${usermentioned}> To Your Voice Room✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``You Cant Move"+ message.mentions.members.first() +" `This Member Should Be In A Voice Room`")
}
} else {
 message.channel.send("**``You Should Be In A Voice Room To Move A Member To Your Voice Room``**")
}
} else {
message.react("❌")
 }}});

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('Server Members Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



 client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "-";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `You Have Invited **${nul}** User`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `You Havenot Invite Anyone To This Server`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **You Sent All Invites Links That You Created In DM**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on('message', msg => {
	var  prefix = "-";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});

client.on('message', message => { 
	var prefix = "-";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});

client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('Please Write Something');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});

client.on('message', message => {
	var prefix ="-";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});
 
function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}


 client.on('message', message => {
	    var prefix = "-";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Dont Have Permmisions** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Super Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**You Should Write Something To Send The Broadcast**');message.channel.send(`**Are You Sure That You Want To Send This Broadcast? \nThe Broadcast Content:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('The Server', message.guild.name)
       .addField('By', message.author.username)
       .addField('The Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

client.on('message', message => {
  var prefix ="-"; 
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});


 client.on('message', message => {
	 var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  


client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permmisions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Please Provide The Name Of The User That You Want To Withdraw From Role**' );
		if( !args[1] ) return message.reply( '**:x: Please Provide The Role Name That You Want To Withdraw From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Please Provide The Role Name That You Want To Withdraw From The User **' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] Role [ '+args[0]+' ] Role Has Been Withdrawn From **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Role Has Been Withdrawn From Everything *');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Role Has Been Withdrawn From All Bots*');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Role Has Been Withdrawn From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Please Provide The Name Of The User That You Want To Give A Role**' );
		if( !args[1] ) return message.reply( '**:x: Please Provide The Role Name That You Want To Give**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Please Provide The Role Name That You Want To Give**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] Role [ '+args[0]+' ] Role Given **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] The Role Given For Everyone**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Role Given For All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Role Given For All Humans**');
		} 
	} 
});

client.on('message', message => {
    if (message.content === "-rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "-roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
 
client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});


 
client.on('message', msg => {
	var prefix = "-";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Put The Number Of The Messages That You Want To Delete 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n Number Of Messages Deleted: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => { 
let PREFIX = '-'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
    if(!message.channel.guild) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
           message.channel.overwritePermissions(message.guild.id, {
           READ_MESSAGES: true
})
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});



client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "-";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You Dont Have Perms !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Dont Have Perms ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** Theres No Muted Role 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** You Should Mention First **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  By **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} You Have Got Punished For Breaking Rules
${message.author.tag} You Have Got Muted By
[ ${reason} ] : Reason
If You Got Muted By Mistake Talk To One Of The Staff
`)
		.setFooter(`In : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**You Dont Have Perms To Unmute**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**I Dont Have Perms**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**You Should Mention First**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**This User Didnot Get Muted ALready**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**The User Got Unmuted Successfully**:white_check_mark:");

  return;

  }

});
 


client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thanks For Adding The Bot To Your Server**`)
      guild.owner.send(embed)
});


client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

   client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "-";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  

client.users.get("522810967738941440").send(
    "\n" + "**" + "● The Server :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● By : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● The Message : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: Sent The Message To The Bot Creator Successfully')
     .setThumbnail(message.author.avatarURL)
     .setFooter(" -_- ")
                                                

message.channel.send(embed);


}
    
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**You Should Mention The User**");
  if(!reason) return message.reply ("**Write The Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant Ban A User WHo Have A Role Higher Than Me**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**You Should Mention The Member**");
  if(!reason) return message.reply ("**Write The Reason Of The Kick**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick A User WHo Have A Role Higher Than Me**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You Dont Have Perms__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__Closed The Chat Successfully__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You Dont Have Perms__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__Opened The Chat Successfully__:white_check_mark:**")
              });
    }
       
});



client.on('message', message => {
    if (message.content.startsWith("-bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} Number Of The Banned Members `))
  .catch(console.error);
}
});


 
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  Welcome To The Server :rose: 
:crown:The Name Of The Member  ${member}:crown:  
Your The Member Number ${member.guild.memberCount} `) 
}).catch(console.error)
})
 

client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});
 
client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            var prefix = "-";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});

const Canvas = require("canvas"); //npm i canvas
let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))
client.on("message", message => {
 
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'Super User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 150,
  };
 
 
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
 
 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
 
      });
 
      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })
 
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Super"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "HypeLC User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("Super.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 173) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 171) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري
 
                        //poits
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 221, 159) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 27px kathen" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 221, 118) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 197) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 26px  kathen";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 80,117)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 116, 82, 72, 72);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});


client.on('message', message => {
	var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('The Chat Room Got Created')

}
});


client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('The Voice Room Got Created')
    
}
});


 

// THIS  MUST  BE  THIS  WAY
			      
			      
const sWlc = {}
const premium = ['340169953200308225', '', '', '']
client.on('message', message => {
var prefix = "-";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 


 client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "sdsd"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': Joined The Discord In',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': Joined The Server In',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['w.png'];
      
	        
	      

	      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 540, 230);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '21px kathen';
                              ctx.fontSize = '25px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 240, 150);
                              
                              //NAMEً
                              ctx.font = '21px kathen';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 240, 90);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      })


const arraySort = require('array-sort'),
      table = require('table');

client.on('message' , async (message) => {
var prefix = "-";
    if(message.content.startsWith(prefix + "top invites")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("Invites To The Server")
    .addField(' The Top' , `\`\`\`${table.table(possibleInvites)}\`\`\``)

    message.channel.send(embed)
    }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/*This Bot Cannot Be Copied Or Piracy All Copyright Info Is Reserved
+ The Owner Of The Bot Willl Get A Report That Your Copying The Bot
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
Tried To Break The Rules @everyone`);
guild.owner.send(`<@!${banner.id}>
Tried To Break The Rules ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
Tried To Break The Rules @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
Tried To Break The Rules ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
Tried To Break The Rules @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
Tried To Break The Rules ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

  client.on('message', message => { 
	var prefix ="-";
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': Joined The Discord In', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': Joined The Server In-', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Super Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });

// THIS  MUST  BE  THIS  WAY








client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});







client.login(process.env.BOT_TOKEN);
client.on("NTM1MTA4MjU3MzMzNjQxMjE2.DyDWcQ.QF26H6r-WrNd73Rjt2IAbwAmGMU");

			      
