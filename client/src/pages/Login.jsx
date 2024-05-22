import React from 'react'
import Google from '../img/google.png'
import Facebook from '../img/facebook.png'
import Github from '../img/github.png'

const Login = () => {
  return (
    <div className='login'>
        <h1 className='loginTitle'>Choose your Login methods</h1>
        <div className="wrapper">
            <div className="left">
            <div className="loginButton google">
                    <span><img src={Google} alt="" className='icon'/> Login with Google</span>
                </div>
                <div className="loginButton facebook">
                    <span><img src={Facebook} alt="" className='icon'/> Login with Facebook</span>
                </div>
                <div className="loginButton github">
                    <span><img src={Github} alt="" className='icon'/> Login with Github</span>
                </div>
            </div>
            <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='password' />
                <button className="submit">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login