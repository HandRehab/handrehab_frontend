import React from "react"
import "./About.css";
import Navbar from "../NavBar/NavBar";

function About() {
  return (
    <div>
        <Navbar/>
      <div className="Aboutbody">
        <div className="tit">About Us</div>
        <h1 className='w'>Welcome to Hand Rehab.....!</h1>
        <div className="description"> 
          <br />
          <div className='sub'>The vision of HandRehab is to revolutionize upper limb rehabilitation by providing a virtual, accessible, and affordable computer vision-based hand assessment suite that enhances traditional rehabilitation methods, enabling personalized, remote monitoring, and fostering optimal recovery outcomes for individuals with upper limb deficits, particularly post-stroke patients.</div>
          <h2 className='wi'>Our Journey</h2> 
          <div className='sub'>HandRehab is developed in 2023 by four passionate ,enthusiastic young students. Frustrated by witnessing inefficient and tidious process of Hand Motor Assesment and rehabilitation. we set out to create a trusted platform that offers efficient,time reduced and innovative ways of Hand Assesment and Rehabilitation.</div>
          <h2 className='wi'>Our Audience</h2> 
          <div className='sub'>The primary audience for this project includes healthcare professionals specializing in rehabilitation, occupational therapists, and individuals with upper limb deficits.By creating a user-friendly and accessible computer vision hand rehabilitation assessment suite, the project aims to cater to the needs of rehabilitation professionals seeking efficient and objective evaluation tools, as well as individuals seeking a convenient and home-based solution for monitoring their hand motor recovery. Additionally, the project has the potential to appeal to researchers and technologists interested in the intersection of healthcare and cutting-edge technologies, fostering advancements in the field of virtual rehabilitation.</div>
        </div>
      </div>
    </div>
  )
}

export default About;
