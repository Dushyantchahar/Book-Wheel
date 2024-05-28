import React,{useState,useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import './Signup.css'
// import '.'
import emailjs from '@emailjs/browser'

const Signup=()=> {
    const navigate =useNavigate();
    const [user ,setUser]=useState({
        name:"", email:"", password:"",mobile:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name= e.target.name;
        value=e.target.value;

        setUser({ ...user, [name]:value})
    }

var code=''
  // const form = useRef();
  // const codegene=()=>{
  var val = Math.floor(1000 + Math.random() * 9000);
 code=val;
console.log(code);
// }
const message="Thank you for using the TRAVEL BUDDY."+" "+"Your Confirmation code is "+code;

const form = useRef();
    const Email=async(e)=>{

        // e.preventdefault();
        // emailjs.sendForm('service_7jfb7pv','template_j0gxs',form.current,'95bb5dkHPzVZmp_I')
        emailjs.sendForm('service_7jfb7pv','template_j0gxljs',form.current,'95bb5dkHPzVZmp_Ip')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // navigate('/confirm')
    
    }
    const PostData= async(e)=>{
      let errors = document.querySelectorAll(".error");
            for(let error of errors){
              error.style.display = "none";
            }
            if(user.name.trim() === ""){
              document.getElementById("name-error").innerHTML = "Please enter your name";
              document.getElementById("name-error").style.display = "block";
              // e.preventDefault();
              return false;
           }
            // console.log(/\S+@\S+\.\S+/.test(user.email))
            if ( /\S+@\S+\.\S+/.test(user.email)===false ) {
              document.getElementById("email-error").innerHTML = "Please enter valid email";
              document.getElementById("email-error").style.display = "block";
              // e.preventDefault();
              return false;
            }
          
              if(user.email.trim() === ""){
                document.getElementById("email-error").innerHTML = "Please enter your email";
                document.getElementById("email-error").style.display = "block";
                // e.preventDefault();
                return false;
             }
             if(user.password.trim() === ""){
              document.getElementById("password-error").innerHTML = "Please enter password";
              document.getElementById("password-error").style.display = "block";
              // e.preventDefault();              
              return false;
           }
           if(user.mobile.trim().length <10||user.mobile.trim().length >10){
            document.getElementById("mobile-error").innerHTML = "Please enter valid number";
            document.getElementById("mobile-error").style.display = "block";
            // e.preventDefault();
            return false;
         }
           if(user.mobile.trim() === ""){
            console.log(user.mobile.trim().length);
            document.getElementById("mobile-error").innerHTML = "Please enter phone number";
            document.getElementById("mobile-error").style.display = "block";
            // e.preventDefault();
            return false;
         }
       
         let foo = window.prompt('Type your confirmation code');
         var x=Number(foo);
    
        //  if(x==77){
          if(x==code){
        // e.preventDefault();
        const{name, email,password, mobile}=user;

        try{
 const res =await fetch("/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"

    },
    body:JSON.stringify({
        name, email, password, mobile
    })
 });

if(!res.ok){

    window.alert(" This Email Already Registered");
    console.log("Invalid Registration");
}
 else{

    window.alert(" Registration Sucess");
    console.log(" Registration Sucess");
navigate("/login");
 }
}
catch(err){

    console.log(err.message);
}
// } 
}
else{
  window.alert("check your email carefully")
  // window.location.reload()

}
}

    
  return (
   
    <section class="" >
  <div class="container w-50 mt-4 ">
    <div class="row d-flex signbox justify-content-center align-items-center h-80 ">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-2">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1  sign">

                <p class="text-center h2 fw-bold mb-3 mx-1 mx-md-1 mt-1">Sign up</p>

                <form  method="POST"class="mx-1 mx-md-4"ref={form}>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="name">Your Name</label>
                      <input type="text" id="name" name="name" class="form-control " required
                       value={user.name}
                                   onChange={handleInputs} />
            <p class="error" id="name-error"></p>

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="email">Your Email</label>
                      <input type="email" id="email" name='email' class="form-control"
                       value={user.email}
                                    onChange={handleInputs} />
            <p class="error" id="email-error"></p>

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="password">Password</label>
                      <input type="password" id="password" name='password' class="form-control"
                      value={user.password}
                     onChange={handleInputs} />
            <p class="error" id="password-error"></p>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="mobile">Phone</label>
                      <input type="tel" id="mobile" name="mobile" class="form-control"
                       value={user.mobile}
                                   onChange={handleInputs} />
            <p class="error" id="mobile-error"></p>
                    </div>
                  </div>
                 
                  <div>
                    <input type='hidden' name='message' value={message}>
                    </input>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-1 mb-lg-4">
                    <button type="button" className="btn signupbutton btn-primary btn-lg"  onClick={()=> {Email(); PostData()}}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Signup;