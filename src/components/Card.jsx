import React from "react";
import RateBar from "./RateBar";

const Card = (props) => {

    return ( 
      <>
      { props.MovieListToCard.filter(el=> props.filterRMovie? `${el.rate}`=== props.filterRMovie : el.rate <=5).filter(el=>el.title.toUpperCase().includes(props.filterTMovie.toUpperCase())).map(element => (
        
    <div  key= {element.id} style={{ width:330 ,height:450, backgroundColor: "black",border : "solid 1px white" ,textAlign: "center"}}>
    <img src={element.posterUrl} alt=" " style={{ width:330 , height:200}}/>
    <h2 className="movieTitle">{element.title}</h2>
    <p className="movieDescrip">{element.description}</p>

    <RateBar rate={element.rate} />

    </div>
            ))}
      </>
    );
  }


export default Card;