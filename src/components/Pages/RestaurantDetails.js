import React from "react";
import { useParams } from "react-router-dom";
import useGetRestaurantDetails from "../../utils/custom-hooks/useGetRestaurantDetails";
import { IMG_CDN_URL } from "../../../Constanst";
import {MdLocalOffer} from "react-icons/md"

const RestaurantDetails = () => {
  const { id } = useParams();
  const resturantDetails = useGetRestaurantDetails(id);
   if(resturantDetails?.length===0){
       return null
   }
  return (
    <div className="restaurant-details-container">
      {/* {console.log(resturantDetails)} */}
      <div className="restaurant-details-header">
        <div className="restaurant-detail-name">
         <div className="image-container"> 
          <img alt="restaurant-image" src={IMG_CDN_URL+resturantDetails[0]?.card?.card?.info?.cloudinaryImageId}/>
        </div>
        <div className="resturant-name-container">
           <h2>{resturantDetails[0]?.card?.card?.info?.name}</h2>
           <p>{resturantDetails[0]?.card?.card?.info?.cuisines.join(" , ")}</p>
           <p>{resturantDetails[0]?.card?.card?.info?.city}</p>
           <div className="restaurant-rating-container"> 
               <div>
                  <p>★ {resturantDetails[0]?.card?.card?.info?.avgRating}</p>
                  {/* <span>{resturantDetails[0]?.card?.card?.info?.totalRatingsString}</span> */}
               </div>
               {/* <div>
                  <p>{resturantDetails[0]?.card?.card?.info?.sla.deliveryTime}</p>
               </div> */}
               <div>
                  {resturantDetails[0]?.card?.card?.info?.costForTwoMessage}
               </div>
           </div>
        </div>
        </div>
         <div className="restaurant-offer-container" style={{color:"white"}}>
              <h2>OFFER</h2>
              <div className="flex gap-2 items-center">
              <MdLocalOffer/> 50% Off on all orders
            </div>
            <div className="flex gap-2 items-center">
            <MdLocalOffer/> FREE DELIVERY
            </div>
              
         </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
