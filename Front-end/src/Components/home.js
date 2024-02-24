import React, { useState } from 'react';
import MainPage from './mainpage';
import NavBar from './NavBar';
import SignIn from './sign_in';
import { Route, Routes } from 'react-router-dom';
import BookPage from './BookPage';
function Home(){
    const [isSideBarEnabled, setSideBar]=useState(false);
    const [searchtext, setSearchtext]=useState("");

    const handleProfileClick=()=>{
        setSideBar(!isSideBarEnabled);
    }

    return(
        <div class="home-page" style={{width:"100%",overflow:"hidden"}}>
        <NavBar method={handleProfileClick} handleSearch={(searchText)=>setSearchtext(searchText)} searchBarVisibility={true}/>
        <MainPage value={isSideBarEnabled} method={handleProfileClick} searchText={searchtext}/>
        
        </div>
    );
}
export default Home;