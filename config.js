const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~tVZyTA6C#BhOvD0HD_PZc8tA7nKoAD80VWw520vKlKW5gi3NI3tc'
};
