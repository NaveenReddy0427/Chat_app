import { Link } from 'react-router-dom'

const Register = ()=>{
    return(
        <>
        <div className="formContainer">
            <div className="formWrapper"> 
                <span className="logo">Friend Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Enter your name"/>
                    <input required type="email" placeholder="Enter your email"/>
                    <input required type="password" placeholder="Enter your password"/>
                    <input required type="file" id="file"/>
                    <label htmlFor="file">
                        <img src="" alt=""/>
                        <span>Choose a profile picture</span>
                    </label>
                    <button>Sign up</button>
                    <p>
                        You do have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Register