import {React} from 'react'
import axios from 'axios'
import {useState} from 'react'
import ShowGuess from './showGuess';

const ShowAllGuesses = () => {
    let guesses = JSON.parse(sessionStorage.getItem("list"))
    axios
    .get(
        `http://localhost:9898/guess/list`
    )
    .then((response) => {
        sessionStorage.setItem("list", JSON.stringify(response.data))
    });


    return (
        <div>
            <table border = "1">
                <thead>
                    <tr>
                        <th>Nom</th>    
                        <th>Guess Utilisateur</th>    
                        <th>Numero Random</th>    
                    </tr>
                </thead>
                {guesses.map((guess) => (
                    <ShowGuess
                        key={guesses.indexOf(guess)}
                        guess={guess}
                    />
                ))}
            </table>
        </div>
    )
}

export default ShowAllGuesses
