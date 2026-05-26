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

    const verifyToken = async () => {
        const res = await fetch("https://portfolio-xbxy.onrender.com/admin", {
            credentials: "include"
        })

        if(!res.ok){
            toast.error("Continue after login.")
            navigate("/login")
        }
    }

    useEffect(() => {
      verifyToken()
    }, [])

    const handleLogout = async () => {
        const res = await fetch("https://portfolio-xbxy.onrender.com/logout", {
            credentials: "include"
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
