import Rescart from "./Rescart";
import reslist from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body=()=>{
    

    // state variable
    let [listofRestaurant, setListofRestaurant]=useState([])
   
    useEffect(()=>{
        fetchData();
    }, []);

    

const fetchData = async () => {
  const data = await fetch(
    'https://developers.zomato.com/api/v2.1/search?lat=22.7169967&lon=75.86830739999999'
  );
  const json = await data.json();
  console.log(json);

 const restaurants =
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListofRestaurant(restaurants);

    if(listofRestaurant.length===0){
        return <Shimmer />
    }
};

    
    };
    return(
    <div className="body">
        <div className="filter">
           <button className="filter-btn"
            onClick={()=>{
            const  filtered=listofRestaurant.filter((res)=>res?.info?.avgRating>4.5
           );
           setListofRestaurant(filtered)
        }}>
           Top Rated Restaurnt </button>
        </div>
        <div className="restuarant_container">
            {
                listofRestaurant
                .filter((restaurant) => restaurant?.info) 
                .map((restaurant)=>(
                    <Rescart key={restaurant.info.id} resData={restaurant} />
                ))
            }
           
            
        </div>
        
    </div>
    );

    export default Body;