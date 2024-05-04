import React from "react";
// import { RESTAURANT_CAROUSELS_API } from "../../Constanst";

const Coursels = ({ imageId, accessibility }) => {
  return (
    <div className="coursel-card">
      {imageId && (
        <img
          width="144"
          height="180"
          style={{ backgroundColor: "black" }}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
            imageId
          }
          alt={accessibility?.altText}
        />
      )}
    </div>
  );
};

export default Coursels;
