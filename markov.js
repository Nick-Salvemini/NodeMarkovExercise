/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null

      if (chains.has(word)) {
        chains.get(word).push(nextWord)
      } else { chains.set(word, [nextWord]) }
    }
    this.chains = chains
    console.log(chains)
  }

  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    let str = ''
    let chains = this.chains
    let keysArr = Array.from(chains.keys())

    for (let i = 0; i < numWords; i++) {
      let word1 = MarkovMachine.choice(keysArr);
      let valArr = chains.get(word1);
      let word2 = MarkovMachine.choice(valArr)

      str += word1 + ' ';
      if (word2 != null) {
        str += word2 + ' '
      }
    }
    console.log(str)
  }
}

// let mm = new MarkovMachine("the cat in the hat")
// mm.makeText();
// mm.makeText(numWords = 50);

module.exports = {
  MarkovMachine,
};