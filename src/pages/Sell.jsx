import React from 'react'
import "../css//sell.css"
import {motion} from "framer-motion"
import sell1 from "../images/sell1.png"
const Sell = () => {
  const process = [
    {
      title: "Evaluate Property",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds",
      icon: "bi bi-house "
    },
    {
      title: "Meeting with Agent",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
      icon: "bi bi-bag "
    },
    {
      title: "Close the with Deal",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
      icon: "bi bi-key "
    },
  ]
  return <>
    <div className='heading_sell position-relative' >
      <img className='w-100 h-100 img-fluid object-fit-cover rounded-bottom-3  '
        src={sell1} alt="" />
      <span className='position-absolute top-50 start-50 text-light fs-2'>Sell Faster. Save Thousands.</span>
    </div>
    <div className="container  ">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 work text-center d-flex justify-content-center flex-column">
          <p className='fs-1 py-2'>How It Works</p>
          <p className='fs-5'>start working with <span className='fw-semibold text-danger'>Landmark Properties</span> that can provide everything you need to generate  awareness, drive traffic, connect.</p>

        </div>
      </div>
      <div className="row mt-5 px-4">
        {
          process.map(item => <div className='col-md-6 col-lg-4 py-3 '>
            <div className='   d-lg-flex justify-content-lg-center justify-content-center flex-lg-column gap-3'>
              <p className='fs-4 p-2 h-25   bg-info-subtle d-flex justify-content-center align-items-center  rounded-2'>
                <motion.i
                  whileHover={{ scale: 1.3, }}
                  className={`${item.icon} text-dark   `}></motion.i>
              </p>
              <p className='text-black text-center fs-5 py-2'>{item.title}</p>
              <p className='text-black-50 text-center '>{item.desc}</p>
            </div>
          </div>)
        }
      </div>
      <div className="row">
        <div className="col-sm-6 offset-sm-3 work text-center d-flex justify-content-center flex-column">
          <p className='fs-4 py-2'>Brokerage Calculator</p>
          <p className='text-black-50 fs-6'>Start working with Landrick that can provide everything you need to generate <p>awareness, drive traffic, connect. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p></p>

        </div>
      </div>
      <div className="row mb-2">
        <div className="col-sm-6 offset-sm-3 work text-center d-flex justify-content-center flex-column">
          <div class="card h-75 d-flex justify-content-between p-3">

            <div className='d-flex justify-content-between '>
              <span className='fs-5'>Min $ 10000</span>
              <span className='fs-5'>Max $ 100000</span>
            </div>
            <input className='form-range' type="range" min={0} max={100} />

            <div className='d-flex justify-content-between '>
              <span className='fw-semibold'>Total Value ($)</span>
              <span className='fw-semibold'>Brokerage Fee</span>
            </div>

            <div className='d-md-flex    justify-content-between '>
              <span className='text-success fs-4 px-2 fw-semibold'>$29792</span>
              <span className='text-success fs-4 px-2 fw-semibold'>$297.92</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
}

export default Sell