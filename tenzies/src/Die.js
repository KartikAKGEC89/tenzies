import React from 'react'
import './App.css';


const Die = ({ value, isHeld, hold }) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "White"
  }
  return (
    <div className="die-face" style={styles} onClick={hold}>
          <h2 className='die-num'>{ value }</h2>
    </div>
  )
}

export default Die
