import React from 'react'
import './Footer.css'
import title from '../Assets/Original Logo 2.png'
import facbook from '../Assets/facebook (5) 1.png'
import insta from '../Assets/instagram (3) 1.png'
import youtube from '../Assets/youtube (1) 1.png'
import twitter from '../Assets/twitter 1 1.png'

function Footer() {
  return (
    <section className='footer'>
      <div className='container'>
        <div>
          <img src={title} alt="footer-title" />
          <p>Discover endless learning opportunities with Tutorcen!</p>
      </div>
       <div>
          <h3>About us</h3>
          <div className='line'></div>
          <ul>
            <li>Contact us</li>
            <li>Voice of success</li>
            <li>Blog post</li>
            <li>Best tutors</li>
          </ul>
        </div>
        <div>
          <h3>Policies</h3>
          <div className='line'></div>
          <ul>
            <li>Privacy policy</li>
            <li>Security</li>
            <li>Memberships</li>
            <li>FAQ</li>
            <li>Terms & use</li>
            <li>Refund policy</li>
          </ul>
        </div>
        <div>
          <h3>Help & Feedback</h3>
          <div className='line'></div>
          <ul>
            <li>Mail us</li>
            <li>Share your story</li>
            <li>Study guide</li>
            <li>24/7 Student support</li>
            <li>Feedback</li>
          </ul>
        </div>
      <div>
        <h3>Social</h3>
        <div className='line'></div>
          <div className='socialimg'>
            <img src={facbook} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
   
      </div>
    </section>
  )
}

export default Footer