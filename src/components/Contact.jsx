import React from 'react'
import Insta from "../assets/insta.svg"
import Github from "../assets/github.svg"
import Linked from "../assets/linked.svg"
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='HaveContacts'>
      <h1>Contact</h1>
      <p>I'm actively looking for a Frontend Developer position to create modern, scalable, and engaging web experiences. Open to exciting opportunities — let's collaborate.</p>
      <p className='email'>72harshrajora@gmail.com</p>
      <div className='links'>
        <li><a href="https://www.instagram.com/harsh_rajora_72/" target='_blank'><img src={Insta} alt="Instagram" /></a></li>
        <li><a href="https://github.com/72HarshRajora/" target='_blank'><img id="invert" src={Github} alt="Github" /></a></li>
        <li><a href="https://www.linkedin.com/in/72harshrajora/" target='_blank'><img id="invert" src={Linked} alt="LinkedIn" /></a></li>
      </div>
    </div>
  )
}

export default Contact
