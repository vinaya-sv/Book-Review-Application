import React, { useContext, useState } from 'react';
import './css/sign_in.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login ,logout} from './features/reducer';
import Home from './home';
import { MyContext } from './context/context';
import video from './Assets/background.mp4';
import axios from 'axios';
function SignIn(props){
    const dispatch=useDispatch();
    const {value, updateValue, toggleSideBar}=useContext(MyContext);
    const [trainData]=useState(props.train);
    const navigate=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [authError,setAuthError]=useState("");


    const handleSubmit = async(e) => {
        try{
            axios.post("http://localhost:8080/api/v1/auth/authenticate",{
                "email":username,
                "password":password
            })
            .then(res=>{
                console.log(res.data);
                localStorage.setItem("token",res.data.token);
                updateValue(username);
                navigate("/home");
                axios.get(`http://localhost:8080/getname/${username}`,{headers:{"Authorization":`Bearer ${res.data.token}`}}).then((res)=>localStorage.setItem("username",res.data));
            })
            .catch(function (error) {
                if(error && error.response && error.response.status!=403)
                    navigate("/home");
                else
                    setAuthError("Account doesn't exist");
              })
        }
        catch(error){
            console.log("Error"+error.response.status);
        }
    }

    return(
        <div className="sign-in-outer">
                <video className="videoTag" style={{width:"150%",height:"110vh",objectFit:"cover",position:"absolute",overflow:"hidden"}} autoPlay loop muted >
                <source src={video} type="video/mp4"/>
                </video>
                <div className="white-space" style={{height:"100vh",width:"100%",backgroundColor:"rgba(208, 150, 151, 0.7)",position:"relative"}}></div>
        <div className="sign-in-card">

                <form>
                <h1 className="sign-in-label">Sign In</h1>
                <div className="input-field-area">
                    <input className="input-field" value={username} onChange={e=>setusername(e.target.value)} type="text" placeholder="Enter your email ID" required autoComplete='off'></input>
                    <input className="input-field" value={password} onChange={e=>setpassword(e.target.value)} type="password" placeholder="Enter your password" required autoComplete='off'></input>
                </div>
                <input type="button" onClick={()=>{handleSubmit();toggleSideBar("false");dispatch(login({username,password}));}}
                /*onClick={handleSubmit}*/ className="submit-button" value="Submit"></input>
                <Link to="/signup"><p className="text">Don't have an account? Sign up <br/><p style={{color:'rgb(137, 72, 74)'}}>{authError}</p></p>
                <p className="text"></p>
                </Link>
                
                </form>
            </div>
         </div>
    ); 
}
export default SignIn;