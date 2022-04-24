import './App.css';
import {useState} from 'react'
import MoleComponent from './moleComponent';

function App() {
let [score,setScore] = useState(0)

  const createMoleHill = () => {

    let hill = [];
    for(let i = 0; i < 9; i++){
        hill.push(<MoleComponent key = {i} setScore={setScore} score = {score}/>)
    }
    return(
      <div>
        {hill}
      </div>
    )
  }

  return (
    <div className="App">
        <h1>React-a-Mole!</h1>
        {score}
        {createMoleHill()}
    </div>
  );
}

export default App;
