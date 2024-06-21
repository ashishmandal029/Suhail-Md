const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ashish:ashish@cluster0.2pxqhuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_04_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVqejJnalo5aHd2eWRSTzBEZG9iS2tUUmJXVVRleGxyeitYdm1vc01pQms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE2MDAwNTcwNjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERjdGNTU0NzYzQjFCRUVFOUY3MzBGMzBDNkE2MUZEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5NDk4NzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYwMDA1NzA2NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc5NjEyOUVBNjEwRDc2RThBNEM1QUVDNkM2RUI2NTMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODk0OTg3OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJObG9TYXlQNVMwbUhhZnF3em9XOXV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI1OTcyNTJhLWI1N2MtNDRlOS05YWZlLWQ2OTliOTA4YWYzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAyMjQsXG4gICAgICAxMSxcbiAgICAgIDg0LFxuICAgICAgMTYyLFxuICAgICAgMjMxLFxuICAgICAgMjEzLFxuICAgICAgMTAxLFxuICAgICAgMTE2LFxuICAgICAgODUsXG4gICAgICAwLFxuICAgICAgNDMsXG4gICAgICA5LFxuICAgICAgMCxcbiAgICAgIDUwLFxuICAgICAgMjUsXG4gICAgICAxNyxcbiAgICAgIDgsXG4gICAgICA2MCxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDExNyxcbiAgICAgIDIxMCxcbiAgICAgIDc3LFxuICAgICAgMjQxLFxuICAgICAgMTI0LFxuICAgICAgMjIsXG4gICAgICAyMzQsXG4gICAgICAxMjksXG4gICAgICA2MixcbiAgICAgIDUwLFxuICAgICAgMjIyLFxuICAgICAgMTkzLFxuICAgICAgMTI5LFxuICAgICAgMTM5LFxuICAgICAgOTMsXG4gICAgICAxMTksXG4gICAgICAxOTgsXG4gICAgICAyNTMsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpCM1kzSDVBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYwMDA1NzA2NzE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUwMzE5ODM2ODk3NDc3OjExQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfpovig58g8J+mi+C8kvCThqlB8J2UsPCdlKXwnZSm8J2UsPCdlKXwk4aq4LyS8J+mi+KDnyDgv5BcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMk5zYk1GRVBHdjFMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxIdjI5c3psRDMvajYzWldIN2J3bFoxclh4UnRiM21pQktsTVc4L3RJV3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGFQNGUvZUJ1QlNnRWNtYTlBVEZkcE9uOGR3cHdBU0VGYXVRaWJXUWFsczkybDUzeFh2b3pRVnpwUmtCWEpIdktLRVJXMUJzM0RYanBlNEFZUjN3QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiKzR1UjdyMVBVQUNZUStpYjhOSE5IOE93UHB6V0dhN1Q0NXFONFNJWEtmL1c3K25xSzFxQ1BYRm4vWjZ4WENzQ09LZUMwaVpDY2FvbVA3aWhUVlc5QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MDAwNTcwNjcxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODk0OTg3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ5UFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnlQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSzA1dXRyNCtYNEgwQXNvWEtGeWVLN2FFVkpRZ3RmUE1Pa0NkVUQ4MWQ2bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ5OTM2NjIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5NDk4NzgyODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
