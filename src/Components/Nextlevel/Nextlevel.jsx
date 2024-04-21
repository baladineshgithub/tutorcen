import React from 'react'
import './Nextlevel.css'
import nextimg from '../Assets/Banner_1 1 1.png'

function Nextlevel() {
  return (
    <div className='Nextlevel'>
          <div className="container">
        <div className='next-content'>
          <h2>Ready to take your learning journey to the next level?</h2>
          <button>Get started</button>
        </div>
        <div className='next-img'>
          <img src={nextimg} alt="nextimg" />
        </div>

      </div>
    </div>
  )
}

export default Nextlevel