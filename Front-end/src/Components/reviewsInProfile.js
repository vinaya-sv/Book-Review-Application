import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/reviewsInProfile.css';
import axios from 'axios';
function ReviewsInProfile(props){
    const [bookImage, setBookImage]=useState("Ha");
    useEffect(()=>{
        axios.get(`http://localhost:8080/book/${props.review.bookId}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{setBookImage(res.data.imageURL)})
    },[])
    const date = new Date(props.review.reviewDate);  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    return(
        <div className="profile-public-review-outer">
            <div className="profile-public-review-left">
                <div className="profile-public-review-book-image-container">
                    <img src={bookImage} className="profile-public-review-book-image"></img>
                </div>
            </div>
            <div className="profile-public-review-right">
                <span className="profile-public-review-rating"></span>
                <Link to={`/profile/${props.review.userName}`}><span className="profile-public-review-username">{props.review.userName}</span></Link>

                <span className="profile-public-review-date">{props.review.reviewDate} </span>
                <span className="profile-public-review-review">{props.review.reviewComment}</span>
                <br/>
                <br/>
            </div>
            
        </div>
    );
}
export default ReviewsInProfile;