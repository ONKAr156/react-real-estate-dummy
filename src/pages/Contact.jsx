import React from 'react'
import "../css/contact.css"
const Contact = () => {
  return <>
    <div className='backImg '>
      <img className='object-fit-cover w-100 h-100 ' src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
    </div>
    <div className="container my-2">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center  ">
          <h1 className='fs-1 fw-semibold    '>
            We at Landmark Propety we are always there for you 24*7
          </h1>
        </div>
        <div className="col-md-8 my-5 border border-dark p-3 d-flex gap-3 text-bg-dark flex-column">
          <div className='d-flex gap-3'>
            <div>
              <label for="name" className="form-label fs-4 ">First name</label>
              <input type="text" className="form-control px-4 " id="name" placeholder="Enter Your name" />
            </div>
            <div>
              <label for="name" className="form-label fs-4">Last name</label>
              <input type="text" className="form-control px-4" id="name" placeholder="Enter Your last name" />
            </div>
          </div>
          <div className='d-flex gap-4'>
            <div>
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control px-4" id="email" placeholder="Enter Your email" />
            </div>
            <div>
              <label for="number" className="form-label">Number</label>
              <input type="tel" className="form-control px-4" id="number" placeholder="Enter Your number" />
            </div>
          </div>

          <div className=''>
            <label htmlFor="id" class="form-label">id</label>
            <textarea class="form-control h-100" id="id"></textarea>
          </div>
          <p className='text-end mt-3'>
            <button className='form-button text-bg-success p- text-center'>Submit</button>
          </p>

        </div>
      </div>
    </div>

  </>
}

export default Contact