import React, { useState } from "react";

const AddMovie = (props) => {
    const [state,setState]= useState({title:'',url:'',descrip:'',rate:0});

     const handleUrlChange= function(e) {
        setState({url: e.target.value});
     };
      const handleTitleChange = function(e) {
        setState({title: e.target.value});
     };
     const handleDescriptionChange= function(e) {
        setState({descrip: e.target.value});
     };
     const handleRateChange= function(e) {
        setState({rate:e.target.value});
     };
     
     
    return ( 
        <div className="AddingMovie">

             <img src="https://images.cdn4.stockunlimited.net/preview1300/cinema-background-with-movie-objects_1823382.jpg" alt =" " style={{ width: "100%" ,
  height:"100%" }} />

            <div className="formAdd">
                <input  placeholder=" URL " type="text" onChange={handleUrlChange} />      
                <input  placeholder=" Title " type="text" onChange={handleTitleChange}/>
                <textarea placeholder=" Description " type="text" onChange={handleDescriptionChange}></textarea>
                <input min="1" max="5" placeholder=" Rate " type="number" onChange={handleRateChange}/>
                <button onClick={props.funcAddMov({t:state.title,urll:state.url,d:state.descrip,r:state.rate})}> Add Movie </button>
            </div>
        </div>
    );
}

export default AddMovie;