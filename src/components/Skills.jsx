import React, { useContext } from 'react'
import "../styles/Skills.css"
import { dataContext } from '../context/dataContext'

const Skills = () => {
    const { skillData } = useContext(dataContext);

    return (
        <div className='HaveSkills'>
            <h1>Skills</h1>
            <div className="slide">
                {skillData.length === 0 ? (
                    <div className='NoSkill'>No skills to show</div>
                ) : skillData.map((item, i) => {
                    return (
                        <div className="skill" key={i}>
                            <h2>{item.SkillName}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
