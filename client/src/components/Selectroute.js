import { useEffect ,useState} from "react";
import React from "react";
import "./routeSelection.css"
import "./Signup.css"
    import { useNavigate } from 'react-router-dom';

const Selectroute=()=>{

   const navigate=useNavigate();


const[cityfrom,setCityfrom]=useState("")
const[cityto,setCityto]=useState("")
const[depart,setDepart]=useState("")
// const[ret,setRet]=useState("")
const Handledate=async(e)=>{
   e.preventDefault();
   let errors = document.querySelectorAll(".error");
   for(let error of errors){
     error.style.display = "none";
   }
   if(cityfrom.trim() === ""){
      document.getElementById("cityfrom-error").innerHTML = "Please enter city name";
      document.getElementById("cityfrom-error").style.display = "block";
      e.preventDefault();
      return false;
      
   }
   if(cityto.trim() === ""){
      document.getElementById("cityto-error").innerHTML = "Please enter city name";
      document.getElementById("cityto-error").style.display = "block";
      e.preventDefault();
      return false;
      
   }
   if(cityfrom.trim()===cityto.trim()){
      document.getElementById("cityto-error").innerHTML = "Please select different city name";
      document.getElementById("cityto-error").style.display = "block";
      e.preventDefault();
      return false;
   }
   if(depart.trim() === ""){
      document.getElementById("date-error").innerHTML = "Please enter date";
      document.getElementById("date-error").style.display = "block";
      e.preventDefault();
      return false;
      
   }
   const d= new Date();
   const d1=new Date(depart);
// console.log(d);
// console.log(d1);
     if(d1.getDate() < d.getDate()|| d1.getMonth()<d.getMonth()){
       document.getElementById("date-error").innerHTML = "Please enter valid date";
       document.getElementById("date-error").style.display = "block";
       e.preventDefault();
       return false;
       
    }
// }
// const Handle=()=>{
  
   //  console.log(depart);
localStorage.setItem("from",cityfrom)
localStorage.setItem("to",cityto)
localStorage.setItem("dep",depart)
// localStorage.setItem("ret",ret)
// }
// const Goto=()=>{
navigate('/busdetails')


}

   return(
      <section className='loginboxx'>
    <div class="container2 rounded  upshadow-sm"> <form action=""> 
    <div class="row"> 
    <h1>WELCOME </h1>
    <h4>Let's Search For Bus</h4>
                           </div> 
                           <div class="row"> 
                           
                           <div class="col-md-6 col-12 mb-4"> 
                           <div class="form-control d-flex flex-column"> 
                           <p class="h-blue">FROM</p> 
                           <input  list="cities" class="inputbox" placeholder="City " type="text" value={cityfrom}
                           onChange={(e)=>setCityfrom(e.target.value)}/> 
                           <datalist id="cities">
                              <option value="Ambala"/>
                              <option value="Bhiwani"/>
                              <option value="Charkhi Dadri"/>	
                              <option value="Faridabad"/>
                              <option value="Fatehabad"/>	
                              <option value="Gurugram"/>
                              <option value="Hisar	"/>
                              <option value="Jhajjar"/>
                              <option value="Jind"/>	
                              <option value="Kaithal"/>	
                              <option value="Karnal"/>	
                              <option value="Kurukshetra"/>	
                              <option value="Mahendragarh"/>	
                              <option value="Nuh"/>	
                              <option value="Palwal"/>	
                              <option value="Panchkula"/>	
                              <option value="Panipat"/>	
                              <option value="Rewari"/>	
                              <option value="Rohtak"/>	
                              <option value="Sirsa"/>	
                              <option value="Sonipat"/>	
                              <option value="Yamunanagar"/>
                              </datalist>
                           </div>
                           <p class="error" id="cityfrom-error"></p>

                            </div>
                             <div class="col-md-6 col-12 mb-4"> 
                             <div class="form-control d-flex flex-column"> 
                             <p class="h-blue"> TO</p>
                              <input list="cities" class="inputbox" placeholder="City" type="text" value={cityto}
                              onChange={(e)=>setCityto(e.target.value)}/>
                              <datalist id="cities">
                              <option value="Ambala"/>
                              <option value="Bhiwani"/>
                              <option value="Charkhi Dadri"/>	
                              <option value="Faridabad"/>
                              <option value="Fatehabad"/>	
                              <option value="Gurugram"/>
                              <option value="Hisar	"/>
                              <option value="Jhajjar"/>
                              <option value="Jind"/>	
                              <option value="Kaithal"/>	
                              <option value="Karnal"/>	
                              <option value="Kurukshetra"/>	
                              <option value="Mahendragarh"/>	
                              <option value="Nuh"/>	
                              <option value="Palwal"/>	
                              <option value="Panchkula"/>	
                              <option value="Panipat"/>	
                              <option value="Rewari"/>	
                              <option value="Rohtak"/>	
                              <option value="Sirsa"/>	
                              <option value="Sonipat"/>	
                              <option value="Yamunanagar"/>
                              </datalist>
                                 </div> 
                                 <p class="error" id="cityto-error"></p>

                                 </div> 
                                 </div> 
                                 <div class=" datemove row"> 
                                 <div class="col-md-6 col-12 mb-4"> 
                                 <div class="form-control d-flex flex-column"> 
                                 <p class="h-blue">DATE</p> 
                                 <input class="inputbox" type="date" value={depart} 
                                 onChange={(e)=>setDepart(e.target.value)}/>
                                  </div>
                                  <p class="error" id="date-error"></p>

                                   </div>
                                  
                                          </div> 
                                          <div class="row"> 
                                          </div>
                                        
                            <button onClick={ Handledate} class="btn btn-primary form-control text-center">SEARCH BUS</button>
                            {/* <button onClick={()=> { Handledate();Handle();Goto()}} class="btn btn-primary form-control text-center">SEARCH BUS</button> */}
                           
                           </form> 
                        </div>
                        </section>
   )
}


export default Selectroute;