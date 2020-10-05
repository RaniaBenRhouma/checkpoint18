import  React from 'react';

const RateBar = (props) => {
    const ratenumber = props.rate ;
    const rateCase = function(x) {
        let res = "";

        switch (x) {
            case 1:  res="rate1"; break;
            case 2:  res="rate2"; break;
            case 3:  res="rate3"; break;
            case 4:  res="rate4"; break;
            case 5:  res="rate5"; break;
        
            default: res="rate0"
                break;
        }

        return res ;
    }
      
      
    return ( 

      <div className={rateCase(ratenumber)}>

<a className ="str1" href="#"><i class="fas fa-star"></i></a>
<a className ="str2" href="#"><i class="fas fa-star"></i></a>
<a className ="str3" href="#"><i class="fas fa-star"></i></a>
<a className ="str4" href="#"><i class="fas fa-star"></i></a>
<a className ="str5" href="#"><i class="fas fa-star"></i></a>

      </div>

    );
}
 
export default RateBar;
