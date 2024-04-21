import React from 'react'
import './World.css'
import users from '../Assets/Group 172.png'

function World() {
  return (
    <section className='world'>
      <div className='container'>
      <div className='world-con'>
          <h2>World-Class Tutors, Global Learning Reach</h2>
      </div>
      <div className='world-img'>
          <img src={users} alt="" />
      </div>
        
      </div>
    </section>
  )
}

export default World