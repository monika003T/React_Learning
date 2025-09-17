import { useState } from "react";
import { CDN_logo } from "../utils/constants";

const Header=()=>{

    const [btnname, setbtnname]=useState("login")
    return(
        <div className="header">
        <div className="logo">
            <img className="logoimage" src={CDN_logo}/>
        </div>
        <div className="navitems">
            <ul>
                <li>Profile</li>
                <li>Home</li>
                <li>Cart</li>
                <li>About us</li>
                <li>Feedback</li>
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