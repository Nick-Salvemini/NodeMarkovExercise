const fs = require('fs');
const markov = require('./markov');
const axios = require("axios");
const process = require("process");

// function generateText(text) {
//     // let mm = new markov.MarkovMachine(text);
//     // console.log(mm.makeText())
//     console.log(text)
// }

// function read(path) {
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) {
//             console.log('Error: ', err);
//             process.exit(1)
//         } else {
//             // console.log(typeof data)
//             return data
//         }
//     })
// }

async function generateText(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp)
    } catch (err) {
        console.log(`Error.  Could Not Find ${url}: ${err}`);
        process.exit(1);
    }

}

let read = new Promise((resolve, reject) => {
    fs.readFile(process.argv[3], 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            // console.log(typeof data)
            resolve(data)
        }
    })
})

if (process.argv[2] == 'file') {
    read.then(data => console.log(data)).catch(err => { console.log('Error: ', err) })
}

if (process.argv[2] == 'url') {
    // read.then(generateText(process.argv[3])).catch(err => { console.log('Error: ', err) })
    generateText(process.argv[3])
}

// generateText(read(process.argv[3]))
// let text = read(process.argv[3])
// console.log(text)

// console.log(read(process.argv[3]))