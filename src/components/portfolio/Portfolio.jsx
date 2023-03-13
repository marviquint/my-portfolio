import React from 'react'
import './portfolio.css'
import wallet from '../../assets/wallet.png'
import student from '../../assets/student.png'
import library from '../../assets/library.jpg'
import amber from '../../assets/amber.png'
import libraryfile from '../../assets/Public-Library-Data-and-Information-Management-System.pdf'
import walletfile from '../../assets/E-Wallet.pdf'
import studentfile from '../../assets/StudentManagementSystem.pdf'

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
            <div className="portfolio__item-cta">
            <a href={libraryfile} download className="btn">Download Docs</a>
            </div>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={student} alt=""/>
            </div>
            <h3>Student Management System</h3>
            <div className="portfolio__item-cta">
            <a href={studentfile} download className="btn">DownLoad Docs</a>
            </div>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={wallet} alt=""/>
            </div>
            <h3>My E-Wallet</h3>
            <div className="portfolio__item-cta">
            <a href={walletfile} download className="btn">Download Docs</a>
            </div>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={amber} alt=""/>
            </div>
            <h3>AMBER: Faculty Evaluation System</h3>
           <div className="portfolio__item-cta">
            <a href="https://github.com/KinnGold/AMBER-Faculty-Evaluation-System" className="btn">Github</a>
           </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio