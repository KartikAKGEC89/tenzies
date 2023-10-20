import React from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect( () => {
    const allDice = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allValue = dice.every(die => die.value === firstValue)
    
    if (allDice && allValue) {
      setTenzies(true)
      console.log("you won")
    }
  }, [dice])

  function refresh() {
    // setDice(prevDice => {
    //   const arr = []
    // for (let i = 0; i < 10; i++)
    // {
    //   arr.push(Math.ceil(Math.random()*6))
    // }
    // return arr
    // })
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        }
      }))
    } else {
      setDice(allNewDice())
      setTenzies(false)
    }
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
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className='die-container'>
      {Dice}
    </div>
      <button className="roll-dice" onClick={refresh}>{ tenzies ? "New Game" : "Roll" }</button>
    </main>
     );
}

export default App;