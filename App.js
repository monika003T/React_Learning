import React from "react";
import ReactDOM from "react-dom/client";


//create element its a core react 
   
    const heading= React.createElement("h1",{id:"heading"},"HELLO WORLD FROM REACT")
    //we need a root to render its, react dom is used 
    const root=ReactDOM.createRoot(document.getElementById('root'))
    //render heading
    root.render(heading);
    console.log(heading)


// how to create nested element
/* 
    <div id="parent">

         <div id='child'>
             <h1>"I'm nested element"</h1>
         </div>

    </div>
 */

    const parent=React.createElement('div',{id:"parent"},
             React.createElement('div',{id:'child'},
                React.createElement('h1',{id:"nested"},"I'm Nested Element")
            ));
     console.log(parent)
    root.render(parent)