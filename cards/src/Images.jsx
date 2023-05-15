import React from 'react'

const Images = (props) => {
  return (
    <div>
        <img src={props.imgsrc} alt="netflix" className='card_img' />
    </div>
  )
}

export default Images