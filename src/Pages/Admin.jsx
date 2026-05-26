import { useEffect } from 'react'
import "../styles/Admin.css"
import AdminExpM from '../components/AdminExpM'
import AdminSkillM from '../components/AdminSkillM'
import AdminProjM from '../components/AdminProjM'
import BgStars from '../components/BgStars'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        const res = await fetch("https://portfolio-xbxy.onrender.com/logout", {
            credentials: "include",
            method: "POST"
        })

        const result = await res.json()
        toast.success(result.message)
        navigate("/")
    }

    return (
        <div className='Admin'>
            <BgStars />
            <h1>Admin Portfolio Manager</h1>
            <AdminExpM />
            <AdminSkillM />
            <AdminProjM />
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Admin
