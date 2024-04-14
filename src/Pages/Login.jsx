import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from "firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () =>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
          } catch (err) {
            setErr(true);
          }
    }

    return(
        <>
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Friend Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder="Enter your email here" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder="Enter your password here"  
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button>Sign in</button>
                    {err && <span className="error-message">Something went wrong</span>}
                    
                    </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
        </>
    )
}

export default Login