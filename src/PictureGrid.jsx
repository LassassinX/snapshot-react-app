import React from 'react'

function PictureGrid({pictures, clickHandler}) {

  return (
    <div className='picture-grid'>
      {pictures.map((url, index) => {
        return (
          <img style={{"--animation-order": `${index}`}} key={index} src={url} onClick={(e) => clickHandler(e.target)}/>
         )
      })}    
    </div>
  )
}

export default PictureGrid