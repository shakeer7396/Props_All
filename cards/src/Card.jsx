import React from 'react'
import Images from './Images'
import Headding from './Headding'

const Card = (props) => {
  return (
    <>
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc}/>
                <div className="card_info">
                    <span className="card_category">{props.title}
                    <Headding sname={props.sname} />
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card