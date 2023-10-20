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
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
    } ))
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
  


// Hold Function use of map update state



  function hold(id) {
    setDice(
      oldDice => oldDice.map(die => {
        return die.id === id ?
          {
            ...die,
            isHeld: !die.isHeld
          } :
          die
      })
    )
  }

  const Dice = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={ () => hold(die.id)} />)
  return (
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className='die-container'>
      {Dice}
    </div>
    <button className="roll-dice" onClick={refresh}>Roll</button>
    </main>
     );
}

export default App;