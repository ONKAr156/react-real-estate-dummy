import React, { useState } from 'react'
import "../css/home.css"
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




  return <>
    <div id="carouselExampleCaptions position-relative " className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item img-fluid  active" data-bs-interval="2000">
          <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div className="carousel-item img-fluid " data-bs-interval="2000">
          <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1268&q=80" />
        </div>
        <div className="carousel-item img-fluid " data-bs-interval="2000">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        </div>
      </div>
    </div>

    <div className='position-absolute  top-50 start-50 translate-middle-x '>
      <h2 className='text-light'>Find your perfect property</h2>
    </div>
    <div className="container">
      {/* buy / sell / rent  */}
      <div className="row">
        <div className="col-md-6 col-lg-12 ">
          <div className='d-flex justify-content-center gap-2 align-items-center w-100 mt-2 '>
            <button className='text-bg-success p-3 w-25' onClick={e => setshowForm(<Buy/>)}>Buy</button>
            <button className='text-bg-success p-3 w-25' onClick={e => setshowForm(<Sell />)}>sell</button>
            <button className='text-bg-success p-3 w-25' onClick={e => setshowForm(<Rent />)}>rent</button>
          </div>
        </div>
        <div className="col-md-6 col-lg-12 h-25 text-bg-info-subtle rounded-2 mt-2 text-bg-dark">
          {/* {
            buyData == true ? buy() : false
          }
          {
            sellData == false ? sell() : true
          }
          {
            rentData == false ? rent() : true
          } */}
          {showForm}
        </div>
      </div>
      {/* text1 */}
      <div className='row mt-5'>
        <div className="col-md-6 col-lg-12 d-flex flex-column justify-content-center align-items-center h-50">
          <div>
            <p className='text-bg-success rounded-5  `mx-auto` text-center h-25 p-2'>process</p>
            <p className='fs-3'>How it works</p>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <p>Start working with Landrick that can provide everything you need to generate
              <p className='text-center'>awareness, drive traffic, connect.</p>
            </p>
          </div>
        </div>
      </div>
      {/* map */}
      <div className="row mt-5">
        {
          process.map(item => <div className='col-md-6 col-lg-4  '>
            <div className='   d-lg-flex justify-content-lg-center justify-content-center flex-lg-column'>
              <p className='fs-4 p-2 h-25  bg-info-subtle d-flex justify-content-center align-items-center  rounded-2'>
                <i className={`${item.icon} text-dark   `}></i>
              </p>
              <p className='text-black-50 text-center'>{item.title}</p>
              <p className='text-black-50 text-center'>{item.desc}</p>
            </div>
          </div>)
        }
      </div>
      {/* text2 */}
      <div className='row mt-5'>
        <div className="col-md-6 col-lg-12 d-flex flex-column justify-content-center align-items-center h-50">
          <p className='fs-3 text-center fs-1 fw-semibold'>Latest Blog & News</p>

          <div className='d-flex flex-column justify-content-center align-items-center'>
            <p className='text-text-black-50'>Start working with <span className='text-success'>Landmark Proprties</span> that can provide everything you need to generate
              <p className='text-center'>awareness, drive traffic, connect.</p>
            </p>
          </div>
        </div>
      </div>

    </div>
  </>
}

const Buy = () => {
  const price = ["2k-5k", '5k-10k', '10k-15k', '15k-20k', '20k-50k']
  const categories = ["Houses", 'Apartments', 'offices', 'townhome']
  const selectCat = <select class="form-select">
    <option selected>Open this select menu</option>
    {
      categories.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>
  const selectPrice = <select class="form-select">
    <option selected>Open this select menu</option>
    {
      price.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>

  return <>
    <h5>buy</h5>
    <div className=' d-flex justify-content-between align-items-center h-50  w-100'>
      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Search</span>
        <p>
          <input type="text" placeholder='City, Address, Zip:' />
        </p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Categories:</span>
        <p>{selectCat}</p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Price :</span>
        <p>{selectPrice}</p>
      </div>
    </div>
    <div>
      <button className='text-bg-success p-2'>Submit</button>
    </div>
  </>
}
const Sell = () => {
  const price = ["2k-5k", '5k-10k', '10k-15k', '15k-20k', '20k-50k']
  const categories = ["Houses", 'Apartments', 'offices', 'townhome']
  const selectCat = <select class="form-select">
    <option selected>Open this select menu</option>
    {
      categories.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>
  const selectPrice = <select class="form-select">
    <option selected>Open this select menu</option>
    {
      price.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>

  return <>
    <h5>sell</h5>
    <div className=' d-flex justify-content-between align-items-center h-50  w-100'>
      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Search</span>
        <p>
          <input type="text" placeholder='City, Address, Zip:' />
        </p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Categories:</span>
        <p>{selectCat}</p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Price :</span>
        <p>{selectPrice}</p>
      </div>
    </div>
    <div>
      <button className='text-bg-success p-2'>Submit</button>
    </div>
  </>
}
const Rent = () => {
  const price = ["2k-5k", '5k-10k', '10k-15k', '15k-20k', '20k-50k']
  const categories = ["Houses", 'Apartments', 'offices', 'townhome']
  const selectCat = <select class="form-select">
    <option selected>Open this select menu</option>
    {
      categories.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>
  const selectPrice = <select class="form-select">
    <option selected>Open this select menu</option>
    {
      price.map(item => <option key={item.id}>
        {item}
      </option>)
    }
  </select>

  return <>
    <h5>rent</h5>
    <div className=' d-flex justify-content-between align-items-center h-50  w-100'>
      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Search</span>
        <p>
          <input type="text" placeholder='City, Address, Zip:' />
        </p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Categories:</span>
        <p>{selectCat}</p>
      </div>

      <div className='d-flex flex-column gap-2'>
        <span className='fs-4'>Price :</span>
        <p>{selectPrice}</p>
      </div>
    </div>
    <div>
      <button className='text-bg-success p-2'>Submit</button>
    </div>
  </>
}


export default Home