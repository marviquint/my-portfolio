import React from 'react'
import './about.css'
import ME from '../../assets/me-img.png'
import {RiAwardFill} from 'react-icons/ri'
import {GoProject} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <RiAwardFill className="about__icon"/>
                <h3>Experience</h3>
                <h5>3+ years of Experience</h5>
              </article>
              <article className="about__card">
                <GoProject className="about__icon"/>
                <h3>Projects</h3>
                <h5>6 completed Projects</h5>
              </article>
            </div>
            <p>
              Hello,
              I am a Senior student currently taking the degree Bachelor of Science in Information Technology with 3+ years experience in various Information Technology subjects such as Computer Programming, System Integration Architecture, Information Management, Database Management System and a lot more. And currently, I welcome you to my Portfolio website.
            </p>

            <a href="#contact" className="btn">Let's Communicate</a>
          </div>
      </div>
    </section>
  )
}

export default About