import Rescart from "./Rescart";
import reslist from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {  CDN_url } from "../utils/constants";

const Body = () => {
  // state variable
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [searchText, setserachText]= useState("")
 

  useEffect(() => {
    fetchData();
    
  },[]);

  const fetchData = async () => {
    const data = await fetch({ CDN_url } +id
    )
    const json = await data.json();
    console.log(json);

    setListofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  if (listofRestaurant.length === 0 ) {
   return <Shimmer />}
   return(
    <div className="body">
      <div className="filter">
        <div className="Search">
            <input type="text" className="Search-Bar" value={searchText} 
            onChange={(e)=>{
            setserachText(e.target.value);
            }}/>
            
            <button onClick={()=>{
                console.log(searchText)
                // filter the restaurant by name
               const filteredrestaurent = listofRestaurant.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setListofRestaurant(filteredrestaurent)

            }} > Search</button>
            
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listofRestaurant.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setListofRestaurant(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restuarant_container">
        {listofRestaurant.map((restaurant) => (
          <Rescart key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
