import React from "react";
import ReactDOM from "react-dom/client";
// react element is an object => when render it is an html element 
const heading=React.createElement('h1',{id:"heading"}, "namaste Monika")
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)