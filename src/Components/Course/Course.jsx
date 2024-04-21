import React from 'react'
import './Course.css'
import cardone from '../Assets/Rectangle 2749.jpg'
import cardtwo from '../Assets/Rectangle 2750-1.jpg'
import cardthree from '../Assets/Rectangle 2750.jpg'
import cardfour from '../Assets/Rectangle 2749.jpg'

function Course() {
  return (
    <section className='Course'>
    <div className="container">
      <div className="course-heading">
        <h3>Top course of study fields</h3>
        <p>See all</p>
      </div>
      <div className="course-list">
        <div>
          <img src={cardone} alt="" />
          <p>20 March</p>
          <h4>Product Management Basic-Course</h4>
          <p>By Chris hemworth</p>
        </div>
        <div>
          <img src={cardtwo} alt="" />
          <p>20 March</p>
          <h4>Data Science Basic-Course</h4>
          <p>By Stephen</p>
        </div>
        <div>
          <img src={cardthree} alt="" />
          <p>20 March</p>
          <h4>The Science of well-Being</h4>
          <p>By Chris hemworth</p>
        </div>
        <div>
          <img src={cardfour} alt="" />
          <p>20 March</p>
          <h4>Topic of Fractal Geometry</h4>
          <p>By Chris hemworth</p>
        </div>


      </div>
      </div>

    </section>
  )
}

export default Course