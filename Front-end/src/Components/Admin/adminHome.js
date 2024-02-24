import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/adminHome.css';
import AdminBookList from './adminBookList';
import {AiOutlinePlus} from 'react-icons/ai';
function AdminHome(){
    const [books, setBooks]=useState([]);
    const [sortBy,setSortby]=useState("bookName/asc");
    const [addBookVisibility, changeAddBookVisibility]=useState(false);
    
    useEffect(()=>{
        if(!localStorage.getItem("sortBy"))
            localStorage.setItem("sortBy","bookName/asc");
        console.log(localStorage.getItem("token"));
        axios.get(`http://localhost:8080/book/sort/${localStorage.getItem("sortBy")}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{setBooks(res.data)})
        
    },[])
        const [bookData, setBookData]=useState({});
    const handleAddBook=()=>{
        axios.post("http://localhost:8080/book",bookData,
        {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "cache-control":'no-cache'
            }
        })
        window.location.reload();
    }
    const handleChange=(e)=>{
                e.preventDefault();
                const {id,value}=e.target;
                setBookData({...bookData, [id]:value});
                console.log(bookData);
            }
    return(
        <div className="admin-home-wrapper">
            <div className="background-darker" style={{display:(addBookVisibility)?"flex":"none"}}>
                <div className="add-book-wrapper">
                    <span className="add-book-label">Enter the book name </span>
                    <input id="bookName" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
                    <span className="add-book-label">Enter the author name </span>
                    <input id="author" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
                    <span className="add-book-label">Enter the book description </span>
                    <input id="description" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
                    <span className="add-book-label">Enter the publish date </span>
                    <input id="date" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
                    <span className="add-book-label">Enter the image URL </span>
                    <input id="imageURL" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
                    <input className="add-book-button" type="button" value="Add the Book" onClick={handleAddBook}></input>
             
                </div>
            </div>
            <div className="add-new-book-button" onClick={()=>changeAddBookVisibility(!addBookVisibility)}><AiOutlinePlus style={{transform:(addBookVisibility)?"rotate(-45deg)":"",transition:"0.5s"}}/></div>
            <br/>
            {books.map((book)=><AdminBookList book={book}/>)}
        </div>
    );
}
export default AdminHome;

// import React, { useState } from 'react';
// import axios from 'axios';
// import MainPage from '../mainpage';
// import './css/adminHome.css';
// import NavBar from '../NavBar';
// function AdminHome(){
//     const [bookData, setBookData]=useState({});
//     const handleAddBook=()=>{
//         axios.post("http://localhost:8080/book",bookData,
//         {
//             headers: {
//                 "Authorization": `Bearer ${localStorage.getItem('token')}`,
//                 "cache-control":'no-cache'
//             }
//         })
//         window.location.reload();
//     }
//     const handleChange=(e)=>{
//         e.preventDefault();
//         const {id,value}=e.target;
//         setBookData({...bookData, [id]:value});
//         console.log(bookData);
//     }
//     // "bookName": "It ends with us",
//     //     "author": "Coolen Hoover",
//     //     "imageURL": "https://res.cloudinary.com/dl3stdqmp/image/upload/v1689863705/it-ends-with-us_l2ztb8.jpg",
//     //     "description": "lorem sjioa jdsjd hds oaos c oeah d isdifha dg a gie gojdijs dgjoiaejd fd",
//     //     "date": "2023-07-23",
//     //     "book_rating": 0
//     return (
//         <div style={{height:"100vh",width:"100%",overflow:"hidden"}}>
//             <div className="add-book">
//             <div className="add-book-title-container"><span className="add-book-title">Add new book</span></div>
//             <span className="add-book-label" placeholder="hai">Enter the book name </span>
//                 <input id="bookName" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
//             <span className="add-book-label">Enter the author name </span>
//                 <input id="author" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
//             <span className="add-book-label">Enter the book description </span>
//                 <input id="description" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
//             <span className="add-book-label">Enter the publish date </span>
//                 <input id="date" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
//             <span className="add-book-label">Enter the image URL </span>
//                 <input id="imageURL" className="add-book-input" type="text" style={{color:"black"}} onChange={handleChange}></input>
//             <br/>
//             <br/>
//                 <input className="add-book-button" type="button" value="Add the Book" onClick={handleAddBook}></input>
//             {/* <div className="add-book-title-container"><span className="add-book-title">Add new book</span></div> */}
//             </div>

//             <div style={{width:"70%", display:"inline-block", float:"right"}}>
//             <NavBar/>
//             <MainPage/>
//             </div>
//         </div>
//     );
// }
// export default AdminHome;