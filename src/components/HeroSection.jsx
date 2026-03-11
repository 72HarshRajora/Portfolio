import React from 'react'
import MyImg from "../assets/MyImg.png"
import "../styles/HeroSection.css"
import HeroBottom from './HeroBottom'

const HeroSection = () => {
  return (
    <div>
      <div className="hero">
        <div className="main">
          <div className="left-img">
            <img src={MyImg} alt="Admin Pic" />
          </div>
          <div className="right-title">
            <h2>A Frontend Developer who</h2>
            <h1>Turns ideas into interactive reality…</h1>
            <p>Because users remember experiences, not pages.</p>
          </div>
        </div>
        <HeroBottom/>
      </div>
    </div>
  )
}

export default HeroSection
