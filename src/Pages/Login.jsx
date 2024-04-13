import { Link } from 'react-router-dom'

const Login = () =>{

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Friend Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                    </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
        </>
    )
}

export default Login