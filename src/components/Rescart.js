import { CDN_url } from "../utils/constants";

const Rescart=(props)=>{
    const {resData}=props;
    const{ cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo

    }=resData?.info;
    return(
        <div className="res_cart" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt='res-logo'
            src={ CDN_url
                +cloudinaryImageId
             } />
            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} star</h5>
            <h5>{deliveryTime}</h5>
            <h5>{costForTwo}</h5>
            <h6></h6>
        </div>
    )
}

export default Rescart