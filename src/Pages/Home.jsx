import React from 'react'
import HeroSection from "../components/HeroSection"
import WorkExperience from "../components/WorkExperience"
import BgStars from '../components/BgStars'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <BgStars />
            <HeroSection />
            <WorkExperience />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
