import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import "./Register.scss" 
import axios from 'axios'

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("passwords don't match! ")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post('/auth/register', user)
                history.push('/login')

            } catch(err) {
                console.log(err)
            }        
        }
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
                        <input type="text" required placeholder="Username" className="loginInput" ref={username} />
                        <input type="email" required placeholder="Email" className="loginInput" ref={email} />
                        <input type="password" required minLength="6" placeholder="Password" className="loginInput" ref={password} />
                        <input type="password" required minLength="6" placeholder="Confirm Password" className="loginInput" required ref={passwordAgain} />

                        <button type="submit " className="loginButton">Sign Up</button>
                        <span className="loginForgot">You already have an account?</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
