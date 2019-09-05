var Letter = require("./letter.js")

module.exports = function Word(word) {
    this.letters = []
    this.guessesRemaining = 5
    this.correctCount = 0
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
        
        return dw
    }
    this.guess = function (c) {
        var isCorrect = false
        var numCorrect = 0

        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkGuess(c)
            if(this.letters[i].isGuessed){
                numCorrect++
            }
        }

        if(this.correctCount >= numCorrect){
            this.guessesRemaining--
        }

        this.correctCount = numCorrect
    }
    this.whichWord = function(){
        return word
    }
}
