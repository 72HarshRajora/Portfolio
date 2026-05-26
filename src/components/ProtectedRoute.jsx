import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const [status, setStatus] = useState("checking") // "checking" | "ok" | "fail"

    useEffect(() => {
        const verify = async () => {
            try {
                const res = await fetch("https://portfolio-xbxy.onrender.com/admin", {
                    credentials: "include"
                })
                setStatus(res.ok ? "ok" : "fail")
            } catch {
                setStatus("fail")
            }
        }
        verify()
    }, [])

    if (status === "checking") return <div style={{color:"white", textAlign:"center", marginTop:"2rem"}}>Verifying...</div>
    if (status === "fail") return <Navigate to="/login" replace />
    return children
}

export default ProtectedRoute