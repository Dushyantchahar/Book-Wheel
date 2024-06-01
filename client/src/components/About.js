import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import './About.css'
const About = () => {

    return (<>
{/* {{navbar}} */}

        <div className="bg-light">
            <div className="container py-5">
                <div className="row h-100 align-items-center py-5">
                    <div className="col-lg-6">
                        <h1 className="display-4">About us page</h1>
                        <p className="lead text-muted mb-0">At <b>Book Wheel</b>, we strive to provide you with a seamless and convenient bus booking experience. Our platform is designed to simplify the process of finding and reserving bus tickets, ensuring that you can easily plan your journey with just a few clicks.</p>
                        
                    </div>
                    <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
                </div>
            </div>
        </div>

        <div className="bg-white py-5">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">Easy Booking Process</h2>
                        <p className="font-italic text-muted mb-4">We understand the value of your time and have designed our booking process to be quick, simple, and hassle-free. Our intuitive website provides you with a seamless experience, allowing you to search for available buses, compare fares, view schedules, and book your tickets with ease. We prioritize user convenience, ensuring that you can complete your booking within minutes.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">Secure and Reliable</h2>
                        <p className="font-italic text-muted mb-4">our safety and comfort are our top priorities. We work only with licensed and trustworthy bus operators who maintain high safety standards. Additionally, our website is equipped with robust security measures to safeguard your personal information and payment details. You can book with confidence, knowing that your privacy is protected.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-light py-5 ">
            <div className="container py-5 ">
                <div className="row mb-4 ">
                    <div className="col-lg-5 text-center">
                        <h2 className="display-4 font-weight-light text-center">Our team</h2>
                        {/* <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                    </div>
                </div>

                <div className="row text-center">


                    {/* <!-- Team item--> */}
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Dushyant</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                            <div className="">
                                <li className="list-inline-item"><a href="#" className="social-link"><FaFacebook color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaTwitter color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaInstagram color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaLinkedinIn color="blue" /></a></li>
                            </div>
                            
                        </div>
                    </div>
                    {/* <!-- End--> */}

                    {/* <!-- Team item--> */}
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Avneesh Saini</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                            <div className="">
                                <li className="list-inline-item"><a href="#" className="social-link"><FaFacebook color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaTwitter color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaInstagram color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaLinkedinIn color="blue" /></a></li>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End--> */}

                    {/* <!-- Team item--> */}
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Hardik Kumar Gupta</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                            <div className="">
                                <li className="list-inline-item"><a href="#" className="social-link"><FaFacebook color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaTwitter color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaInstagram color="blue" /></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><FaLinkedinIn color="blue" /></a></li>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End--> */}

                </div>
            </div>
        </div>


        <footer className="bg-light pb-5">
            <div className="container text-center">
                <p className="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
            </div>
        </footer>
    </>
    )
}

export default About;