//Primitive value: string, number, boolean, null , undefined

//Object: myObject --> Object.prototype --> null
//Array : myArray --> Array.prototype --> Object.prototype --> null
//Function : myFunc --> Function.prototype --> Object.prototype --> null
//String : myString --> String.prototype --> Object.prototype --> null
//NUmber : myNumber --> Number.prototype --> Object.prototype --> null
//Boolean : myBoolean --> Boolean.prototype --> Object.prototype --> null

//HTTP (HyperText Transfer Protocol)
//Request - What we want to do
//Response - What was actually done

import HangMan from './hangman'
import getPuzzle from './request'

let game1
const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

// // get puzzle with fetch
// getPuzzle('5').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// //get country with fetch
// getCountry('mx').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error` + err)
// })

// //get country with fetch
// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error` + err)
// })

// getCurrentCountry().then((country) => {
//     console.log('getcurrentcountry: ' + country.name)
// }).catch((err) => {
//     console.log('Error ' + err)
// })

const render = () => {
    let x = 0;
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    let wordArray = game1.puzzle.split('')
    for(x;x<wordArray.length;x++){
        let letter = document.createElement('span');
        letter.innerHTML=wordArray[x]
        puzzleEl.appendChild(letter)
    }
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new HangMan(puzzle, 5)
    render()
}

startGame()


document.querySelector('#reset').addEventListener('click', startGame)
// // get puzzle with promises
// getPuzzle('5').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

//get Country with promises
// getCountry('mx').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })


// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     }
//     else {
//         throw new Error('Unable to fetch puzzle' + response.status)
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((err) => {
//     console.log(error)
// })
