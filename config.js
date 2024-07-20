
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
global.owner = process.env.OWNER_NUMBER || "94781226144";
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
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hhcTQ0YkRleGR0eHIwRCtTYnpvLzhKcU54WDh4dWpvajBIRzZXRTFrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVdDU1RxN2ZlU0FWK0Z2V0s0ckN4RlRhTERLYXNGSnhoZUtQOENYWk56ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TkN2NWh5WkFNdExNamRMaGg5ZUlpTk1wRGdWeS9IdUoxNEhXRTR6dkVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMjV1UjIxU2FoZUJmVDArU0ZBNzBndzY2M25TUXRmZDFwbnZNczI3cXlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHazdXNjVxOG5xQUljZzJlUm1FNFFnUEt3S1BUdTVZSnU2akNFWEpCSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikhwc1EybThMemwwT3FFdkt1Ulp1Y2JiL2xmQjg5WkdGTm5LekpHWVdFakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RRSHZORndEcWErYzRFUDZqVk9FMjljQUkvcVpYNllmOHBsMno2N2pGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzhpaUZ2U0MwWlZxWC9pSDJEbVQwVjJxNGtRSFRJTlRkeFlZYU4rcGJVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxZcVlMd1lrejJtOUhHNDByTkl6V1h5RlNIRkZDYTV4MVo2UFpYZStqT2t2RWc3RWdyZ2dtTlRRTE5aZXJmNEp4bWhtQ2Q3TStHd0l6ZnByODJ3TWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IkNMay9RNG04dzhMK3ExN0ZiS3lTd1ZUWGVxSG5rV3ZtWWhyOHZWa1c0azA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODEyMjYxNDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDg3RjNBMjY4MjRCOURFNTE1NjMyOTg0MzJBM0NDMDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQ5MDcwNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibm5VcF9tSl9URnVQMWtKUk1wckY2ZyIsInBob25lSWQiOiIwNDNmNGYzNi0xMjg0LTQ4NmYtOGRjMi0zYWQyMDRmZmU0NTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWk1hTnlqcFlrRVpsUUJuc0RsbWxUZGgwUXRNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhEZDRnZGwrekZJMUU4NE9zUGtSQWhvWTFkST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLUDFFTjVDViIsIm1lIjp7ImlkIjoiOTQ3ODEyMjYxNDQ6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSICAg8J2QivCdkIjwnZCN8J2QhlxuXG5cblxuXG5cblxuXG5cblxuXG7wnZCV8J2QiPCdkIzwnZCUICDwnZCB8J2QgfCdkIcgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbvCdkITwnZCE8J2QkSAg8J2Qi/CdkIjwnZCM8J2QiPCdkJMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tYcnlmRUdFSVM2NzdRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVQY2JjSjlkZEk3UHZLdmtDYzF6MU0xREtQT2FCd3lGa25ZSmZQaklRVk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhOTUFEcmZZVE5oYUVvbEtiQzY4M2psOFAvS1U4US9DRmx3VFF6WElUOEE1d2hKWjhXaDBlTWpVR1gxUUxDdGUyY1lUeUJpa0pWbC81RXQ0UVQyWkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtL2FJNVMvcVY0R1I0cU5hcGlzS1RTVER1MG1MSlh1eWRGQkVJM0xrUkNNSzdVT3NJd1lRZWl1aHRxV0JXQllwcmtXU2ZSbHVVWk1SaVVXUXB1cHhoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxMjI2MTQ0OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZEM0czQ2ZYWFNPejd5cjVBbk5jOVROUXlqem1nY01oWkoyQ1h6NHlFRlQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0OTA3MDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzVtIn0=
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Your session ID" //Make sure session id starts with Byte;;;



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
