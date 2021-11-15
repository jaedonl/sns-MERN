import React, { useContext, useRef } from 'react'
import "./Login.scss" 
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = () => {
    const email = useRef()
    const password = useRef()
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }
    
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">JDonL</h3>
                    <span className="loginDesc">Connect with cool people around the world.</span>
                </div>

                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            required 
                            placeholder="Email" 
                            className="loginInput" 
                            ref={email} 
                        />
                        <input 
                            type="password"
                            required 
                            minLength="6"
                            placeholder="Password" 
                            className="loginInput" 
                            ref={password} 
                        />

                        <button className="loginButton" disabled={isFetching}>
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Login"}
                        </button>

                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Create an Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
   