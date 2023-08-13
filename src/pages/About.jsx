import React from 'react'
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import about3 from "../images/about3.png"

const About = () => {
  return <>
    <div className="container">
      <div className='row mt-2'>
        <div className="col-md-4">
          <img className='img-fluid rounded-2' src={about1} alt="" />
        </div>
        <div className='col-md-8 d-flex flex-column justify-content-center align-items-center  '>
          <h2>Visionary Approach</h2>
          <p className='mx-auto'>
            Discover a new era of real estate with our visionary mindset. We redefine living spaces, blending innovation and comfort to craft exceptional homes that resonate with your lifestyle.
          </p>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className=" col-md-8 order-1 ">
          <img className='img-fluid rounded-2' src={about2} alt="" />
        </div>
        <div className='  col-md-4  order-0 d-flex flex-column justify-content-center align-items-center  '>
          <h2>Expertise and Excellence</h2>
          <p  className='mx-3'>
            Backed by years of industry expertise, we deliver excellence in every project. From design to execution, our commitment to quality ensures your investment is in trusted hands.
          </p>
        </div>
        <br />
      </div>
      <br />
      <div className='row'>
          <div className=" col-md-8  ">
            <img className='img-fluid rounded-2' src={about3} alt="" />
          </div>
        <div className='  col-md-4  d-flex flex-column justify-content-center align-items-center  '>
          <h2>Community-Centric Ethos</h2>
          <p>
            More than just buildings, we build communities. Our focus on fostering neighborly connections creates environments where families thrive and memories flourish. Welcome to our community-driven vision.
          </p>
        </div>
      </div>
    </div>

  </>
}

export default About