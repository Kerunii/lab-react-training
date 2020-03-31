//Iteration 3: Random
//Create a Random component with 2 props:
//-> min: A number
//-> max: A number

/////////////////////////////////////////////////////////
//import React
import React from "react";

// Create a component
const Random = props => {
	const random = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
	return (
		<p>Random vaule between {props.min} and {props.max} => {random}</p>
	)
}
//export component
export default Random;