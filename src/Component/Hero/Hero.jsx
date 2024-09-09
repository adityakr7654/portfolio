import React from 'react'
import './Hero.css'
import profile_img from '../../assest/profile-img.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Aditya Kumar,</span> Web Developer based in india</h1>
      <p>i am a web developer with a passion for creating Interactive and responsive Website.</p>
      <div className="hero-action">
        <div className="hero-connect" ><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
