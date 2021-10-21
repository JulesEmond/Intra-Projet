import {React} from 'react'

const DisplayAnswer = () => {
    if(sessionStorage.getItem("guess") !== null) {
        let currentGuess = JSON.parse(sessionStorage.getItem("guess"))
        let answer = currentGuess.numeroRandom
        let guess = currentGuess.guessUtilisateur
        let result = ''
        if (guess === answer){
            result = 'Bravo!'
        } else {
            result = 'Manqué'
        }
        return (
            <div>
                <h1>{answer}</h1>
                <h2>{result}</h2>
            </div>
        )
    }
    return (
        <div>
        </div>
    )
}

export default DisplayAnswer
