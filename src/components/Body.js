import React, { useEffect, useState } from "react";
import Coursels from "./Coursels";
import RestaurantCard from "./RestaurantCard";
import RestaurantListShimmerUI from "./RestaurantListShimmerUI";
import nodataimage from "../assets/images/nodata.png";
import { Link } from "react-router-dom";
// import { RESTAURANTS_API } from "../../Constanst";
// import { RESTAURANTS_API } from "../../constanst";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [searchRestaurantQuery, setSearchRestaurantQuery] = useState("");
  const [isRestaurantFound, setIsRestaurantFound] = useState(true);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  const getRestaurantsData = () => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res?.data?.cards[2]?.data?.data?.cards),
          setCarousel(res?.data?.cards[0]?.data?.data?.cards);
        setFilterRestaurant(res?.data?.cards[2]?.data?.data?.cards);
      })
      .catch((error) => console.log(error));
  };

  const filterSearchRestaurants = () => {
    if (searchRestaurantQuery === "") {
      if (isRestaurantFound === false) {
        setIsRestaurantFound(true);
        setRestaurants(filterRestaurant);
      } else {
        setRestaurants(filterRestaurant);
      }
    } else {
      const filteredRes = restaurants.filter((ele) => {
        return ele.data.name
          .toLowerCase()
          .includes(searchRestaurantQuery.toLowerCase());
      });
      if (filteredRes.length === 0) {
        setIsRestaurantFound(false);
        setRestaurants([]);
      } else {
        setRestaurants(filteredRes);
      }
    }
  };

  return (
    <div className="body-container">
      <div className="carousel-container">
        {carousel?.length === 0 ? (
          <Coursels />
        ) : (
          carousel.slice(0, 3).map((ele) => {
            return <Coursels key={ele.data.bannerId} {...ele.data} />;
          })
        )}
      </div>

      <div className="serach-container">
        <input
          type="text"
          value={searchRestaurantQuery}
          name="search"
          className="search-bar"
          pattern="[A-Za-z]*"
          autoComplete="off"
          onChange={(e) => {
            setSearchRestaurantQuery(e.target.value);
            if (searchRestaurantQuery.length < 2) {
              setIsRestaurantFound(true);
              setRestaurants(filterRestaurant);
            }
          }}
          placeholder="Search for restaurants and food"
        />
        <span className="search-btn" onClick={filterSearchRestaurants}>
          Search
        </span>
      </div>
      <div className="restaurants-list-container">
        {restaurants?.length === 0 && isRestaurantFound ? (
          <RestaurantListShimmerUI />
        ) : isRestaurantFound === false ? (
          <div className="no-restaurant-found-container">
            <img src={nodataimage} alt="No-Data-Image" />
          </div>
        ) : (
          <>
            <div className="total-restaurants">
              <h3> {restaurants.length} Restaurants</h3>
            </div>
            {restaurants.map((restaurant) => (
              <div className="restaurants-list" key={restaurant.data.id}>
               <Link to={"/restaurant/"+restaurant.data.id} className="link"><RestaurantCard restaurantsData={restaurant.data} /></Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
