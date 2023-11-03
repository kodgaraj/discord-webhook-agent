// Importing https module
const axios = require("axios");
const moment = require("moment");
require("dotenv").config();

if (!process.env.DISCORD_WEBHOOK_URL) {
  console.log("Discord webhook url is not provided!");
  process.exit(0);
}

// Getting the arguments from name "appName"
const appName = process.argv[2];

// moment locale set
moment.locale("tr");

const message = `**Tarih: ${moment().format("DD MMMM YYYY dddd HH:mm:ss")}**
`;

console.log(message, appName);

// Making the request
axios.post(process.env.DISCORD_WEBHOOK_URL, {
  content: "",
  embeds: [
    {
      title: `${appName} Güncellendi!`,
      description: message,
      color: 0x00ff00,
    },
  ],
});
