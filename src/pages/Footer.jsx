import React from 'react'
import "../css//footer.css"
const Footer = () => {
    return <>
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#"> Post your property</a></li>
                                <li><a href="#">Article</a></li>
                                <li><a href="#">Site map</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Landmark Properties</h3>
                            <p>Find your ideal property: Buy or rent hassle-free. Discover a range of options. Your dream space is a click away. Start your property journey today!</p>
                        </div>
                        <div className="col item social d-flex gap-2">
                            <i className='bi bi-meta'></i>
                            <i className='bi bi-instagram'></i>
                            <i className='bi bi-twitter'></i>
                            <i className='bi bi-whatsapp'></i>
                        </div>
                    </div>
                    <p className="copyright">Landmark Properties © 2023</p>
                </div>
            </footer>
        </div>

    </>
}

export default Footer