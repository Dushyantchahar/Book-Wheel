
    import React ,{useContext, useState}from 'react';
    import './Signup.css'
    import { useNavigate } from 'react-router-dom';
    import { UserContext } from '../App';
    const Login=()=> {

      const {state,dispatch} = useContext(UserContext);

        const navigate=useNavigate();
        const[email,setEmail]=useState('');
        const[password,setPassword]=useState('');

        const loginUser= async(e)=>{
            e.preventDefault();
            let errors = document.querySelectorAll(".error");
            for(let error of errors){
              error.style.display = "none";
            }
              if(email.trim() === ""){
                document.getElementById("email-error").innerHTML = "Please enter a email";
                document.getElementById("email-error").style.display = "block";
                e.preventDefault();
                return false;
                
             }
             if(password.trim() === ""){
              document.getElementById("password-error").innerHTML = "Please enter a password";
              document.getElementById("password-error").style.display = "block";
              e.preventDefault();              
              return false;
           }
          
        const res   = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
       
        if(!res.ok){
            window.alert("Invalid Credentials");

        }
        else
        {
            dispatch({type:"USER",payload:true})
            window.alert("Login Successful");
            navigate("/selectroute");
        }
localStorage.setItem("email",email);

      
      }
      return (
        <section className='loginboxx'>
  <div className="container  w-50 mt-4 Loginbox ">
    <div className="row d-flex  justify-content-between w-20 align-items-center h-80">
    <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <p class="text-center h2 fw-bold mb-3 mx-1 mx-md-1 mt-1 ">Login</p>

        <form method='POST'>
         
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
          <label className="form-label" for="email">Email address</label>
            <input type="email" id="email" name="email" className="form-control form-control-lg"
              placeholder="Enter a valid email address" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
            <p class="error" id="email-error"></p>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-3">
          <label className="form-label" for="password">Password</label>
            <input type="password" id="passowrd" name="password"className="form-control form-control-lg"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
               <p class="error" id="password-error"></p>
          </div>
          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg loginbutton"
              onClick={loginUser}
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
     
    </div>
    <div/>
  </div>
  
</section>
      );
    }
    
    

export default Login;