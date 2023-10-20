import React from 'react';
import './App.css';
import Die from './Die';

function App() {
  const [dice, setDice] = React.useState(allNewDice())


  
  function allNewDice() {
    const arr = [] 
    for (let i = 0; i < 10; i++)
    {
      arr.push(Math.ceil(Math.random()*6))
    }
    return arr
  }
  // console.log(allNewDice())

  const Dice = dice.map(die => <Die value={die} />)
  return (
    <main className='die-container'>
      {Dice}
    </main>
  );
}

export default App;