class HangMan {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get puzzle() {
        let puzz = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzz = puzz + letter
            } else {
                puzz += '*'
            }
        })
        return puzz
    }
    makeGuess(guess){
        if (this.status === "playing") {
            guess = guess.toLowerCase()
            const isUnique = !this.guessedLetters.includes(guess)
            const isBadGuess = !this.word.includes(guess)
    
            if (isUnique) {
                this.guessedLetters.push(guess)
            }
    
            if (isUnique && isBadGuess) {
                this.guesses--
            }
    
            this.calculateStatus()
        }
    }
    get statusMessage() {
        let wordx=''
        if (this.status === 'playing') {
            return `Playing, amount of guesses left ${this.guesses}`
        } else if (this.status === 'failed') {
            wordx = this.word.join('')
            return `Failed, the word was: "${wordx}"`
        }
        else {
            return `Finished, you guessed the word`
        }
    }

}

export {HangMan as default}