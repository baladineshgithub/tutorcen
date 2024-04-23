import React from 'react'
import './Course.css'
import cardone from '../Assets/Rectangle 2749.jpg'
import cardtwo from '../Assets/Rectangle 2750-1.jpg'
import cardthree from '../Assets/Rectangle 2750.jpg'
import cardfour from '../Assets/Rectangle 2749.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Course() {
  const data =[ 
    {
      img:  cardone,
      date: '20 March',
      Course: 'Product Management Basic-Course',
      publish: 'By Chris hemworth',
    },
    {
      img:  cardtwo,
      date: '20 March',
      Course: 'Data Science Basic-Course',
      publish: 'By Stephen',
    },
    {
      img:  cardthree,
      date: '20 March',
      Course: 'The Science of well-Being',
      publish: 'By Chris hemworth',
    },{
      img:  cardfour,
      date: '20 March',
      Course: 'Topic of Fractal Geometry',
      publish: 'By Chris hemworth',
    },{
      img:  cardtwo,
      date: '20 March',
      Course: 'The Science of well-Being',
      publish: 'By Stephen',
    },{
      img:  cardone,
      date: '20 March',
      Course: 'Product Management Basic-Course',
      publish: 'By Chris hemworth',
    },{
      img:  cardthree,
      date: '20 March',
      Course: 'Product Management Basic-Course',
      publish: 'By Chris hemworth',
    },{
      img:  cardfour,
      date: '20 March',
      Course: 'Topic of Fractal Geometry',
      publish: 'By Chris hemworth',
    },{
      img:  cardone,
      date: '20 March',
      Course: 'Product Management Basic-Course',
      publish: 'By Chris hemworth',
    },
    {
      img:  cardtwo,
      date: '20 March',
      Course: 'The Science of well-Being',
      publish: 'By Stephen',
    },
            
    
    ]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <section className='Course'>
    <div className="container">
      <div className="course-heading">
        <h3>Top course of study fields</h3>
        <p>See all</p>
      </div>
      <Slider {...settings} 
      style={{ color: 'black' }}
      >
        {data.map((d, index) => (
          <div className='course-list'  key={index} >
            <img src={d.img} alt="" />
            <p>{d.date}</p>
            <h4>{d.Course}</h4>
            <p>{d.publish}</p>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  )
 }


export default Course

