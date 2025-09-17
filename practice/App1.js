import React from "react";
import ReactDOM from "react-dom/client";


// react element is an object => when render it is an html element 
/* const heading=React.createElement(
    'h1',
    {id:"heading"}, 
    "React Monika" */

// const root= ReactDOM.createRoot(document.getElementById('root'));




// using jsx
//react element
// const heading=(<h1 className="head" tabIndex={5}>Namaste Monika </h1>);


//functional component
const Title=()=>{
   return <h1 className="Heads" tabIndex={5}> Multiple component</h1>
}
//functional component
//component composition
const HeadingComponent=()=>(
 
   <div id="container">
   
    {title}
    
    
    <h1 className="headingf">Monika I'm functional component</h1>
    </div>
);

//heading component
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);



// import Rescart from "./Rescart";
// import reslist from "../utils/mockdata";
// import { useEffect, useState } from "react";

// const Body=()=>{
    

//     // state variable
//     let [listofRestaurant, setListofRestaurant]=useState([])
   
//     useEffect(()=>{
//         fetchData();
//     }, []);

//     const fetchData=async()=>{
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=22.7169967&lng=75.86830739999999"
//         );
    
    
//     const json=await data.json();
//     console.log(json);

// const fetchData = async () => {
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=22.7169967&lng=75.86830739999999"
//   );
//   const json = await data.json();
//   console.log(json);

//  const restaurants =
//       json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants || [];

//     setListofRestaurant(restaurants);
// };

    
//     };
//     return(
//     <div className="body">
//         <div className="filter">
//            <button className="filter-btn"
//             onClick={()=>{
//             const  filtered=listofRestaurant.filter((res)=>res?.info?.avgRating>4.5
//            );
//            setListofRestaurant(filtered)
//         }}>
//            Top Rated Restaurnt </button>
//         </div>
//         <div className="restuarant_container">
//             {
//                 listofRestaurant
//                 .filter((restaurant) => restaurant?.info) 
//                 .map((restaurant)=>(
//                     <Rescart key={restaurant.info.id} resData={restaurant} />
//                 ))
//             }
           
            
//         </div>
        
//     </div>
//     );
// } ;
// export default Body;