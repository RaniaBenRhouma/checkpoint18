import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import AddMovie from "./components/AddMovie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      MoviesList : [
        {id:1,title:"Changattam" , posterUrl:"https://i.ytimg.com/vi/DFFimTgJjBU/maxresdefault.jpg", description:"ChangathamSuper Hit Action Movie Malayalam| Changattam| Malayalam Full Movies | Malayalam Movie online release" , rate:2},
        {id:2,title:"Bad Boys" , posterUrl:"https://www.impulsonegocios.com/wp-content/uploads/2020/02/Bad-boys-for-life-7.jpg", description:"Bad Boys para siempre”: Los policías rebeldes regresan a pura acción" , rate:4},
        {id:3,title:"The Pacifier" , posterUrl:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/The_Pacifier_1.jpg", description:"That reunion of The Pacifier crew for which you’ve been pining is about to happen. Adam Shankman, who directed Vin Diesel in that family comedy, will call the shots for the actor once more in the action/comedy film The Machine."  , rate:5} 
      ],
      leng:3,

      filterRMovie:"",

      filterTMovie:""



      
     }
  }


 updateleng = function() {
    this.setState( {leng:this.state.leng + 1} )
   }

  AddMov = function(x) {
   /* this.updateleng();
    this.setState({ MoviesList:[...this.state.MoviesList,{id:this.state.leng,title:x.t,posterUrl:x.urll,description:x.d,rate:x.r}]
  }); 
  */
   }
    
   findRMovies =(x)=>{
    this.setState({
      filterRMovie:x})
    }

   findTMovies =(x)=>{
    this.setState({
      filterTMovie:x})
    }
   
  render() { 
    return (   <div className="App">

    <Header findRMovies={this.findRMovies} findTMovies={this.findTMovies} />

    <div className="MovieCards">
        <Card MovieListToCard={this.state.MoviesList} filterRMovie={this.state.filterRMovie} filterTMovie={this.state.filterTMovie} />
    </div>

    <AddMovie funcAddMov={this.AddMov} />



 
</div>
);
  }
}
 
export default App;
