import React, { useState } from 'react';
import './css/menubar.css';
function MenuBar(props){
    const [genres,setGenre]=useState(["love","horror","romance","mystery","fantasy","sci-fi","biography",]);
    // const [sortby,setSortby]=useState(["Name : A - Z","Name: Z - A","Highest Ratings","Lowest Ratings", "Published recently","Published earlier"]);

    return(
        <div className="menubar">
            <div className="genres">
                <span className="filter-and-sort-text" style={{color:"#6f5353"}}>Filter by </span>
                {genres.map((genre)=><li className="genre-filter"><span className="genre-filter-text">{genre}</span></li>)}
            </div>
            <div className="sort-by-field">
                <span className="filter-and-sort-text" style={{color:"#3c3c3c"}}>Sort by </span>
                <li className="sortby-filter" onClick={()=>props.sortBy("bookName/asc")}><span className="sortby-filter-text">Name : A - Z</span></li>
                <li className="sortby-filter" onClick={()=>props.sortBy("bookName/desc")}><span className="sortby-filter-text">Name : Z - A</span></li>
                <li className="sortby-filter" onClick={()=>props.sortBy("bookRating/desc")}><span className="sortby-filter-text">Highest Ratings</span></li>
                <li className="sortby-filter" onClick={()=>props.sortBy("bookRating/asc")}><span className="sortby-filter-text">Lowest Ratings</span></li>
                <li className="sortby-filter" onClick={()=>props.sortBy("date/desc")}><span className="sortby-filter-text">Published Recently</span></li>
                <li className="sortby-filter" onClick={()=>props.sortBy("date/asc")}><span className="sortby-filter-text">Published Earlier</span></li>
            </div>
            </div>
    );
}
export default MenuBar;