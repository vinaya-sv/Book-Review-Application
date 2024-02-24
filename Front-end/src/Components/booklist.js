import React, { useContext } from 'react';
import './css/booklist.css';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import { MyContext } from './context/context';
function BookList(props){
    const {selectBook}=useContext(MyContext);
    const ratings=()=>{
        const stars=[];
        
        for(let i=0;i<props.book.bookRating;i++){
            stars.push(<AiFillStar key={i}/>);
        }
        
        for(let i=0;i<5-props.book.bookRating;i++){
            stars.push(<AiOutlineStar key={i}/>);

        }
        return <>{stars}</>
    }
    return(
        <div className="book-list" onClick={()=>{selectBook(props.book);console.log("sent");localStorage.setItem("book",JSON.stringify(props.book))}} >
            <div class="book-image-div">
                <img src={props.book.imageURL} className="book-image"/>
                </div>
            <div class="book-info-div">
                <span className="book-title">{props.book.bookName}</span>
                <span className="book-author">by {props.book.author}</span>
                <div className="book-rating">{ratings()}</div>
            </div>
        </div>
    );
}
export default BookList;