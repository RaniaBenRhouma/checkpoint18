import React from 'react';

const SearchBar = (props) => {
  

    return ( 
   <div className="searchingBar">
     <input className="movieNameInput" placeholder=" enter movie name " type="text" onChange={(e)=>{props.findTMovies(e.target.value)}}/>
     <input className="movieRateInput" placeholder=" enter rate " type="text" onChange={(e)=>{props.findRMovies(e.target.value)}} />
   </div>

     );
}
 
export default SearchBar;