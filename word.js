var Letter = require("./letter.js")

module.exports = function Word(word) {
    this.letters = []
    this.populateLettersArr = function () {
        for (var i = 0; i < word.length; i++) {
            this.letters[i] = new Letter(word.charAt(i))
        }
    }
    this.whichWord = function () {
        return word
    }
    this.guess = function (c) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkGuess(c)
        }
    }
}


// var w = new Word("pizza")
// w.populateLettersArr()
// console.log(w.whichWord())
// console.log(w.letters)