import React from 'react'
import './portfolio.css'
import wallet from '../../assets/wallet.png'
import student from '../../assets/student.png'
import library from '../../assets/library.jpg'
import instaMag from '../../assets/instamag.png';
import nexusGpt from '../../assets/nexusgpt.png';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={library} alt=""/>
            </div>
            <h3>Public Library Data and Information Management System</h3>
            <h5>Final Poject in Information Management Subject</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={student} alt=""/>
            </div>
            <h3>Student Management System</h3>
            <h5>Final Poject in ASP.NET Subject</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={wallet} alt=""/>
            </div>
            <h3>My E-Wallet</h3>
            <h5>Final Poject in Integrative Programming and Technologies Subject</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={instaMag} alt=""/>
            </div>
            <h3>InstaMag: Photo Magazine Social Media Site</h3>
            <h5>MERN Stack Project</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={nexusGpt} alt=""/>
            </div>
            <h3>NexusGPT: ChatGPT x Dall-E Crossover</h3>
            <h5>ExpressJS, ReactJS, and NodeJS OpenAI API Project</h5>
        </article>
      </div>
    </section>
  )
}

export default Portfolio