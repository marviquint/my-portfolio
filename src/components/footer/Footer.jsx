import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Marviquint</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/Marviquint"><BsFacebook/></a>
        <a href="https://instagram.com/kin.gold_11"><BsInstagram/></a>
        <a href="https://twitter.com/kin_gold11"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Marviquint Bahio. All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer