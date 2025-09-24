import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorPage from "./components/Error.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Restaurant_url } from "./utils/constants.js";




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
        <Outlet />
        </div>
    )
}


const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<Applayout />,
    children:[ 
    {
        path:"/",
        element:<Body />

    } ,   
    {
    path:"/about",
    element:<About />,
    },

    {
    path:"/contact",
    element:<Contact />,
    },
    {
    path:"/restaurent/:id",
    element:<RestaurantMenu />,
    },
],

   errorElement:<ErrorPage />,
    },
    
    
])

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);