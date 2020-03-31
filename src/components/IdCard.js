//Iteration 1 : IdCard
//Create a IdCard component with 6 props:
//-> lastName: A string
//-> firstName: A string
//-> gender: A string, 'male' or 'female'
//-> height: A number
//-> birth: A date
//-> picture: A string

/////////////////////////////////////////////////////////
//import React
import React from "react";

// Create a component
const IdCard = props => {
  let birthday = JSON.stringify(props.birth).split("");
  return (
    <div className="id-card">
      <div>
        <img src={props.picture} alt={props.firstName} />
      </div>
      <div className="card-data">
        <span><b>First name:</b> {props.firstName} </span>
        <span><b>Last name:</b>  {props.lastName} </span>
        <span><b>Gender:</b>  {props.gender} </span>
        <span><b>Height:</b>  {props.height} </span>
        <span><b>Birth:</b>  {birthday.splice(1, 10)} </span>
      </div>
    </div>
  );
};

//export component
export default IdCard;
