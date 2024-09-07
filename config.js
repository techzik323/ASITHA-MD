const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "oj8QUZDS#alPFZi-D5S8Q-fGFk1Gad6i0TcVxhK0Iv1Btyg7DP-k",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
