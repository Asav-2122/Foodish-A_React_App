import React from "react";
import { IMG_CDN_URL } from "../../Constanst";
import { Default_Img } from "../assets/images/default-restaurant.webp";
const RestaurantCard = ({ restaurantsData }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    aggregatedDiscountInfoV3,
    sla,
    id,
  } = restaurantsData;
  return (
    <div className="card">
      {cloudinaryImageId ? (
        <img loading="lazy" src={IMG_CDN_URL + cloudinaryImageId} />
      ) : (
        <img loading="lazy" src={Default_Img} />
      )}
      <div className="card_details">
        <div className="card_name ">{name}</div>
        <div className="card_tag">{cuisines.join(", ")}</div>
      </div>
      <div className="card_info ">
        <div
          className="card_ratting"
          style={
            avgRating === "--"
              ? { backgroundColor: "grey" }
              : avgRating >= 4
              ? { backgroundColor: "#48c479" }
              : { backgroundColor: "#db7c38" }
          }
        >
          <span>
            <i className="fa-sharp fa-solid fa-star"></i>
          </span>
          <span>{avgRating}</span>
        </div>
        <div className="card_time">{sla?.deliveryTime} MINS</div>
        <div className="card_cost">{costForTwo}</div>
      </div>
      <div className="card_offer ">
        {aggregatedDiscountInfoV3?.header ? (
          <>
            <i className="fa-solid fa-tag"></i>
            <span className="ml-2">
              {aggregatedDiscountInfoV3?.header}
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default RestaurantCard;
