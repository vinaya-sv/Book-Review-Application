import React, { useEffect } from 'react';
import './css/publicreview.css';
import { Link } from 'react-router-dom';
function PublicReview(props){
    console.log(props.review)
    const date = new Date(props.review.reviewDate);  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    return(
        <div className="public-review-outer">
            <div className="public-review-left">
                <div className="public-review-user-profile"></div>
            </div>
            <div className="public-review-right">
                <span className="public-review-rating"></span>
                <Link to={`/profile/${props.review.userName}`}><span className="public-review-username">{props.review.userName}</span></Link>

                <span className="public-review-date">{props.review.reviewDate} </span>
                <span className="public-review-review">{props.review.reviewComment}</span>
                <br/>
                <br/>
            </div>
            
        </div>
    );
}
export default PublicReview;