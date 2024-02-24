import React, { useContext } from 'react';
import { MyContext } from './context/context';
import './css/sidebar.css';
import { Link } from 'react-router-dom';
function SideBar(){
    const {isSideBarEnabled}=useContext(MyContext);
    return (
        <div class="sidebar-shadow" style={{backgroundColor:(isSideBarEnabled)?"rgba(255,255,255,0.7)":"rgba(0,0,0,0)",display:(isSideBarEnabled)?"block":"none"}}>
        
            <div className="sidebar"  style={{width:(isSideBarEnabled)?"35%":"0%"}} >
                <Link to={`/profile/${localStorage.getItem("username")}`}  style={{textDecoration:"none"}}><div className="sidebar-content">Profile</div></Link>
                <Link to="/home" style={{textDecoration:"none"}}><div className="sidebar-content">Home</div></Link>
                <Link to="/wishlist" style={{textDecoration:"none"}}><div className="sidebar-content">Wishlist</div></Link>
                {/* <div className="sidebar-content">Track Reading</div> */}
                <Link to="/feedback" style={{textDecoration:"none"}}><div className="sidebar-content">Feedback</div></Link>
                <Link to="/" style={{textDecoration:"none"}}><div className="sidebar-content" onClick={()=>localStorage.clear()}>Log out</div></Link>
            </div>

        </div>
            
    );
}
export default SideBar;


