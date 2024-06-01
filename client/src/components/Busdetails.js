import React from 'react'
import './Busdetails.css'
import { useNavigate } from 'react-router-dom';

import {FaArrowsAltV,FaCircle} from 'react-icons/fa'
const Busdetails=()=>{
   const navigate=useNavigate();

    const Handle=()=>{
        navigate('/seatselection')
        }
    const Goto1=()=>{
localStorage.setItem("price",1596)
localStorage.setItem("bus","SAMAY SHATABDI TRAVELS PVT LTD")
    }
const Goto2=()=>{
        localStorage.setItem("price",1396)
localStorage.setItem("bus","SAMAY SHATABDI TRAVELS PVT LTD")

            }
const Goto3=()=>{
                localStorage.setItem("price",1696)
localStorage.setItem("bus","RAJ KALPANA TRAVELS PVT.LTD")

                    }
 const Goto4=()=>{
                        localStorage.setItem("price",1796)
localStorage.setItem("bus","RAJ KALPANA TRAVELS PVT.LTD")

                            }
    return(
        <section className='loginboxx'>

        <div class="container2 rounded shadow-sm"> <form action=""> 
    
                               <div class="row"> 
                               <p className='selectbus'>Select Bus</p>
                               <div class="col-md-4 col-12 mb-4"> 
                               <div class="form-control d-flex flex-column"> 
                               <p class="h-blue">FROM</p> 
                               <input class="inputbox" placeholder="City " type="text"
                               value={localStorage.getItem("from")}/> 
                               </div>
                                </div>
                                 <div class="col-md-4 col-12 mb-4"> 
                                 <div class="form-control d-flex flex-column"> 
                                 <p class="h-blue"> TO</p>
                                  <input class="inputbox" placeholder="City " type="text"
                                   value={localStorage.getItem("to")}/>
                                     </div> 
                                     </div> 
                                     <div class="col-md-4 col-12 mb-4"> 
                                     <div class="form-control d-flex flex-column"> 
                                     <p class="h-blue">DATE</p> 
                                     <input class="inputbox " type="text"
                                      value={localStorage.getItem("dep")}/>
                                      </div>
                                       </div>
                                     </div> 
                                     <div class ="mainconntainer">
                                     <div class="row selectborder"> 
                                     <div className='col-1'>
                                     <div className='row dot'>
                                   <FaCircle/>
                                    </div>
                                    <div className='row arrow'>
                                       <FaArrowsAltV/>
                                    </div>
                                    <div className='row dot'>
                                        <FaCircle/>
                                    </div>
                                     </div>
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  17:00</h6>
                                    </div>
                                    <div className='row'>
                                        <em>15:25 hours</em>
                                    </div>
                                    <div className='row'>
                                        <h6>8:25</h6>
                                    </div>
                                     </div>
                                     <div className='col-4'>
                                     <div className='row'>
                                    <h6>  SAMAY SHATABDI TRAVELS PVT LTD</h6>
                                    </div>
                                    <div className='row'>
                                        <em>AC Sleeper</em>
                                    </div>
                                   
                                     </div>
                                     <div className='col-2'>
                                        <h6>RS. 1596</h6>
                                        </div>
                                        <div className='col-2'>
                                        <button onClick={()=> {Handle(); Goto1()}}className='designbuttton'>SELECT</button>
                                        </div>
                                    </div> 

                                    {/* bus 2 */}
                                    <div class="row selectborder"> 
                                     <div className='col-1'>
                                     <div className='row dot'>
                                   <FaCircle/>
                                    </div>
                                    <div className='row arrow'>
                                       <FaArrowsAltV/>
                                    </div>
                                    <div className='row dot'>
                                        <FaCircle/>
                                    </div>
                                     </div>
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  18:30</h6>
                                    </div>
                                    <div className='row'>
                                        <em>14:15 hours</em>
                                    </div>
                                    <div className='row'>
                                        <h6>8:45</h6>
                                    </div>
                                     </div>
                                     <div className='col-4'>
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
                                        <div className='col-2'>
                                        <button onClick={()=> {Handle(); Goto2()}}className='designbuttton'>SELECT</button>
                                        </div>
                                    </div> 
                                    {/* bus 3 */}
                                    <div class="row selectborder"> 
                                     <div className='col-1'>
                                     <div className='row dot'>
                                   <FaCircle/>
                                    </div>
                                    <div className='row arrow'>
                                       <FaArrowsAltV/>
                                    </div>
                                    <div className='row dot'>
                                        <FaCircle/>
                                    </div>
                                     </div>
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  16:00</h6>
                                    </div>
                                    <div className='row'>
                                        <em>16:00 hours</em>
                                    </div>
                                    <div className='row'>
                                        <h6>8:00</h6>
                                    </div>
                                     </div>
                                     <div className='col-4'>
                                     <div className='row'>
                                    <h6>  RAJ KALPANA S PVT.LTD</h6>
                                    </div>
                                    <div className='row'>
                                        <em>AC Sleeper</em>
                                    </div>
                                   
                                     </div>
                                     <div className='col-2'>
                                        <h6>RS. 1696</h6>
                                        </div>
                                        <div className='col-2'>
                                        <button  onClick={()=> {Handle(); Goto3()}} className='designbuttton'>SELECT</button>
                                        </div>
                                    </div> 
                                    {/* bus 4 */}
                                    <div class="row selectborder"> 
                                     <div className='col-1'>
                                     <div className='row dot'>
                                   <FaCircle/>
                                    </div>
                                    <div className='row arrow'>
                                       <FaArrowsAltV/>
                                    </div>
                                    <div className='row dot'>
                                        <FaCircle/>
                                    </div>
                                     </div>
                                     <div className='col-2'>
                                    <div className='row'>
                                    <h6>  18:00</h6>
                                    </div>
                                    <div className='row'>
                                        <em>14:25 hours</em>
                                    </div>
                                    <div className='row'>
                                        <h6>8:25</h6>
                                    </div>
                                     </div>
                                     <div className='col-4'>
                                     <div className='row'>
                                    <h6>  RAJ KALPANA TRAVELS PVT.LTD</h6>
                                    </div>
                                    <div className='row'>
                                        <em>AC Sleeper</em>
                                    </div>
                                   
                                     </div>
                                     <div className='col-2'>
                                        <h6>RS. 1796</h6>
                                        </div>
                                        <div className='col-2'>
                                        <button onClick={()=> {Handle(); Goto4()}} className='designbuttton'>SELECT</button>
                                        </div>
                                    </div> 
                                    </div>
{/*                     
                                          <a href="/busdetails">    
                                <div  class="btn btn-primary form-control text-center">BOOK BUS</div>
                                </a> */}
                               </form> </div>
        </section >

    )
}
export default Busdetails;