import React from 'react'
import './Contact.css'
import github from '../../img/githublogo2.png'
import email from '../../img/maillogo2.png'
import linkedin from '../../img/linkedinlogo2.png'


export default function Contact() {
  return (
    <section className="contact-cont">
      <header className="contact-header">
        Contact Me
      </header>
      <div className="contact-link-cont">
        <a href="https://github.com/NGBlanchard"><img src={github} className="contact-logo" alt="github logo"/></a>
        <a href="mailto:ngblanchard@gmail.com"><img src={email} className="email-logo" alt="email logo"/></a>
        <a href="https://www.linkedin.com/in/nathan-blanchard-35815024/"><img src={linkedin} className="contact-logo" alt="linkedin logo"/></a>      
      </div>
    </section>
  )
}
