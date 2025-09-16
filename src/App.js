import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";




/* 
header
    logo, navitems
body
    searchbar, restaurant container, cart
footer
    copyright, links , contacts */

    // header




const Applayout=()=>{
    return(
        <div className="app">
        <Header />
        <Body />
        </div>
    )
}




const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>)