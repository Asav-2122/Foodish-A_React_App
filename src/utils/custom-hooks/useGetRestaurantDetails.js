import React, { useEffect, useState } from "react";

const useGetRestaurantDetails = (id) => {
  const [RestaurantDetails, setRestaurantsDetails] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = () => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&submitAction=ENTER&restaurantId=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setRestaurantsDetails(res?.data?.cards);
        console.log(res.data.cards)
        setCategory(
          res?.data?.cards[res?.data?.cards?.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
      })
      .catch((error) => console.log(error));
  };
  // if (RestaurantDetails?.length > 0&&category.length>0) {
    return [RestaurantDetails, category];
  // }
};

export default useGetRestaurantDetails;
