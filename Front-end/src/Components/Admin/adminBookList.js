import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDeleteOutline} from 'react-icons/md';
import axios from 'axios';
import './css/adminBookList.css';
function AdminBookList(props){
    const handleEdit=()=>{
        console.log("Edit");
    }
    const handleDelete=()=>{
        axios.delete(`http://localhost:8080/delete-book/${props.book.bookId}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(window.location.reload())
    }
    return (
        <div className="book-list-wrapper" >
            <div className="book-list-left">
                <span className="book-list-bookId">Book ID:{props.book.bookId}</span>
                <span className="book-list-bookname">{props.book.bookName && props.book.bookName.substring(0,30)}{(props.book.bookName && props.book.bookName.length>30)?<>...</>:<></>}</span>
                <div className="book-list-editors">
                    <div className="book-list-edit" onClick={handleEdit}><FiEdit style={{color:"white"}}/></div>
                    <div className="book-list-delete" onClick={handleDelete}><MdDeleteOutline  style={{color:"white", fontSize:"15pt"}}/></div>
                </div>
                <span className="book-list-author">{props.book.author}</span>
                <br/>
                <span className="book-list-description">{props.book.description && props.book.description.substring(0,500)}{(props.book.description && props.book.description.length>500)?<>...</>:<></>}</span>
            </div>
            <div className="book-list-right">
                <img src={props.book.imageURL} className="book-list-image"></img>
            </div>
            
        </div>
    );
}
export default AdminBookList;