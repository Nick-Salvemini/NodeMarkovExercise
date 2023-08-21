const fs = require('fs');
const axios = require("axios");
const process = require("process");

async function generateText(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data)
    } catch (err) {
        console.log(`Error.  Could Not Find ${url}: ${err}`);
        process.exit(1);
    }

}

let read = () => new Promise((resolve, reject) => {
    fs.readFile(process.argv[3], 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data)
        }
    })
})

if (process.argv[2] == 'file') {
    read().then(data => console.log(data)).catch(err => { console.log('Error: ', err) })
}

if (process.argv[2] == 'url') {
    generateText(process.argv[3])
}