import React from 'react'

function Suggestions({clickHandler}) {
  return (
    <div className='suggestions-container'>
      <button onClick={()=> clickHandler('Mountains')}>Mountains</button>
      <button onClick={()=> clickHandler('Goats')}>Goats</button>
      <button onClick={()=> clickHandler('Girls')}>Girls</button>
      <button onClick={()=> clickHandler('Bikes')}>Bikes</button>
    </div>
  )
}

export default Suggestions