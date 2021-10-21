import {React} from 'react'
import axios from 'axios'
import {useState} from 'react'
import DisplayAnswer from './displayAnswer'


const FormGuess = () => {
    const [nom, setNom] = useState('')
    const [guess, setGuess] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!nom) {
            alert('Veuillez entrer votre nom')
            return
        }

        if (guess <= 0 || guess >= 7){
            alert('Votre guess doit être entre 1 et 6')
            return
        }

        axios
        .post(
            `http://localhost:9898/guess/${nom}/${guess}`
        )
        .then((response) => {
            sessionStorage.setItem("guess", JSON.stringify(response.data))
            setNom('')
            setGuess('')
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Votre Nom:</label>
                    <input type='text' placeholder='Prénom Nom'
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)} />
                </div>
                <div>
                    <label>Votre guess</label>
                    <input type='number' placeholder='1 à 6'
                    value={guess} 
                    onChange={(e) => setGuess(e.target.value)} />
                </div>
                <input type='submit' value='coup de dé' className='btn btn-block'/>
            </form>
            <DisplayAnswer />
        </div>
    )
}

export default FormGuess
