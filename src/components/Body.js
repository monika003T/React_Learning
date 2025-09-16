import Rescart from "./Rescart";
import reslist from "../utils/mockdata";

const Body=()=>{
    return(
    <div className="body">
        <div className="search">
           search
        </div>
        <div className="restuarant_container">
            {
                reslist.map((restaurant)=>(
                    <Rescart key={restaurant.info.id} resData={restaurant} />
                ))
            }
           
            
        </div>
        
    </div>
    );
} ;
export default Body;