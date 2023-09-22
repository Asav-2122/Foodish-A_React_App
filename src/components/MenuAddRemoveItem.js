import React from "react";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItems, removeItems } from "../slices/cartSlice";

const MenuAddRemoveItem = ({ items }) => {
  const dispatch = useDispatch();
  const specificItemsCount = useSelector((store) => store.cart.cartItems);
  const handleAddItem = (items) => {
    dispatch(addItems(items));
  };
  const handleRemoveItem = (items,itemCount) => {
    if (itemCount>0) {
      dispatch(removeItems(items));
      }
  };
  return (
    <div className="menu_cart_section">
      <span onClick={() => handleRemoveItem(items,specificItemsCount[items?.name]?.["count"])}>
        <FiMinus />
      </span>
      <span>
        {specificItemsCount[items?.name]?.["count"] > 0
          ? specificItemsCount[items.name]?.["count"]
          : 0}
      </span>
      <span onClick={() => handleAddItem(items)}>
        <BsPlus />
      </span>
    </div>
  );
};

export default MenuAddRemoveItem;
