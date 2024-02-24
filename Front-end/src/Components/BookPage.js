import React, { useContext, useEffect, useState } from 'react';
import NavBar from './NavBar';
import './css/bookpage.css';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import {BiCaretRight} from 'react-icons/bi';
import img from './Assets/2states.png';
import PublicReview from './publicreview';
import SideBar from './sidebar';
import { MyContext } from './context/context';
import StarRating from './starrating';
import axios from 'axios';
function BookPage(){
    const {selectedBookData}=useContext(MyContext);
    const ratings=(rating)=>{
        const stars=[];
        
        for(let i=0;i<rating;i++){
            stars.push(<AiFillStar key={i}/>);
        }
        
        for(let i=0;i<5-rating;i++){
            stars.push(<AiOutlineStar key={i}/>);

        }
        return <>{stars}</>
    }
    const [book,setBook]=useState(JSON.parse(localStorage.getItem("book")))
    const [bookReview, setBookReview]=useState([]);
    const [addReview, setAddReview]=useState("");
    const [isBookPresentInWishlist, setPresenceOfBook]=useState("false");
    useEffect(()=>{
        // console.log(localStorage.getItem("book"));
        console.log(selectedBookData);
        try{

            axios.get(`http://localhost:8080/review/${book.bookId}`,{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res=>setBookReview(res.data))
        }
        catch(err){
            console.log("Error in getting review");
        }
        },[])
    const handlePostReview=()=>{
        try{

            axios.post(
                //first parameter
                "http://localhost:8080/review",
                
                //second parameter
                {
                    "reviewComment":addReview,
                    "emailId":localStorage.getItem("value"),
                    "bookId":book.bookId
                },
                
                //third parameter
                {
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
                ).catch(()=>{
                    
                })
                window.location.reload();
            }
            catch(err){
                console.log("Error in adding review");
            }
            }
            const handleAddToWishlist=()=>{
                const userEmail=JSON.parse(localStorage.getItem("value"));
                axios.post(`http://localhost:8080/wishlist/${userEmail}/${book.bookId}`,null,{
                    headers:{
                        "Authorization":`Bearer ${localStorage.getItem("token")}`
                    }
        }).then(()=>{alert("Added to wishlist")})
    }
    return(
        <div className="bookdetail-wrapper">
        <NavBar/>
        <SideBar />
        <div className="bookdetail-left">
            <div className="bookdetail-image-container">
                <img src={book.imageURL} style={{height:"100%",width:"100%",objectFit:"contain",margin:"auto"}}/>
                </div>
            <div className="add-to-wishlist" onClick={handleAddToWishlist}>Add to wishlist</div>
            <br/>
            {/* <div className="add-to-tracker">Add to reading tracker</div> */}
        </div>

        <div className="bookdetail-right">
            <span className="bookdetail-title">{book.bookName}</span>
            <span className="bookdetail-author">{book.author}</span>
            <span className="bookdetail-ratings">{ratings(book.bookRating)}</span>
            <span className="bookdetail-publish-date">Published on {book.date}</span>
            <div className="bookdetail-description">{book.description}</div>
            <div className="bookdetail-genres">
                {/* {book.genre.map(g=><div className="bookdetail-genre-filter"><span className="bookdetail-genre-filter-text">{g}</span></div>)} */}
            </div>
            <div className="rating-reviews">
            {/* <p className="rating-reviews-label">Ratings & Reviews</p> */}
            <span className="add-rating-label">Rate this book</span>
            <div className="star-rating-component"><StarRating  style={{zIndex:-1}} className="add-star-rating"/></div>
            <br/>
            <span className="add-review-label">Add a review</span>
            <div className="review-component">
                <div className="add-review">
                    <textarea className="review-enter" onChange={(e)=>setAddReview(e.target.value)} maxLength={5000}></textarea>
                    <button className="add-review-button" onClick={handlePostReview}><BiCaretRight/></button>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
            <span className="add-rating-label">Community Reviews</span>
            
            <div className="public-reviews">
                {bookReview.map((review)=><PublicReview username={review.username} review={review}/>)}
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </div>
    );
}
export default BookPage;