import React from 'react'
import Footer from './Footer'
import "../css//sell.css"
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
      <img className='w-100 h-100 img-fluid object-fit-cover rounded-bottom-5  '
        src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
      <span className='position-absolute top-50 start-50 text-light fs-2'>Sell Faster. Save Thousands.</span>
    </div>
    <div className="container  ">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 work text-center d-flex justify-content-center flex-column">
          <h2>How It Works</h2>
          <p>start working with <span className='fw-semibold text-danger'>Landmark Properties</span> that can provide everything you need to generate Lorem, ipsum. <p>awareness, drive traffic, connect.</p></p>

        </div>
      </div>
      <div className="row">
        {
          process.map(item => <div className='col-md-6 col-lg-4  '>
            <div className='   d-lg-flex justify-content-lg-center flex-lg-column'>
              <p className='fs-4 p-2 w-25 bg-info-subtle d-flex justify-content-center align-items-center  rounded-2'>
                <i className={`${item.icon} text-dark   `}></i>
              </p>
              <p className='text-black-50'>{item.title}</p>
              <p className='text-black-50'>{item.desc}</p>
            </div>
          </div>)
        }

      </div>
      <div className="row">
        <div className="col-sm-6 offset-sm-3 work text-center d-flex justify-content-center flex-column">
          <h2>Brokerage Calculator</h2>
          <p className='text-black-50'>Start working with Landrick that can provide everything you need to generate <p>awareness, drive traffic, connect. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p></p>

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

            <div className='d-md-flex d-sm-inline-block justify-content-between '>
              <span className='text-success fs-4 fw-semibold'>$29792</span>
              <span className='text-success fs-4 fw-semibold'>$297.92</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
}

export default Sell