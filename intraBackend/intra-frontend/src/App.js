import './App.css';
import FormGuess from './components/formGuess';
import ShowAllGuesses from './components/showAllGuesses';

function App() {
  return (
    <div className="App">
      <h1> Examen Intra</h1>
      <FormGuess />
      <ShowAllGuesses />
    </div>
  );
}

export default App;
