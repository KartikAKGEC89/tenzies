import React from 'react';
import './App.css';
import Die from './Die';
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function refresh() {
    // setDice(prevDice => {
    //   const arr = []
    // for (let i = 0; i < 10; i++)
    // {
    //   arr.push(Math.ceil(Math.random()*6))
    // }
    // return arr
    // })
    setDice(allNewDice())
  }
  
  function allNewDice() {
    const arr = [] 
    for (let i = 0; i < 10; i++)
    {
      arr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return arr
  }
  // console.log(allNewDice())

  function hold(id) {
    console.log(id)
  }

  const Dice = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={ () => hold(die.id)} />)
  return (
    <main className='die-container'>
      {Dice}
      <button className="roll-dice" onClick={refresh}>Roll</button>
    </main>
     );
}

export default App;