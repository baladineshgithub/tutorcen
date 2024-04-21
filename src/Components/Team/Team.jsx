import React from 'react'
import './Team.css'
import teamimg from '../Assets/Group 427320723.jpg'


function Team() {
  return (
    <section className='Team'>
      <div className='container'>
      <div className="team-content">
          <h2>Join our global team, share your passion</h2>
          <p>At Tutorcen, we extend a warm invitation to join our worldwide network of tutors and learners. Whether you're a seasoned educator or a student hungry for knowledge, our platform fosters a supportive community where learning has no limits.</p>
          <button>Apply for tutor</button>
        </div>
        <div class="team-img">
          <img src={teamimg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Team