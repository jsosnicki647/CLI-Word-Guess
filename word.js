var Letter = require("./letter.js")

module.exports = function Word(word) {
    this.letters = []
    this.populateLettersArr = function () {
        for (var i = 0; i < word.length; i++) {
            this.letters[i] = new Letter(word.charAt(i))
        }
    }
    this.displayWord = function () {
        var dw = ""
        for (var i = 0; i < this.letters.length; i++) {
            dw += this.letters[i].verifyGuess()
        }
        console.log(dw)
    }
    this.guess = function (c) {
        console.log("letter: " + c)
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkGuess(c)
            // if(!this.isCorrect && this.letters[i].checkGuess(c)){
            //     this.isCorrect = true
            // }
        }
    }
    // this.isCorrect = false
}


// var w = new Word("pizza")
// w.populateLettersArr()
// console.log(w.whichWord())
// console.log(w.letters)