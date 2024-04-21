import React from 'react'
import './Discover.css'
import dimg from '../Assets/happy-young-teenage-girl 1.png'
import dcontent from '../Assets/Group 427320726.png'

function Discover() {
  return (
    <section className='discover'>
      <div className="container">
        <div className='discover-content'>
          <img src={dcontent} alt="" />
          <h2>Discover Your Perfect Tutor Find Expert Guidance for Every Subject</h2>
          <button>Find tutor</button>
        </div>
        <div className='discover-img'>
          <img src={dimg} alt="discover-image" />
        </div>

      </div>
    </section>
  )
}

export default Discover