// constructor for letter objects containing:
const Letter = function (letter) {
    this.char = letter.toUpperCase()
    this.isGuessed = false
}
//  return character string if already guessed, or placeholder symbol
Letter.prototype.toString = function () {
    if (this.isGuessed === true) {
        return ` ${this.char} `
    }
    else {
        return ' _ '
    }
}
//  check if guess input matches letter
Letter.prototype.checkGuess = function (guess) {
    if (this.char === guess.toUpperCase()) {
        this.isGuessed = true
    }
}

module.exports = Letter