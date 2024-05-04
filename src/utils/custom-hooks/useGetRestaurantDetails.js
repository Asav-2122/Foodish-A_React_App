import React, { useEffect, useState } from "react";

const useGetRestaurantDetails = (id) => {
  const [RestaurantDetails, setRestaurantsDetails] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = () => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`

      // `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${id}`

      // `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&submitAction=ENTER&restaurantId=${id}&catalog_qa=undefined`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data.cards);
        if (res?.data?.cards) {
          setRestaurantsDetails(res?.data?.cards);
          setCategory(
            res?.data?.cards[res?.data?.cards?.length - 1]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards
          );
        }
      })
      .catch((error) => console.log(error));
  };
  // if (RestaurantDetails?.length > 0&&category.length>0) {
  return [RestaurantDetails, category];
  // }
};

export default useGetRestaurantDetails;
