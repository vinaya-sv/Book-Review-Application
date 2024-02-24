import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import SideBar from './sidebar';
import './css/profile.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import BookList from './booklist';
import PublicReview from './publicreview';
import ReviewsInProfile from './reviewsInProfile';
function ProfilePage(){
    const location=useLocation();
    const path=location.pathname;
    const [username,setUsername]=useState(decodeURI(path.split("/")[2]));
    const [favouriteBooks,setFavouriteBooks]=useState([]);
    const [profileReviews,setProfileReviews]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/book/wishlist${path}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{setFavouriteBooks(res.data)})

        axios.get(`http://localhost:8080/review${path}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>{setProfileReviews(res.data)})
    },[]);
    return (
        <>
            <NavBar searchBarVisibility={false}/>
            <SideBar/>
        <div className="profile-page-outer">
            <div className="personal-profile-data">
                <div className="personal-profile-left">
                    <div className="profile-image"><img style ={{height:"100%",width:"100%"}} src="https://res.cloudinary.com/dl3stdqmp/image/upload/v1690193597/3135715_tlpsml.png"></img></div>
                </div>
                <div className="personal-profile-right">
                    <span className="profile-username">{username}</span>
                    <span className="profile-place">Coimbatore</span>
                    <p className="profile-bio">I have been reading since I was able to hold books open. My reading preferences today are even more diverse than my business career was. In 2019, I decided to start sharing my thoughts on the books I read in the hopes that others will discover books that excite and appeal to them. I have been a NetGalley reviewer since late June 2019 and have posted more than 300 reviews there. Additionally, in October 2020, I started submitting some of my mystery, suspense, and thriller (including most sub-genres) reviews to Mystery and Suspense Magazine and have had more than 150 reviews published there.</p>
                </div>
            </div>
            <div className="profile-main-page">
                <br/>
                <span className="profile-side-label">{username}'s favourite books!</span>
                <div className="profile-favourite-books">
                    <br/>
                <Link to="/book">
                    {favouriteBooks.map((book)=><BookList key={book.bookName} book={book} /*onClick={()=>selectBook(book)}*//>)}
                </Link>
                </div>
                <br/>

                <br/>
                <span className="profile-side-label">{username}'s reviews!</span>
                <br/>
                <br/>
                
                {profileReviews.map((review)=><ReviewsInProfile username={review.username} review={review}/>)}
                <br/>
                <br/>
            </div>
        </div>
        </>
    );
}
export default ProfilePage;