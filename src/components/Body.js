import Rescart from "./Rescart";
import reslist from "../utils/mockdata";
import { useState } from "react";

const Body=()=>{
    

    // state variable
    let [listofRestaurant, setListofRestaurant]=useState(reslist)
    return(
    <div className="body">
        <div className="filter">
           <button className="filter-btn"
            onClick={()=>{
            const  filtered=listofRestaurant.filter((res)=>res.info.avgRating>4.5
           );
           setListofRestaurant(filtered)
        }}>
           Top Rated Restaurnt </button>
        </div>
        <div className="restuarant_container">
            {
                listofRestaurant.map((restaurant)=>(
                    <Rescart key={restaurant.info.id} resData={restaurant} />
                ))
            }
           
            
        </div>
        
    </div>
    );
} ;
export default Body;