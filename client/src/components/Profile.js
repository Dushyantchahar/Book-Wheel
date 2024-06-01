import React, { useEffect, useState,  } from 'react';
// import axios from 'axios';
import "./Profile.css"
import { Link, useNavigate } from 'react-router-dom';
import {FaArrowsAltV,FaCircle} from 'react-icons/fa'

// // import Loader from "../GeneralScreens/Loader";
// // import { AuthContext } from '../../Context/AuthContext';
// // import { FiArrowLeft } from 'react-icons/fi'
// // import { ClickAwayListener } from '@mui/material';


const Profile = () => {
    const [userData,setUserData]=useState({});
useEffect(() => {

    const callAboutPage = async ()=>{
    try {
    
    const res = await fetch('http://localhost:8000/profile', {
    method: "GET",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    },
    credentials: "include"
    });
    const data = await res.json();
    console.log(data);
    setUserData(data);
    if(!res.status===200){
        const error =new Error(res.error);
        throw error;
    }
}catch(err){
    console.log(err);
    
}
    }
    callAboutPage();
  }, []);
 

    return (
        <>
            {
                // loading ? <Loader /> :
                    <div className="Inclusive_profile_page">
                
                        <div className="profile-top-wrap">

                            <span>
                                Account Information
                            </span>
                        </div>
                        <ul>
                        <li>
                                <span>
                                   User Id
                                </span>
                                <div>
                                    {userData._id}
                                    {/* Avneesh */}
                                </div>
                            </li>
                            <li>
                                <span>
                                    Username
                                </span>
                                <div>
                                    {userData.name}
                                    {/* Avneesh */}
                                </div>
                            </li>
                            <li>
                                <span>E-Mail</span>
                                <div>
                                    {userData.email}
                                    {/* avneesh@gmail.com */}
                                </div>

                            </li>
                            <li>
                                <span>Contact</span>
                                <div>
                                    {userData.mobile}
                                    {/* 9876556778 */}
                                </div>

                            </li>
                            {/* <li>

                                <span> Account Created Date </span>
                                <div>
                                    {editDate(user.createdAt)}
                                </div>
                            </li> */}

                        </ul>
                        <div className="profile-bottom-wrap">

                           <span>
                              Booking History
                            </span>
                        </div>
                        <div class="row selectborder"> 
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  FROM</h6>
                                    </div>
                                    <div className='row'>
                                        {/* <input value={localStorage.getItem("from")}></input> */}
                                        <em>{localStorage.getItem("from")}</em>

                                    </div>
                                    
                                     </div>
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  TO</h6>
                                    </div>
                                    <div className='row'>
                                        <em>{localStorage.getItem("to")}</em>
                                    </div>
                                     </div>
                                     <div className='col-4'>
                                     <div className='row'>
                                    <h6> {localStorage.getItem("bus")}</h6>
                                    </div>
                                    {/* <div className='row'>
                                        <em>AC Sleeper</em>
                                    </div> */}
                                   
                                     </div>
                                     <div className='col-2'>
                                        <h6>RS.{localStorage.getItem("price")}</h6>
                                        </div>
                                        <div className='col-2'>
                                        <h6>{localStorage.getItem("dep")}</h6>
                                        </div>
                                    </div> 
                                    {/* <div class="row selectborder"> 
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  FROM</h6>
                                    </div>
                                    <div className='row'>
                                        <em>Karnal</em>
                                    </div>
                                    
                                     </div>
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  TO</h6>
                                    </div>
                                    <div className='row'>
                                        <em>Ambala</em>
                                    </div>
                                     </div>
                                     <div className='col-6'>
                                     <div className='row'>
                                    <h6>  SAMAY SHATABDI TRAVELS PVT LTD</h6>
                                    </div>
                                    <div className='row'>
                                        <em>AC Sleeper</em>
                                    </div>
                                   
                                     </div>
                                     <div className='col-2'>
                                        <h6>RS. 1396</h6>
                                        </div>
                                    </div>  */}
                        <div className='btns_wrap'>
                            <button className='profileEditBtn'>
                                <Link to="/">
                                    Back to Home
                                </Link>
                            </button>
                        </div>
                    </div>
            }

        </>

    )
}

export default Profile;
