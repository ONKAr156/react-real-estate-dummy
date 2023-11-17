import React from 'react'
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import about3 from "../images/about3.png"
import { motion, useAnimation, useInView } from "framer-motion"

const About = () => {
  return <>
    <div className="container scroll-smooth">
      <div className='row mt-2'>
        <div className="col-md-4">
          <img className='img-fluid rounded-2' src={about1} alt="" />
        </div>
        <div className='col-md-8 d-flex flex-column justify-content-center align-items-center  '>
          <p className='fs-3 fw-medium'>Visionary Approach</p>
          <p className='w-[80%]'>
            Discover a new era of real estate with our visionary mindset. We redefine living spaces, blending innovation and comfort to craft exceptional homes that resonate with your lifestyle.
          </p>
        </div>
      </div>
      <br />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        className='row'>
        <div className=" col-md-8 order-1 ">
          <img className='img-fluid rounded-2' src={about2} alt="" />
        </div>
        <div className='  col-md-4 my-3 order-0 d-flex flex-column justify-content-center align-items-center  '>
          <p className='fs-3 fw-medium'>Expertise and Excellence</p>
          <p className='w-[80%]'>
            Backed by years of industry expertise, we deliver excellence in every project. From design to execution, our commitment to quality ensures your investment is in trusted hands.
          </p>
        </div>
        <br />
      </motion.div>
      <br />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        className='row'>
        <div className=" col-md-4 my-4   ">
          <img className='img-fluid rounded-2' src={about3} alt="" />
        </div>
        <div className='  col-md-8 my-3  d-flex flex-column justify-content-center align-items-center  '>
          <p className='fs-3 fw-medium'>Community-Centric Ethos</p>
          <p className='w-[80%]'>
            More than just buildings, we build communities. Our focus on fostering neighborly connections creates environments where families thrive and memories flourish. Welcome to our community-driven vision.
          </p>
        </div>
      </motion.div>
    </div>

  </>
}

export default About