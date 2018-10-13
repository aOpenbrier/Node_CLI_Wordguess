// constructor for letter objects containing:
function Letter (letter) {
    this.char = letter
    this.isGuessed = false
}
//  return character string if already guessed, or placeholder symbol
Letter.prototype.toString = function(){
            if (isGuessed = true) {
                return this.char
            }
            else {
                return ' _ '
            }
        }
        //  check if guess input matches letter
Letter.prototype.checkGuess = function(guess){
    if (this.char === guess){
        this.isGuessed = true
    }
}

module.exports = Letter