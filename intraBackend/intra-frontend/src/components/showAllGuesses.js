import {React} from 'react'
import axios from 'axios'
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

    if(sessionStorage.getItem("list") !== null) {
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
                    <tbody>
                    {guesses.map((guess) => (
                        <ShowGuess
                            key={guesses.indexOf(guess)}
                            guess={guess}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
        </div>
    )
}

export default ShowAllGuesses
