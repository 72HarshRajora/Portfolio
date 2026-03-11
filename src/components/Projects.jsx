import React, { useContext } from 'react'
import "../styles/Projects.css"
import Laptop from "../assets/Laptop.svg"
import { dataContext } from '../context/dataContext'

const Projects = () => {
    const { projData } = useContext(dataContext)

    return (
        <div className='HaveProjects'>
            <h1>Featured Project</h1>
            <div className="ProjectContainer">
                {projData.length === 0 ? (<div className="Project">
                    <div className="image">
                        <img className="contain" src={Laptop} alt="Laptop SVG" />
                    </div>
                    <div className="title">
                        <h2>Projects Coming Soon...</h2>
                        <p>Projects in Development Phase, Actively building and refining real-world applications.<br />Featured projects will be published here shortly.</p>
                    </div>
                </div>
                ) : projData.map((item, i) => {
                    return (
                        <div className="Project" key={i}>
                            <div className="image">
                                <img src={item.ProjectImg} alt="Project img" />
                            </div>
                            <div className="title">
                                <h2>{item.ProjectName}</h2>
                                <p>{item.ProjectDesc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
