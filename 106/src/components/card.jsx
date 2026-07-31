import React from 'react'
import "./card.css"
const card = (props) => {
  return (
    <div className='card'>
        <img src="https://media.kingston.com/kingston/hero/ktc-articles-solutions-speed-up-your-mac-hero-lg.jpg" alt="" width={307} style={{border:"2px solid black",overflow:"hidden"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default card
