import React from "react";
import "./Hero.css";
import location from "../Assets/location.png";
import Down from "../Assets/CaretDown.png";
import search from "../Assets/fi_search.png";
import Heroimg from '../Assets/Component 7.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <p> EMPOWERING STUDENTS TO EXCEL </p>
        <h3> Your Gateway to Effective Learning </h3>
        {/* <div className="search">
          <span> <img src={location} alt="location-img" /> Enter Location <img src= {Down} alt="downarrow-image" /></span>
          <button><img src={search} alt="searchimg" /> Search </button>
        </div> */}
      </div>
      <div className="hero-right">
        <img src={Heroimg} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
