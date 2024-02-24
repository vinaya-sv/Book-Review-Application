import React, { useContext, useEffect, useState } from 'react';
import './css/mainpage.css';
import BookList from './booklist';
import img1 from'./Assets/2states.png';
import img2 from'./Assets/The chronicles of narnia.jpg';
import img3 from'./Assets/harry potter.jpg';
import img4 from'./Assets/the lord of the rings.jpg';
import { Link } from 'react-router-dom';
import MenuBar from './menubar';
import SideBar from './sidebar';
import { MyContext } from './context/context';
import axios from 'axios';


function MainPage(props){
    const {selectBook}=useContext(MyContext);
    const [books, setBooks]=useState([]);
    const [sortBy,setSortby]=useState("bookName/asc");
    const [searchBarContent, setSearchBarContent]=useState("");
    const handleSortBy=(field)=>{
        console.log(field);
        setSortby(field);
        localStorage.setItem("sortBy",field);
        window.location.reload();
    }
    useEffect(()=>{
        if(!localStorage.getItem("sortBy"))
            localStorage.setItem("sortBy","bookName/asc");
        console.log(localStorage.getItem("token"));
        axios.get((props.searchText.length>0)?`http://localhost:8080/book/`:`http://localhost:8080/book/sort/${localStorage.getItem("sortBy")}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{setBooks(res.data)})
        
    },[])
    
    return(
        <div className="mainpage">
            {/* Search field */}
            <SideBar/>
            <MenuBar sortBy={(field)=>handleSortBy(field)} setSearchBarContent={(content)=>setSearchBarContent(content)}/>
            <div class="book-lists">
                <Link to="/book">
                    {books.map((book)=> (book.bookName.toLowerCase().includes(props.searchText.toLowerCase()) || book.author.toLowerCase().includes(props.searchText.toLowerCase())) 
                    && <BookList key={book.bookName} book={book} /*onClick={()=>selectBook(book)}*//>)}
                    </Link>
            </div>
            
            
                
        </div>
    );
}
export default MainPage;