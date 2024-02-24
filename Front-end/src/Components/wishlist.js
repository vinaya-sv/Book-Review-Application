import React, { useState } from 'react';
import './css/wishlist.css';

import img1 from'./Assets/2states.png';
import img2 from'./Assets/The chronicles of narnia.jpg';
import img3 from'./Assets/harry potter.jpg';
import img4 from'./Assets/the lord of the rings.jpg';
import NavBar from './NavBar.js';
import MenuBar from './menubar.js';
import { Link } from 'react-router-dom';
import BookList from './booklist';
import SideBar from './sidebar';
import { useEffect } from 'react';
import axios from 'axios';
function WishList(){
    const [books, setBooks]=useState([]);
    const [sortBy,setSortby]=useState("bookName/asc");
    const handleSortBy=(field)=>{
        console.log(field);
        setSortby(field);
        localStorage.setItem("sortBy",field);
        window.location.reload();
    }
    useEffect(()=>{
        if(!localStorage.getItem("sortBy"))
            localStorage.setItem("sortBy","bookName/asc");
            const userEmail=JSON.parse(localStorage.getItem("value"));
            axios.get(`http://localhost:8080/book/wishlist/${userEmail}`,{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res=>{setBooks(res.data)})
        },[]);
    return(
        <div className="wishlist-container">
            <NavBar/>
            <SideBar/>
            <MenuBar  sortBy={(field)=>handleSortBy(field)}/>
            <span className="wishlist-label">My WishList</span>
            <div class="book-lists" style={{height:"70vh"}}>
                <Link to="/book">
                    {books.map((book)=><BookList key={book.name} book={book} />)}
                </Link>
            </div>=
        </div>
    );
}
export default WishList;