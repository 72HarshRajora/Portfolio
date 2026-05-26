import React from 'react'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [admin, setAdmin] = useState(false)

  const verifyToken = async () => {
    const res = await fetch("https://portfolio-xbxy.onrender.com/admin", {
      credentials: "include"
    })

    if (!res.ok) {
      toast.error("Continue after login.")
      navigate("/login")
    }

    setAdmin(true)
  }

  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <nav>
      <div className="logo">
        <h1>HARSH RAJORA</h1>
      </div>
      <ul>
        <li><NavLink to="/" className={(e) => { return e.isActive ? "red" : "" }}>Home</NavLink></li>
        <li><NavLink to={admin ? "/admin" : "/login"} className={(e) => { return e.isActive ? "red" : "" }}>Admin</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar