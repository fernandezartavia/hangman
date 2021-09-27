//get puzzle with promises
// const getPuzzle = (wordCount) => new Promise((resolve,reject)=>{
//        // Making an http request
//        const request = new XMLHttpRequest()
//        request.addEventListener('readystatechange', (e) => {
//            if (e.target.readyState === 4 && e.target.status === 200) {
//                const data = JSON.parse(e.target.responseText)
//                resolve(data.puzzle)
//            } else if (e.target.readyState === 4) {
//                reject('An error has taken place')
//            }
//        })
//        request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//        request.send()

// })


//getCountry with promises
// const getCountry = (countryCode) => new Promise((resolve,reject)=>{
//     const countryRequest = new XMLHttpRequest()
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
// if (data !== null) {
//     data.forEach((country) => {
//         if (country.alpha2Code === countryCode.toUpperCase()) {
//             resolve(country)
//         }
//     })
// }
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }

//     })
//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()

// })


//get puzzle with fetch
// const getCountryOld = (countryCode) => {
//     return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         }
//         else {
//             throw new Error('Unable to fetch country' + response.status)
//         }
//     }).then((data) => {
//         return data.find((country)=> country.alpha2Code===countryCode.toUpperCase())
//     })
// }

//get puzzle with fetch
// const getCountry = async (countryCode) => {
//     const response = await fetch(`//restcountries.eu/rest/v2/all`)
//         if (response.status === 200) {
//             const data = await response.json()
//             return data.find((country)=> country.alpha2Code===countryCode.toUpperCase())
//         }
//         else {
//             throw new Error('Unable to fetch country' + response.status)
//         }
// }

//get country with fetch
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`) 
    if(response.status === 200){
       const data = await response.json()
       return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}


// //get country with fetch
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         }
//         else {
//             throw new Error('Unable to fetch puzzle' + response.status)
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     return getCountry(location.country)
// }

//get country with fetch
const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=d1ee5266871f83')
        if (response.status === 200) {
            return await response.json()
        }
        else {
            throw new Error('Unable to fetch location' + response.status)
        }
    }

//     //get country with fetch
// const getLocationOld = () => {
//     return fetch('https://ipinfo.io/json?token=d1ee5266871f83').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         }
//         else {
//             throw new Error('Unable to fetch location' + response.status)
//         }
//     }).then((data) => {
//         return data
//     })
// }

export {getPuzzle as default}