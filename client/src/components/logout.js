import React, { useEffect,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


const Logout = () => {
    const {state,dispatch} = useContext(UserContext);

    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.clear();
        fetch('http://localhost:8000/logout',{
            method:"GET",
            headers:{
                Accept:"aplication/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
        dispatch({type:"USER",payload:false})
        navigate('/login',{replace:true});
        if(res.status===200){
            const error = new Error(res.error);
            throw error;
        }
    }).catch((err)=>{
        console.log(err);
    })

    }, []); // Passing an empty dependency array to useEffect ensures it only runs once when the component mounts
    
    return (
        <>
            <p>Logout page</p>
        </>
    );
}

export default Logout;
