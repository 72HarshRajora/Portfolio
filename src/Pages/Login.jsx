import { useState } from 'react'
import "../styles/Login.css"
import BgStars from '../components/BgStars'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData(prev =>({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (data) => {

        const res = await fetch("https://portfolio-xbxy.onrender.com/login", {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })

        const result = await res.json()
        if(!res.ok){
            toast.error(result.message)
            return
        }
        toast.success(result.message)
        navigate("/admin")
    }

    return (
        <div className='login-page'>
            <BgStars />
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(data)
            }}>
                <h1>Login as Admin</h1>
                <div className="input">
                    <label htmlFor="email">Email Id</label>
                    <input type="email" id='email' name='email' value={data.email} onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' name='password' value={data.password} onChange={handleChange}/>
                </div>
                <div className="buttons">
                    <button type="submit">Login</button>
                    <button type="button" onClick={() => navigate(-1)}>Back</button>
                </div>
            </form>
        </div>
    )
}

export default Login
