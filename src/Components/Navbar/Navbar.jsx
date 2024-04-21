import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Original Logo 2.png'
import world from '../Assets/Vector.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {

  const [mobile, setmobile] = useState(false)
  return (
    <div className='navbar'>
      <div className='container'>
      <div className="nav-logo">
        <img src={logo} alt="logo-image"/>
      </div>
      <ul className= {mobile ? "nav-menu-mobile" : "nav-menu"} onClick={()=>setmobile(false)}>
        <li>Find tutors</li>
        <li>Support</li>
        <li>Learn</li>
        <li>Apply for tutor</li>
        <li><img src={world} alt="world-logo"/>EN</li>
        <button className='btn btn-primary'>Login & sign up</button>
      </ul>
      <button className='mobile-menu-icon' onClick={()=> setmobile(!mobile)}>
        {mobile? <ImCross/> :  <FaBars />}
      
      </button>
      </div>

    </div>
  )
}

export default Navbar