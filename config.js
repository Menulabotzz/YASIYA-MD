const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~4IxVmThB#E4n7rYbqB6w1p_JjdjplgYK_-7-2WBZw56yFhA8FD5Q'
};
