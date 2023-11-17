import React, { useState } from 'react'
import "../css/home.css"
import { motion } from "framer-motion"
import car1 from "../images/car1.png"
import car2 from "../images/car2.png"
import car3 from "../images/car3.png"
import img2 from "../images/car3.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  const [showForm, setshowForm] = useState(<Buy />)
  const process = [
    {
      title: "Map Search",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
      icon: "bi bi-map "
    },
    {
      title: "Property Lookup",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
      icon: "bi bi-house "
    },
    {
      title: "Buy / Sell Property",
      desc: "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
      icon: "bi bi-key "
    },
  ]
  const data = [
    {
      address: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      price: 5000,
      sq: 1200,
      bed: 3,
      rating: 4,
      img: "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1293&q=80"
    },
    {
      address: "1574 Sharlo Ave, Baton Rouge, LA 70820, USA",
      price: 8000,
      sq: 1800,
      rating: 4.1,
      bed: 4,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      address: "2528 BOCAGE LAKE DR, Baton Rouge, LA 70809, USA",
      price: 6000,
      sq: 500,
      rating: 3.9,
      bed: 1,
      img: img2
    },
    {
      address: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
      price: 5000,
      sq: 1100,
      rating: 4.3,
      bed: 2,
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      address: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
      price: 8000,
      sq: 1150,
      rating: 4.5,
      bed: 3,
      img: "https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
      address: "Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA",
      price: 10000,
      rating: 3.2,
      sq: 1400,
      bed: 3,
      img: "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1293&q=80"
    }

  ]



  return <>
    {/* carousel */}
    <div id="carouselExampleCaptions position-relative " className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item img-fluid  active" data-bs-interval="1000" id='0'>
          <img className='object-fill' src={car1} />
        </div>
        <div className="carousel-item img-fluid " data-bs-interval="1000" >
          <img className='object-cover' src={car2} />
        </div>
        <div className="carousel-item img-fluid " data-bs-interval="1000" >
          <img className='object-cover' src={car3} />
        </div>
      </div>
    </div>

    <div className='position-absolute  top-50 start-50 translate-middle-x '>
      <h2 className='text-light fs-2'>Find your perfect property</h2>
    </div>
    <div className="container px-3">
      {/* buy / sell / rent  */}
      <div className="row">
        <div className="col-md-6 col-lg-12  ">
          <div className='d-flex justify-content-center gap-2 align-items-center w-100 mt-2  px-4 '>
            <button className='text-bg-success  px-3 py-1 rounded-2 ' onClick={e => setshowForm(<Buy />)}>Buy</button>
            <button className='text-bg-success  px-3 py-1 rounded-2 ' onClick={e => setshowForm(<Sell />)}>sell</button>
            <button className='text-bg-success  px-3 py-1 rounded-2 ' onClick={e => setshowForm(<Rent />)}>rent</button>
          </div>
        </div>
        <motion.div
          initial={{ y: -250, opacity: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          animate={{ opacity: 0.85, y: 25 }}
          className="col-md-6 col-lg-12 h-25   p-2 rounded-2 mt-2 ">
          <hr />
          {showForm}
          <hr />

        </motion.div>
      </div>
      <br />
      {/* text1 */}
      <div className='row my-5'>
        <div className="col-md-6 col-lg-12 d-flex flex-column justify-content-center align-items-center h-50">
          <div>
            <p className='text-bg-success rounded-5  px-4 text-center h-25 py-2 my-3'>process</p>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <p className='fs-3  mt-3'>How it works</p>
            <p>Start working with Landrick that can provide everything you need to generate
              <p className='text-center'>awareness, drive traffic, connect.</p>
            </p>
          </div>
        </div>
      </div>
      {/* map */}
      <div className="row mt-5 px-5">
        {
          process.map(item => <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className='col-md-6 col-lg-4 gap-3 py-3 '>
            <div className='   d-lg-flex justify-content-lg-center justify-content-center flex-lg-column'>
              <p className='fs-4 p-2 h-25  bg-info-subtle d-flex justify-content-center align-items-center  rounded-2'>
                <motion.i
                  whileHover={{ scale: 1.3, }}
                  className={`${item.icon} text-dark   `}></motion.i>
              </p>
              <p className='text-black text-center fs-5 py-2'>{item.title}</p>
              <p className='text-black-50 text-center'>{item.desc}</p>
            </div>
          </motion.div>)
        }
      </div>
      {/* text2 */}
      <div className='row mt-5'>
        <div className="col-md-6 col-lg-12 d-flex flex-column justify-content-center align-items-center h-50">
          <p className='fs-3 text-center fs-1 fw-semibold my-3'>Latest Properties & News</p>

          <div className='d-flex flex-column justify-content-center align-items-center'>
            <p className='text-text-black-50 mb-3'>Start working with <span className='text-success'>Landmark Proprties</span> that can provide everything you need to generate
              <p className='text-center'>awareness, drive traffic, connect.</p>
            </p>
          </div>
        </div>

      </div>
      <div className="row d-lg-flex justify-content-lg-center px-10 ">
        {
          data && data.map(item => <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className='col-md-6 col-lg-4 my-3' key={item.address} >
            <Link to={'/buy'} class="parent d-flex flex-column rounded-4 border border-dark justify-content-center align-content-center">
              <div class="child1 position-relative  ">
                {/* img  */}
                <img className='img-fluid w-100 rounded-4 h-100 object-fit-cover    ' src={item.img} alt={item.img} />
                <div className='top-icons rounded-3 pe-auto  d-flex justify-content-center align-items-center   w-25 position-absolute top-0 end-0  gap-1   p-2'>
                  <i className='rounded-pill   text-light bi-house'></i>
                  <i className='rounded-pill  text-light bi-heart'></i>
                  <i className='rounded-pill  text-light bi-camera '></i>
                </div>
              </div>
              {/* other details */}
              <div class="child2">
                <div className='d-flex justify-content-between p-2'>
                  <div className='d-flex gap-2 '>
                    <i className='bi bi-arrows-fullscreen'></i>
                    <span>{item.sq} <small className='text-dark-emphasis'>sqf</small></span>
                  </div>

                  <div className='d-flex gap-2'>
                    <i class="bi bi-align-start"></i>
                    <span>{item.bed} <small className='text-dark-emphasis'>beds</small></span>
                  </div>

                  <div className='d-flex gap-2'>
                    <i class="bi bi-water"></i>
                    <span>24*7</span>
                  </div>

                </div>
              </div>
              <div class="child3 d-flex justify-content-between align-items-center p-2">
                <div className='d-flex flex-column gap-1'>
                  <span className='text-black-50'>Price</span>
                  <span>{item.price}</span>
                </div>

                <div className='d-flex flex-column gap-1'>
                  <span className='text-black-50'>Rating</span>
                  <span>{item.rating}/5</span>
                </div>
              </div>
            </Link>
          </motion.div>)
        }

      </div>

    </div>
  </>
}

const Buy = () => {
  const price = ["20-30 lakh ", '30-40 lakh ', '40-45 lakh ', '50-60 lakh ', '70-100lakh ']
  const categories = ["Houses", 'Apartments', 'Flat', 'offices', 'townhome']
  const selectCat = <select class="form-select">
    <option selected>Please select your preferred asset</option>
    {
      categories.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>
  const selectPrice = <select class="form-select ">
    <option selected>Open this select menu</option>
    {
      price.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>

  return <>
    <p className='fs-5 fw-semibold'>buy</p>
    <div className=' d-md-block d-lg-flex justify-content-center gap-3  align-items-lg-center h-50  w-100'>
      <div className='d-flex flex-column gap-2'>
        <span className='fs-6  '>Search</span>
        <p>
          <input className='px-2 ' type="text" placeholder='City, Address, Zip:' />
        </p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-6 '>Categories:</span>
        <p>{selectCat}</p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-6'>Price :</span>
        <p className='px-2 '>{selectPrice}</p>
      </div>
    </div>
    <motion.p
      initial={{ x: "100vw", opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <p className='text-end'>

        <button className='text-bg-success p-2'>Submit</button>
      </p>
    </motion.p>
  </>
}
const Sell = () => {
  const price = ["20-30 lakh ", '30-40 lakh ', '40-45 lakh ', '50-60 lakh ', '70-100lakh ']
  const categories = ["Houses", 'Apartments', 'offices', 'townhome']
  const selectCat = <select class="form-select">
    <option selected>Please select your property</option>
    {
      categories.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>
  const selectPrice = <select class="form-select ">
    <option selected>Expected Price</option>
    {
      price.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>

  return <>
    <p className='fs-5 fw-semibold'>sell</p>
    <div className=' d-md-block d-lg-flex justify-content-center  gap-3 align-items-lg-center h-50  w-100'>
      <div className='d-flex flex-column gap-2'>
        <span className='fs-6  '>Search</span>
        <p>
          <input className='px-2 ' type="text" placeholder='City, Address, Zip:' />
        </p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-6 '>Categories:</span>
        <p>{selectCat}</p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-6'>Price :</span>
        <p className='px-2 '>{selectPrice}</p>
      </div>
    </div>
    <motion.div
      initial={{ x: "100vw", opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <p className='text-end'>
        <button className='text-bg-success p-2'>Submit</button>

      </p>
    </motion.div>
  </>
}
const Rent = () => {
  const price = ["2k-5k", '5k-10k', '10k-15k', '15k-20k', '20k-50k']
  const categories = ["Houses", 'Apartments', 'offices', 'townhome']
  const selectCat = <select class="form-select">
    <option selected>Open Rent options</option>
    {
      categories.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>
  const selectPrice = <select class="form-select ">
    <option selected>Expected Rent price</option>
    {
      price.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>

  return <>
    <p className='fs-5 fw-semibold'>rent</p>
    <div className=' d-md-block d-lg-flex justify-content-center gap-3 p-2  align-items-lg-center h-50  w-100'>
      <div className='d-flex flex-column gap-2'>
        <span className='fs-6  '>Search</span>
        <p>
          <input className='px-2 ' type="text" placeholder='City, Address, Zip:' />
        </p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-6 '>Categories:</span>
        <p>{selectCat}</p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-6'>Price :</span>
        <p className='px-2 '>{selectPrice}</p>
      </div>
    </div>
    <motion.div
      initial={{ x: "100vw", opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <p className='text-end'>

        <button className='text-bg-success p-2'>Submit</button>
      </p>
    </motion.div>
  </>
}



export default Home