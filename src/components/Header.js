import { useEffect, useState } from "react";
import { CDN_logo } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnname, setbtnname]=useState("login")
    console.log("Headeer Rendered");

    useEffect(()=>{
        console.log("useeffect called")
    },[btnname])
    return(
        <div className="header">
        <div className="logo">
            <img className="logoimage" src={CDN_logo}/>
        </div>
        <div className="navitems">
            <ul>
                <li>Profile</li>
                <li><Link to="/">Home </Link></li>
                <li>Cart</li>
                <li><Link to="/contact">Contact us </Link></li>
                <li><Link to="/about">About us</Link></li>
                <button className="login"
                    onClick={()=>{
                        btnname==="login"
                        ?setbtnname('logout')
                        :setbtnname("login")
                        
                    }}>
                        {btnname}
                </button>
            </ul>
        </div>
       </div>
    )
}
export default Header;