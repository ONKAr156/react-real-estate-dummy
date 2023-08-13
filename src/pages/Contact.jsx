import React from 'react'
import "../css/contact.css"
import {motion} from "framer-motion"
import contact1 from "../images/contact1.png"
import contact2 from "../images/contact2.png"
const Contact = () => {
  const process = [
    {
      title: "Phone",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds",
      icon: "bi bi-telephone "
    },
    {
      title: "Email",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
      icon: "bi bi-envelope "
    },
    {
      title: "location",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
      icon: "bi bi-geo-alt-fill "

    },
  ]
  return <>
    <div className='backImg '>
      <img className='object-fit-cover w-100 h-100 ' src={contact1} alt="" />
    </div>
    <div className="container my-2">
    {/* <div className="row mt-5">
        {
          process.map(item => <div className='col-md-6 col-lg-4  '>
            <div className='   d-lg-flex justify-content-lg-center justify-content-center flex-lg-column'>
              <p className='fs-4 p-2 h-25   bg-info-subtle d-flex justify-content-center align-items-center  rounded-2'>
                <motion.i
                  whileHover={{ scale: 1.3, }}
                  className={`${item.icon} text-dark   `}></motion.i>
              </p>
              <p className='text-black text-center'>{item.title}</p>
              <p className='text-black-50 text-center'>{item.desc}</p>
            </div>
          </div>)
        }
      </div> */}
      <div className="row mt-0">
        <div className="col-md-6 col-lg-4">
          <img className='img-fluid w-100 h-100' src={contact2} alt="" />
        </div>
        <div className=" col-md-6 col-lg-8 justify-content-center align-item-center d-flex flex-column gap-2">
          <h3  className='fs-2 w-100'>Connecting Dreams to Addresses</h3>

          <div className='d-flex flex-column gap-0 d-md-block '>
          <span className='fs-5'> Reach out and let's make your real estate aspirations a reality. </span>
          <p className='text-break text-black-50'> Our team awaits to assist you on your property journey. Your perfect property is just a message away.
          <span className='text-black-50'>Contact us now for a personalized experience in finding your dream home.</span>
          </p>
          </div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column  ">
          <h1 className='fs-1 text-success title   '>
            Landmark <small className='fs-6'>Property's</small>
          </h1>
          <p className='text-black-50'>we are always there for you 24*7</p>
        </div>
        <div className="col-md-8 my-5 border border-dark rounded-1 p-3 d-flex gap-3  flex-column">
          <div className='d-flex gap-3'>
            <div>
              <label for="name" className="form-label  ">First name</label>
              <input type="text" className="form-control px-4 " id="name" placeholder="Enter Your name" />
            </div>
            <div>
              <label for="name" className="form-label ">Last name</label>
              <input type="text" className="form-control px-4" id="name" placeholder="Enter Your last name" />
            </div>
          </div>
          <div className='d-flex gap-4'>
            <div>
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control px-4" id="email" placeholder="Enter Your email" />
            </div>
            <div>
              <label for="number" className="form-label">Please enter you number</label>
              <input type="tel" className="form-control px-4" id="number" placeholder="Enter Your number" />
            </div>
          </div>

          <div className=''>
            <label htmlFor="id" className="form-label">Problem or Suggestion's</label>
            <textarea maxLength={"150"} className="form-control h-100 " id="id"></textarea>
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