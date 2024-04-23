import React from 'react'
import journeyimg from '../Assets/Group 144.jpg'
import './Journey.css'

function Journey() {
  return (
    <section className='journey'>
      <div className="container">
        <div className="journey-img">
          <img src={journeyimg} alt="" />
        </div>
        <div className="journey-content">
          <h2>Elevate Your Learning Journey with Tutorcen</h2>
          <p>Welcome to Tutorcen's Events and Seminars! Explore a world of educational experiences. From webinars to workshops, there's something for everyone. Stay updated on upcoming events and secure your spot. Let's learn, grow, and inspire together!</p>
          <button>Explore more</button>
        </div>


      </div>

    </section>
  )
}

export default Journey