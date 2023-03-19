import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#about" className='btn'>Get to Know Me</a>
    </div>
  )
}

export default CTA