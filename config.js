const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' };

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "your id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4y72vl.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, HANSAMAL-MD IS ALIVE...\n\nOWNER: IMALKA HANSAMAL\n\nTHANKS FOR USING HANSAMAL MD\n\n> *© HANSAMAL-MD*/n/n*> ɢɪᴛʜᴜʙ :* github.com/cobrs11/IMALKA-MD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94711262551",
OWNER_REACT: process.env.OWNER_REACT || "🔆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
};

