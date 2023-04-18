import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetRestaurantDetails from "../../utils/custom-hooks/useGetRestaurantDetails";
import { IMG_CDN_URL } from "../../../Constanst";
import { MdLocalOffer } from "react-icons/md";
import MenuItemCard from "../MenuItemCard";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [resturantDetails, category] = useGetRestaurantDetails(id);

  //   useEffect(() => {
  //    if (resturantDetails!==undefined&&resturantDetails?.length>0) {
  //       const menu_category_item = resturantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((ele)=>{
  //          return ele?.card?.card?.title;
  //       })
  //        if (menu_category_item?.length>0||menu_category_item!==undefined) {
  //          setMenuCategory(menu_category_item)
  //        }

  //     }
  //   }, [])
  const scrollToSection = (e, val) => {
   e.preventDefault();
   const element = document.getElementById(val);
   element.scrollIntoView({ behavior: 'smooth' });
 };
  if (
    (resturantDetails?.length === 0 || resturantDetails === undefined) &&
    (category?.length === 0 || category === undefined)
  ) {
    return null;
  }
  return (
    <div className="restaurant-details-container">
      <div className="restaurant-details-header">
        <div className="restaurant-detail-name">
          <div className="image-container">
            <img
              alt="restaurant-image"
              src={
                IMG_CDN_URL +
                resturantDetails[0]?.card?.card?.info?.cloudinaryImageId
              }
            />
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
        <div className="restaurant-offer-container" style={{ color: "white" }}>
          <h2>OFFER</h2>
          <div className="flex gap-2 items-center">
            <MdLocalOffer /> 50% Off on all orders
          </div>
          <div className="flex gap-2 items-center">
            <MdLocalOffer /> FREE DELIVERY
          </div>
        </div>
      </div>
      <div className="restaurant-menu-container">
        <div className="menu-category-nav">
          {category?.length === 0||category===undefined ? (
            <h1>Loading...</h1>
          ) : (
            category.map((ele, index) => {
              if (index > 0) {
                return (
                  ele?.card?.card?.title !== undefined && (
                    <span className="category-title" onClick={(e) => scrollToSection(e, ele?.card?.card?.title)}
                    key={index}>{ele?.card?.card?.title}</span>
                  )
                );
              }
            })
          )}
        </div>
        <div className="category-items">
          {category.map((ele, index) => {
            if (index > 0) {
              return (
                <div
                  className="menu-section"
                  id={ele?.card?.card?.title}
                  key={index}
                >
                  <div className="category-heading">
                    {ele?.card?.card?.title}
                  </div>
                  <div className="total-items">
                    {ele?.card?.card.itemCards?.length} Items
                  </div>
                  {ele?.card?.card?.itemCards?.map((filteredMenu) => {
                     console.log(filteredMenu)
                  return (
                    <MenuItemCard
                      items={filteredMenu.card.info}
                      restImg={resturantDetails.imageId}
                      key={filteredMenu.card.info.id}
                    />
                  );
                })}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
