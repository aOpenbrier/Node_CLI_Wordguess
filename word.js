const Letter = require('./letter.js')

// Contructor for word object:
const Word = function (fullword) {
    this.addLetters = function () {
        let letterArr = []
        fullword.split('').forEach(function (item) {
            letterArr.push(new Letter(item))
        })
        return letterArr
    }
    //  An array of new Letter objects representing the word
    this.arr = this.addLetters()
}

//  function that returns a string representation the word
Word.prototype.toString = function () {
    return this.arr.join('')
}

//  function that checks the guess input on each letter object
Word.prototype.checkGuess = function (guess) {
    this.arr.forEach(item => item.checkGuess(guess))
}


module.exports = Word