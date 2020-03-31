//Iteration 2: Greetings
//Create a greetings component with 2 props:
//-> lang: A string that could be ,"de","en","es","fr"
//-> children: A text

/////////////////////////////////////////////////////////
//import React
import React from "react";

// Create a component
const Greetings = props => {
  let idioma = { de: "Hallo", es: "Hola", en: "Hello", fr: "Bonjour" };
  return (
    <div>
      <p>{idioma[props.lang]} {props.children}</p>
    </div>
  );
};

//export component
export default Greetings;
