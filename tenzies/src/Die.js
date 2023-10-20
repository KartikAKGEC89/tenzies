import React from 'react'
import './App.css';


const Die = ({value}) => {
  return (
    <div className="die-face">
          <h2 className='die-num'>{ value }</h2>
    </div>
  )
}

export default Die
