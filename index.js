var email = '';
var key = '';

const { base64encode } = require('nodejs-base64');
const request = require("request");

function setEmail(newEmail) {
    email = newEmail;
}

function setKey(newKey) {
    key = newKey;
}

function getToken() {
    return base64encode(email + ":" + key);
}

function sendRequest(endpoint) {
    return new Promise((resolve, reject) => {
        request({
            url: "https://selly.gg/api/v2/" + endpoint,
            json: true,
            gzip: true,
            headers: {
                'Authorization': 'Basic ' + getToken(),
                'User-Agent': 'username - localhost'
            }
        }, (err, res, body) => {
            if(err) return reject(err);
            return resolve(body);
        })
    })
}

module.exports.setEmail = setEmail;
module.exports.setKey = setKey;
module.exports.getToken = getToken;
module.exports.sendRequest = sendRequest;