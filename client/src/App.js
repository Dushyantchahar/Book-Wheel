// import logo from './logo.svg';
import React,{createContext, useReducer} from 'react'
import Navbar from './components/Navbar'
import {Route ,Routes} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Selectroute from './components/Selectroute'
import Busdetails from './components/Busdetails';
import Seatselection from './components/seatselection'
import Confirm from './components/Confirm'
import Paymenttab from './components/Paymenttab'
import Profile from './components/Profile'
import './App.css';
import ErrorPage from './components/ErrorPage'
import Logout from './components/logout'
import { initialState,reducer } from './reducer/UseReducer'
export const UserContext = createContext();

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);

  return (
    
   <>
  <UserContext.Provider value={{state,dispatch}}>
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/profile" element={<Profile/>} />
   <Route path="/contact" element={<Contact/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/signup" element={<Signup/>} />
   <Route path="/selectroute" element={<Selectroute/>} />
   <Route path="/busdetails" element={<Busdetails/>} />
   <Route path="/seatselection" element={<Seatselection/>} />
   <Route path="/paymenttab" element={<Paymenttab/>} />
   <Route path="/confirm" element={<Confirm/>} />
   <Route path="/logout" element={<Logout/>} />
   

   <Route element={<ErrorPage/>}/>
  </Routes>
  </UserContext.Provider>
   </>
  );
}

export default App;
