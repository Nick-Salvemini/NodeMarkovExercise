const fs = require('fs');
const markov = require('./markov');
const axios = require("axios");
const process = require("process");

function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText())
}

function read(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('Error: ', err);
            process.exit(1)
        } else {
            // console.log(typeof data)
            return data
        }
    })
}

generateText(read(process.argv[3]))
// let text = read(process.argv[3])
// console.log(text)

// console.log(read(process.argv[3]))