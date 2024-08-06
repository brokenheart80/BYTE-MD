
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERhOWpYSWdwN1oxUmh5U1BvZDFXeFhXNFlMV2YrS0VwRWhyZkhMcjIyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEJ2Ymt5WmRlQ1RJYmoyTVp2dFo4ZklzRkdRb0tnN0YwTlhuRnYxSU5Hdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT1M5T0Q4cTQrSzlzSmoyamY1MlAxdEVidmxQWUxTQVF5YXFHdEw5S0djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRWpGbnZ5Znc0UDhFQzcyYVFDL0dzZ2o3L0tzb0dHcWRzSlZQYVV4Q0hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOd2pZL3RzaW1BUDNoRDFBVWY4R1gzTWVNTjFRUzQveGpZazQ4d1JKRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNPdEZRZVdCOXdCdmR0SU1ZUEsxeklGMS9MR2VCRHNpUEhvU0xkSXlkd2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpjdWFrS1dDMmJZME5Da1FuSW5Lc3pYd3RKM1pwZTdUSStOSGNlbGxuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3RhdElKb2dvZHpXSjhvdlZqSGQ5emZGZkMvUXcyV1VFRk1IVlVSK1N4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkUGZmTVFWNlVHMURDYm9DMzIySk5jREY1a3E2S1Z1aU9GRmVkVW85VWdYOXdEaEZDQWhwZkVjWGIwbE1kRzRBMWJSdG4rR1gzTGZCRTB1Z0RqbkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJoek40V1c5Qis5NmRZNG9VcW1YdGR0TVczTVR2ZXVZOGc3VXFDOGl6eGpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE4NTI2OTY0OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzY4QTEwM0Y1MzA0RTVEMzRFMkM0MDUzMDI3NzhBRUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjk0OTUzNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTg1MjY5NjQ5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRjEwRTU4QjUyQkYyRDhEQ0UyM0ZCQkEwRTI0OTFFQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyOTQ5NTM0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI4ODAxODUyNjk2NDk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlCMDdGMjZERDEyNzdBQTc0MTk0RUMyNkE3NjRBNkVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5NDk1MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE4NTI2OTY0OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTQwRTZCNEVFN0I5NzEzQTFEN0FBRTMwNDRDMjlGNTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjk0OTUzNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSUVyV1ZoZjBUelNreGhiOU9VMlkxQSIsInBob25lSWQiOiJiM2E1YzU5ZC03NDg1LTQzZGMtYjA5MC1kMzg0YzQ4ZWZhN2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVRnYUhNZzRnYmVWNlBwWjIrQTM4R09PTXZVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI4eEQyME9DbWR3OGpLb2JWMHhsbU9uQ1lnWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5TFFWRzdDUSIsIm1lIjp7ImlkIjoiODgwMTg1MjY5NjQ5ODozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJST0tFTiBIRUFSVCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1h2a2d3UWo3L0l0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRnExV1NnSE5hTHk3RVpLSXpvRmRtNEpMamM0SUZJdVE0Nm5XbE9IY3hSTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT3I1RnpRamhjcitmV2NBbzhtbjJjM01JT0dKakovdk1EelRJWFZ0Zm96NENHKzRydy9PS3JlRjVNKzNUcDNReTNRd0JObkhMVTZtT3gwcHg4NEl0RFE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9XTTcxQTJGdVNTRGJqMlZIc2JHR3JuN0U1UHFUNmlSNW9tTU9KOHhTVGFYSDFQMmM4NkwyZmFReEl2QWdjWDhHY2dFWGdhbEx0Vnk3Vk5ZYWdSc0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiODgwMTg1MjY5NjQ5ODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJhdFZrb0J6V2k4dXhHU2lNNkJYWnVDUzQzT0NCU0xrT09wMXBUaDNNVVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI5NDk1MzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRkxrIn0="= //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
