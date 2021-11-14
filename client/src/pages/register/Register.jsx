import React from 'react'
import "./Register.scss" 

const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">JDonL</h3>
                    <span className="loginDesc">Connect with cool people around the world.</span>
                </div>

                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />

                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">You already have an account?</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
