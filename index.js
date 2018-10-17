const Word = require('./word.js')
const gameWords = ['node', 'process', 'package', 'module', 'asynchronous', 'export', 'dependency', 'javascript', 'server', 'client']
const inq = require('inquirer')
let randNum
let playWord
let chances
let guessInput
let isComplete
let numWins = 0
newWord()
// Game functionality:

//next word
function newWord() {
    if (gameWords.length > 0) {
        // Randomly selects words
        randNum = Math.floor(Math.random() * gameWords.length)
        playWord = new Word(gameWords[randNum])
        chances = Math.floor(playWord.toString().length / 3 + 6)
        console.log('New Word: \n')
        getGuess()
    }
    else {
        console.log(`You finished all words. Thanks for playing. || Wins: ${numWins} `)
    }
}

//guessing prompt
function getGuess() {
    inq.prompt([
        {
            name: "guess",
            message: `  ${playWord.toString()}     || Chances: ${chances} || Guess a letter: `
        }
    ]).then(function (answers) {
        playWord.checkGuess(answers.guess)
        FTW()
    });
}

//check if input was correct
function FTW() {
    
    isComplete = true
    playWord.arr.forEach(element => {
        if (element.isGuessed === false) {
            isComplete = false
        }
    })
    if (isComplete) {
        console.log(`You win! It was ${playWord.toString()}
        `)
        numWins ++
        //remove word from play
        gameWords.splice(randNum, 1)
        newWord()
    }
    else {
        chances--
        if (chances > 0 ){
            getGuess()
        }
        else {
            console.log("Sorry you're out of guesses")
            gameWords.splice(randNum, 1)
            newWord()
        }
    }
}
