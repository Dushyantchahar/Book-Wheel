import React ,{useRef}from "react";
import './confirm.css'
import { Checkmark } from 'react-checkmark'
// import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'



export default function Confirm(){
    const navigate=useNavigate();
    const Handle=()=>{
    navigate('/profile')
// localStorage.clear();
    
         }
   
return(
    <section className='loginboxx'>
   
    <div className="container confirmbox">
        <div className="row">
            <div className="row head">
                <h1>Your booking has been confirmed</h1>
                
            </div>
            <div className="row">
            <Checkmark size='xxLarge' />
            </div>
            <div className="row">
                <h4>Thank you for your booking</h4>
            </div>
            <div className="row">
                <h6>You will receive an booking confirmation email with booking details</h6>
            </div>
            <div>
                <button onClick={Handle} class="btn btn-primary">See Profile</button>
        </div>
    </div>
   
    </div>
 </section>  
)
}