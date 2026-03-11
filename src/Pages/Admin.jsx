import React from 'react'
import "../styles/Admin.css"
import AdminExpM from '../components/AdminExpM'
import AdminSkillM from '../components/AdminSkillM'
import AdminProjM from '../components/AdminProjM'
import BgStars from '../components/BgStars'

const Admin = () => {

    return (
        <div className='Admin'>
            <BgStars/>
            <h1>Admin Portfolio Manager</h1>
            <AdminExpM/>
            <AdminSkillM/>
            <AdminProjM/>
        </div>
    )
}

export default Admin
