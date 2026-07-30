import React from 'react'
import Footer from "./footer"
const navbar = ({logotext}) => {
  return (
    <div>
      <div className="logo">{logotext}</div>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact us</li>
        </ul>
        <Footer/>
    </div>
  )
}

export default navbar
