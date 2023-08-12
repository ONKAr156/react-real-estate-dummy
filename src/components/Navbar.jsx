import React from 'react'
// import logo from "../assets/house1.png"
import "../css/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

    return <>
            <nav className="navbar sticky-lg-top  text-bg-light  bg-opacity-75   navbar-expand-md  border-bottom navbar-padding">
            <div className="container-fluid">
                
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="d-flex mx-auto gap-2">
                    {/* <img src={logo} alt="" className="skillhub-logo img-fluid" /> */}
                    <Link to={"/"} className="navbar-brand fs-4" >LandMark</Link>
                </div>

            <div className="offcanvas offcanvas-start w-75" id="offcanvasNavbar">
                <div className="offcanvas-header off-bg">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        <div className="d-flex align-items-center gap-2">
                            {/* <img src={logo} alt="" className="skillhub-logo-offcanvas img-fluid"/> */}
                            <Link to={"/"} className="navbar-brand fs-3 text-light" >LandMark</Link>
                        </div>
                    </h5>
                
                <button type="button" className="btn fs-2" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-circle text-light"></i></button>
                </div>

                <div className="offcanvas-body">
                <div>
                    <ul className="navbar-nav justify-content-center flex-grow-1">
                        <li className="nav-item">
                            <Link to={"/buy"} className="nav-link fw-semibold fs-6 active" aria-current="page" >
                                <i className="bi bi-house-add d-md-none"></i>
                                <span className="ms-2">Buy</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/sell"} className="nav-link fw-semibold fs-6" >
                                <i className="bi bi-houses d-md-none"></i>
                                <span className="ms-2 fw-semibold">Sell</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link fw-semibold fs-6" >
                                <i className="bi bi-buildings d-md-none"></i>
                                <span className="ms-2">About</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link fw-semibold fs-6" >
                                <i className="bi bi-person-lines-fill d-md-none"></i>
                                <span className="ms-2">Contact us</span>
                            </Link>
                        </li>
                        

                        <hr className="my-0" />
                        
                        <li className="nav-item d-md-none">
                            <a className="nav-link fs-5" aria-current="page" >
                                <i className="bi bi-person-circle"></i>
                                <span className="ms-2">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item d-md-none">
                            <a className="nav-link fs-5 " aria-current="page" >
                                <i className="bi bi-gear"></i>
                                <span className="ms-2">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="dropdown d-none d-sm-flex">
                <button className="btn dropdown-toggle d-flex align-items-center gap-2 profile-margin" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    <div>
                        <i className="bi bi-person-circle fs-3 text-success"></i>
                    </div>
                   ONKAR
                </button>
                <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item border-bottom" href="#">
                        <i className="bi bi-person-lines-fill"></i>
                        <span className="mx-1">Profile</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item border-bottom" href="#">
                        <i className="bi bi-gear"></i>
                        <span className="mx-1">Settings</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <i className="bi bi-escape"></i>
                        <span className="mx-1">Logout</span>
                    </a>
                </li>
                </ul>
            </div>

            </div>
        </nav>
    </>
}

export default Navbar