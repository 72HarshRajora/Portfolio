import React, { useContext } from 'react'
import "../styles/WorkExperience.css"
import { dataContext } from '../context/dataContext'
import workSVG from "../assets/work.svg"

const WorkExperience = () => {

  const { expData, loading } = useContext(dataContext)

  return (
    <div className='work'>
      <h1>Work Experience</h1>
      <div className="gridEx">
        {loading ? <div className="Expr">
          <div className="text">
            <h2>Loading...</h2>
          </div>
        </div> : (expData.length === 0 ? (
          <div className="Expr">
            <div className="image">
              <img src={workSVG} alt="Work" />
            </div>
            <div className="text">
              <h2>No Work Experience...</h2>
              <p>Currently looking for a job, for more info contact me.</p>
            </div>
          </div>
        ) : expData.map((item, i) => {
          return (
            <div className="Expr" key={i}>
              <div className="image">
                <img src={workSVG} alt="Work" />
              </div>
              <div className="text">
                <h2>{item.CompanyName}</h2>
                <p>{item.CompanyDesc}</p>
              </div>
            </div>
          )
        }))}
      </div>
    </div>
  )
}

export default WorkExperience
