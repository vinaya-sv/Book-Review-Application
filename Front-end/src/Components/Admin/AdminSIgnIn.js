import React, { useContext, useState } from 'react';
import './css/admin_sign_in.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login ,logout} from '../features/reducer';
import { MyContext } from '../context/context';
import video from '../Assets/background.mp4';
import axios from 'axios';
function AdminSignIn(){
    const dispatch=useDispatch();
    const {value, updateValue, toggleSideBar}=useContext(MyContext);
    
    const navigate=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [authError,setAuthError]=useState("");


    const handleSubmit = async(e) => {
        navigate("/admin-home");
        // try{
        //     axios.post("http://localhost:8080/api/v1/auth/authenticate",{
        //         "email":username,
        //         "password":password
        //     })
        //     .then(res=>{
        //         console.log(res.data);
        //         localStorage.setItem("token",res.data.token);
        //     })
        //     .catch(function (error) {
        //         // if (error.response) {
        //         //   console.log(error.response.data);
        //         //   console.log(error.response.status);
        //         //   console.log(error.response.headers);
        //         // }
        //         // console.log(error.response.status);
        //         if(error && error.response && error.response.status!=403)
        //             navigate("/admin-home");
        //         else
        //             setAuthError("Account doesn't exist");
        //       })
        // }
        // catch(error){
        //     console.log("Error"+error.response.status);
        // }
    }

    return(
        <div className="admin-sign-in-outer">
                <video className="admin-videoTag" style={{width:"150%",height:"110vh",objectFit:"cover",position:"absolute",overflow:"hidden"}} autoPlay loop muted >
                <source src={video} type="video/mp4"/>
                </video>
                <div className="admin-white-space" style={{height:"100vh",width:"100%",backgroundColor:"rgba(100, 100, 100, 0.8)",position:"relative"}}></div>
        <div className="admin-sign-in-card">

                <form>
                <h1 className="admin-sign-in-label">Sign In</h1>
                <div className="admin-input-field-area">
                    <input className="admin-input-field" value={username} onChange={e=>setusername(e.target.value)} type="text" placeholder="Enter your username" required autoComplete='off'></input>
                    <input className="admin-input-field" value={password} onChange={e=>setpassword(e.target.value)} type="password" placeholder="Enter your password" required autoComplete='off'></input>
                </div>
                <input type="button" onClick={()=>{handleSubmit();toggleSideBar("false");}}
                /*onClick={handleSubmit}*/ className="admin-submit-button" value="Submit"></input>
                <p style={{color:'rgb(137, 72, 74)'}}>{authError}</p>
                
                </form>
            </div>
         </div>
    ); 
}
export default AdminSignIn;