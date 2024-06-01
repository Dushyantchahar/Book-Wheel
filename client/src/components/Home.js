 import React from "react";
 import'./home.css'

 import{FaPhoneSquareAlt,FaMailBulk,FaTwitterSquare,FaLinkedin,FaInstagramSquare} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
 const Home=()=>{
    const navigate=useNavigate();
    const Handle=()=>{
        navigate('/signup')
    }
    return(
       <div className="container">
<div className="row">
    <div className="col-6">
<div className="quote">
    <div className="row quotetext">
<h4>Your Safe Travel Journey</h4>
<h4>Is Our Main Motto</h4>    
</div>
<div className="row learn">
   <a href="/about">
    <p>"<u><i>Learn More</i></u>"</p>
   </a>
</div>
</div>
    </div>
    <div className="col-6">
        <div className="row buttonstart">
<button onClick={Handle}className="">Get Started</button>
        </div>
        {/* <div className="row social">
       
            <div className="container">
                <div className="row number" >
            <div className="col-3  ">
            <FaPhoneSquareAlt/>
            </div>      
            <div className="col">
               +91 7703835044
            </div>
            </div>
            <div className="row number " >
            <div className="col-3">
            <FaMailBulk/>
            </div>
            <div className="col-3">
            <FaTwitterSquare/>
            </div>
            <div className="col-3">
            <FaLinkedin/>
            </div>
            <div className="col-3">
            <FaInstagramSquare/>
                    </div>
                </div>
                </div>
        
        </div> */}
        </div>
</div>
       </div>
    )
 }

 export default Home;