import React from 'react'

const About = () => {
  return <>
    <div className="container">
      <div className='row mt-2'>
        <div className="col-md-4">
          <img className='img-fluid rounded-2' src="https://images.unsplash.com/photo-1522724942718-71a5cd63ce22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
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
          <img className='img-fluid rounded-2' src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
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
            <img className='img-fluid rounded-2' src="https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
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