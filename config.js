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


global.devs = "916000570671" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916000570671";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_33_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTczLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicTI5NTN0ZW1veDF6MDRRUytoUUh1OFBka3Q1VmRvUGIvK0MxL1hqVW4xST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid2d0OXJSTGdUUFNhWjlPc2N2dHBuQVwiLFxuICBcInBob25lSWRcIjogXCIzNWExNTU4Yy1lODcxLTQ0OTAtYWU3Yy0yZGVkOTJhM2YzN2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTAxLFxuICAgICAgMjM4LFxuICAgICAgMjAyLFxuICAgICAgNyxcbiAgICAgIDIyNCxcbiAgICAgIDg1LFxuICAgICAgNzYsXG4gICAgICAxODMsXG4gICAgICA1NSxcbiAgICAgIDE3OSxcbiAgICAgIDE4NSxcbiAgICAgIDIzNCxcbiAgICAgIDMwLFxuICAgICAgMTIxLFxuICAgICAgNzUsXG4gICAgICA1MSxcbiAgICAgIDE5NSxcbiAgICAgIDI0MyxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDE2NyxcbiAgICAgIDEzMixcbiAgICAgIDUyLFxuICAgICAgMTQwLFxuICAgICAgMTUwLFxuICAgICAgOTksXG4gICAgICA1MyxcbiAgICAgIDEyNixcbiAgICAgIDExNyxcbiAgICAgIDE2OCxcbiAgICAgIDE2MyxcbiAgICAgIDEyOSxcbiAgICAgIDIsXG4gICAgICAxOTMsXG4gICAgICA1NixcbiAgICAgIDEyNCxcbiAgICAgIDgyLFxuICAgICAgMTg4LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4Vk5WREI2OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MDAwNTcwNjcxOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MDMxOTgzNjg5NzQ3NzoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYXkvUElGRUtLK2pyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInkydzhyQUM4OWRUckI1QzhvbzBwQ2RoQmh0a3ZZbjg2ZTBTT0dvYTM4MVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ3BxK2QrbkRiakI3MGhmWkRwMWtockNkVnU5R3hQaHgxMVMrVkM3NndzUldRQnB6R1Y5TFpudzlodS94NC84eHBldmE4UURpOVgrK2ZJWWtYTXRiRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYURMNHY1SFBvSTBrMFFCZk9kemQzZWxaWUFtaXF1SWVOMTQ0Y0tqMzFXbDZYVFZFU3cyN1BKanF5WG9HcElLYUJEbTI5a01NTUhuWWRBRm04S1MzZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MDAwNTcwNjcxOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTAxOTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDIwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMjAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJacmdmRUVQZkYrU3ZDYTZ6MDQwOFc1NStCV0x6Y2tpNHpSemVRejg1YzZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODMyOTA3NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTkwMTk5NDE3OFwifSIKfQ=="  // PUT your SESSION_ID 


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
