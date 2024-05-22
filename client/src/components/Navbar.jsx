import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className="logo"><Link className='link' to='/'>Yadav</Link><span className='dot'>.</span></span>
        {user ? (
            <ul className="list">
            <li className="listItem">
                <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" alt="" className="avatar" />
            </li>
            <li className="listItem">Nitin</li>
            <li className="listItem">Logout</li>
        </ul>
        ) : (<Link className='link' to='/login'> Login</Link>)}
    </div>
  )
}

export default Navbar