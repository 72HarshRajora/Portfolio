import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Admin from "./Pages/Admin"
import BgStars from "./components/BgStars"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import WorkExperience from "./components/WorkExperience"
import Home from "./Pages/Home"
import { dataContext } from "./context/dataContext"
import PageNotFound from "./Pages/PageNotFound"
import Login from "./Pages/Login"

function App() {

  const [expData, setExpData] = useState([])
  const [skillData, setSkillData] = useState([])
  const [projData, setProjData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const [expRes, skillRes, projRes] = await Promise.all([
        fetch("https://portfolio-xbxy.onrender.com/experience"),
        fetch("https://portfolio-xbxy.onrender.com/skill"),
        fetch("https://portfolio-xbxy.onrender.com/project")
      ])

      const exp = await expRes.json()
      const skill = await skillRes.json()
      const proj = await projRes.json()

      setExpData(exp.data)
      setSkillData(skill.data)
      setProjData(proj.data)
    }

    fetchData()
  }, [])    // expData, skillData, projData


  return (
    <>
      <dataContext.Provider value={{
        expData,
        setExpData,
        skillData,
        setSkillData,
        projData,
        setProjData
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </dataContext.Provider>
    </>
  )
}

export default App