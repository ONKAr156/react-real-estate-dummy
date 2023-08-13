import React from 'react'
import "../css/buy.css"
import img2 from "../images/car3.jpg"
const Buy = () => {
  /* 
   All the data is converted into a single Array for code Optimization 
   if anything is to be change just few clicks and ur go to go 

   Upcoming changes: Data will be called from Api 
  */
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
      img:img2
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
    },
    {
      address: "3723 SANDBAR DR, Addis, LA 70710, USA",
      price: 4000,
      rating: 2.8,
      bed: 2,
      sq: 800,
      img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1278&q=80"

    },
    {
      address: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      price: 7500,
      rating: 3.9,
      bed: 3,
      sq: 1600,
      img: "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1293&q=80"

    },
    {
      address: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
      price: 6000,
      rating: 4.1,
      bed: 2,
      sq: 1000,
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

    },

  ]
  return <>
{/* heading background image --------------------------------------------------------------------               */}
    <div className='heading_buy position-relative'>
      <img className='w-100 h-100   img-fluid object-fit-cover   '
        src="https://plus.unsplash.com/premium_photo-1661659232931-1d4e811b28c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
      <p className='position-absolute top-50 end-50 text-light fs-2 fw-semibold'>Find Your Dream Home</p>
    </div>
{/*  main content------------------------------------------------------------------------ */}
    <div className="container  ">
      {/* search bar */}
      <div className="row mb-4">
        <div className="col-sm-12 col-md-6 offset-md-3 d-flex gap-5 flex-column">
          <div className='rounded  d-flex justify-content-center mt-2'>
            <input className='p-1 w-75 rounded-start-3 border-success' type="text" placeholder='City, Address, Zip:' />
            <button className='p-2 text-bg-success w-25 rounded-end-3  '>search</button>
          </div>
          <div className=''>
            <h2 className='fw-semibold'>Featured Properties</h2>
            <p className='text-black-50'>Start working with <span className='fw-semibold text-danger'>Landmark Properties</span> that can provide everything you need to <p>generate awareness, drive traffic, connect.</p></p>
          </div>
        </div>
      </div>
{/*  house map  data ------------------------------------------------------------------------ */}
      <div className="row d-lg-flex justify-content-lg-center ">
        {
          data && data.map(item => <div className='col-md-6 col-lg-4 my-3' key={item.address}>
            <div class="parent d-flex flex-column rounded-4 border border-dark justify-content-center align-content-center">
              <div class="child1 position-relative  ">
                {/* img  */}
                <img className='img-fluid w-100 rounded-4 h-100 object-fit-cover    ' src={item.img} alt={item.img} />
                <div className='top-icons rounded-3 pe-auto p-2 d-flex justify-content-center align-items-center   w-25 position-absolute top-0 end-0  gap-1   p-2'>
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
            </div>
          </div>)
        }

      </div>
      <p className='text-center my-2  '>View more <i class="bi bi-chevron-right"></i></p>

    </div>

  </>
}

export default Buy