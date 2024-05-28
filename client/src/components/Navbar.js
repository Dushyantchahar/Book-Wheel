import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css'
import { NavLink } from 'react-router-dom';
import logo from "./logo1.jpeg";
import { UserContext } from '../App';
// const Navbar=()=>{
//   const {state,dispatch}=useContext(UserContext);
//   const RenderMenu=(e)=>{
//   // e.preventDefault();

//       if(state){
//         return(
//           <>
//           <li className="nav-item">
//           <NavLink activeClassName="active" aria-current="page" to="/">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="active" to="/about">About</NavLink>
//         </li> 
//         <li className="nav-item">
//           <NavLink activeClassName="active" to="/selectroute">Book Bus</NavLink>
//         </li> 
//         <li className="nav-item">
//           <NavLink activeClassName="active" to="/profile">Profile</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="active" to="/logout">Logout</NavLink>
//         </li>
//           </>
//         )
//       }
//       else if(dispatch){
//         return(
//           <>
//           <li className="nav-item">
//           <NavLink activeClassName="active" aria-current="page" to="/">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="active" to="/login">Login</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="active" to="/signup">Signup</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="active" to="/about">About</NavLink>
//         </li> 
//           </>
//         )
//       }
//   }
//     return (
      
//         <div>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary nav1 navbar navbar-inverse navbar-fixed-top">
//   <div className="container-fluid ">
//     <NavLink className="navbar-brand" to="#">
//      <img src={logo} alt="logo"/></NavLink>
     
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ml-auto ms-auto mb-2 mb-lg-0 "id="linkcontain">
        
//         <RenderMenu/>
        
//       </ul>
      
//     </div>
//   </div>
// </nav>
//         </div>
        
//     )
// }
// export default Navbar;
const Navbar = (e) => {
  const { state } = useContext(UserContext);
  // e.preventDefault();
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink activeClassName="active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/selectroute">Book Bus</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/profile">Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/logout">Logout</NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink activeClassName="active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/signup">Signup</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav1 navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src={logo} alt="logo" />
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ms-auto mb-2 mb-lg-0" id="linkcontain">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
