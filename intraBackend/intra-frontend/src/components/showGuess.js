import {React} from 'react'

const ShowGuess = ({guess}) => {
    return (
        <tr>
            <td>{guess.nom}</td>
            <td>{guess.guessUtilisateur}</td>
            <td>{guess.numeroRandom}</td>
        </tr>
    )
}

export default ShowGuess
