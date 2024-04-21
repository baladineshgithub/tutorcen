import React from 'react'
import './Online.css'
import onlineimg from '../Assets/Group 138.png'
import icon1 from '../Assets/Group 149.png'
import icon2 from '../Assets/Group 149 (2).png'
import icon3 from '../Assets/Group 149 (1).png'


function Online() {
  return (
    <section className='online'>
      <div className="container">
        <div className='online-heading'>
          <h2>How We Redefine the Online Tutoring Experience</h2>
        </div>
        <div className='online-btn'>
          
          <button>Parent interaction</button>
          <button className='btn-pri'>Peer classes</button>
          <button className='btn-pri'>Discussion forum</button>
          <button className='btn-pri'>Quiz</button>
          <button className='btn-pri'>Explore more</button>
        </div>
        <div className='online-content'>
          <div className='oimg'>
            <img src={onlineimg} alt="" />
          </div>
          <div className=' online-con'>
            <h2>We respect parents' crucial role in their child's academic journey</h2>
            <div>
              <span><img src={icon1} alt="" />Monitor Your Child's Activity</span>
              <p>Keep track of your child's attendance, session participation, and progress in real-time, giving you insight into their engagement and dedication to learning.</p>
            </div>
            <div>
              <span><img src={icon2} alt="" />View Detailed Reports</span>
              <p>Get comprehensive reports on your child's performance with Tutorcen. View session summaries, assessment results, and tutor feedback for a complete overview of their progress.</p>
            </div>
            <div>
              <span><img src={icon3} alt="" />Communicate with Tutors</span>
              <p>Establish direct communication channels with your child's tutors to discuss goals, address concerns, and collaborate on strategies to enhance your child's learning experience.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Online