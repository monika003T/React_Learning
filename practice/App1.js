import React from "react";
import ReactDOM from "react-dom/client";


// react element is an object => when render it is an html element 
/* const heading=React.createElement(
    'h1',
    {id:"heading"}, 
    "React Monika" */

// const root= ReactDOM.createRoot(document.getElementById('root'));




// using jsx
//react element
// const heading=(<h1 className="head" tabIndex={5}>Namaste Monika </h1>);


//functional component
const Title=()=>{
   return <h1 className="Heads" tabIndex={5}> Multiple component</h1>
}
//functional component
//component composition
const HeadingComponent=()=>(
 
   <div id="container">
   
    {title}
    
    
    <h1 className="headingf">Monika I'm functional component</h1>
    </div>
);

//heading component
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);

