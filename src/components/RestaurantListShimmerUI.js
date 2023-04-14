import React from 'react'

const RestaurantListShimmerUI = () => {
  return (
    <>
        {Array(15).fill("").map((ele,id)=>{
        return (
        <div key={id} className="shimmer-card">
            <div className="shine" id="image_shine"></div>
            {/* <div className="shine" id="lines_shine"></div>
            <div className="shine" id="lines_shine"></div>
            <div className="shine" id="lines_shine"></div> */}
          </div>
        )
    })}
    </>
  )
}

export default RestaurantListShimmerUI