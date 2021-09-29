module.exports = {
  Admins: ["783449580703449160", "497156735921029121"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "`", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/qRWjb4P6aF", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "873472032367591445", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "RphKgyeahntKm11IZq51_sMG13tRvtTe", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"],//Discord OAuth2 Scopes
  ServerDeafen : true,//If you want bot to stay deafened
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lavalink.SudhanPlayz,live",
    port: 1234,
    pass: "codingwithsudhan", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "24481c76104a49c0bf0fcd7dc6c66d3b", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "579e6410a2244329992495aac858c9e9", //Spotify Client Secret
  },
};
