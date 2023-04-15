import React, { useEffect, useState } from "react";

const useGetRestaurantDetails = (id) => {
  const [RestaurantDetails, setRestaurantsDetails] = useState([]);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = () => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&submitAction=ENTER&restaurantId=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setRestaurantsDetails(res.data.cards);
      })
      .catch((error) => console.log(error));
  };
  return RestaurantDetails;
};

export default useGetRestaurantDetails;
