import React from 'react'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>HARSH RAJORA</h1>
      </div>
      <ul>
        <li><NavLink to="/" className={(e)=>{return e.isActive?"red":""}}>Home</NavLink></li>
        <li><NavLink to="/login" className={(e)=>{return e.isActive?"red":""}}>Admin</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar