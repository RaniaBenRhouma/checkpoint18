import React from "react";
import SearchBar from "./SearchBar";
const Header = (props) => {
    return ( 
        <div className="headerbar">
            <SearchBar findRMovies={props.findRMovies} findTMovies={props.findTMovies} />           
        </div>
     );
}
 
export default Header;