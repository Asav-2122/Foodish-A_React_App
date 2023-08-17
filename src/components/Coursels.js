import React from "react";
// import { RESTAURANT_CAROUSELS_API } from "../../Constanst";

const Coursels = ({ imageId,accessibility }) => {
  return (
    <div className="coursel-card">
     {imageId && <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+imageId} alt={accessibility?.altText}/>}
    </div>
  );
};

export default Coursels;
