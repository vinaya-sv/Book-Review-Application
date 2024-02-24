import axios from 'axios';
import './css/feedback.css';
import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './sidebar';
function Feedback(){
    const [feedback, setFeedback]=useState("");
    const handleClick=()=>{
            axios.post("http://localhost:8080/addUserFeedback",{
                "name":"",
                "email":JSON.parse(localStorage.getItem("value")),
                "feedback":feedback
            },{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            }).then(window.location.reload()).catch(console.log("Error occured"));
    }
    return(
        <div className="feedback-outer"> 
            <NavBar/>
            <SideBar/>
            <p className="provide-feedback-text">Please provide your valuable feedback</p><br/>
            <textarea className="feedback-textarea"  type="text" onChange={(e)=>setFeedback(e.target.value)}></textarea>
            <br/>
            <button className="add-feed-back" onClick={handleClick}>Add feedback</button>
        </div>
    );
}
export default Feedback;