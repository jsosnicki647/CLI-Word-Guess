module.exports = function (letter) {
    this.letter = letter
    this.isGuessed = false
    this.verifyGuess = function () {
        if (this.isGuessed) {
            return this.letter
        } 
        else{
            return " _ "
        }
    }
    this.checkGuess = function (c) {
        if (c == this.letter) {
            this.isGuessed = true
        }
        
        return this.isGuessed
    }
}
