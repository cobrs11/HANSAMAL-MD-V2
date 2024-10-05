const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "To Check the bot online or no.",
    react: "🛠️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const voice = {
    alive: 'media/media_Hi.mp3'
}

let aliveMessage = ` 
   ~*HANSAMAL-MD*~

*Hey there!* 

 > 🟢 *WhatsApp Bot* is up and running!
       Runtime : ${runtime(process.uptime())}
 > 🛠️ *Created by:* IMALKA HANSAMAL
 
*Here's what I can do:* 
💿 *Download Songs & Videos* 
📰 *Fetch Latest News* 
🎭 *Entertain with Fun Commands* 
🔧 *Manage Groups* 

> *Stay connected and enjoy the services!* 


*© HANSAMAL- MD* 
*💻 GitHub:* github.com/cobrs11/HANSAMAL-MD

await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:aliveMessage},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



