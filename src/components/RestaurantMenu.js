import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Restaurant_url  } from "../utils/constants";
const RestaurantMenu=()=>{
    const [resinfo, setresinfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
}
const fetchMenu=async()=>{
    const data= await fetch({RestaurantMenu}+id)
    setresinfo(json.data)
    console.log(json)
}
if(resinfo===null) return <Shimmer />
return(
    <div className="menu">
        <h1></h1>
    </div>
)

export default RestaurantMenu
