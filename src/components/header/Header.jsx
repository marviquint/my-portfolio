import React from 'react'
import './header.css'
import ME from '../../assets/pic.jpeg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Marviquint Bahio</h1>
        <h3 className="text-light">Student Software Developer</h3>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="Me"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>

    </header>
  )
}

export default Header