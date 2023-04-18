import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../../slices/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
  };
  return (
    <div className="cart-container">
      <div className="delivery-container">
        <div className="checkout-info">
          <span>Work</span>
          <span>Paliyad Road, Botad Gujarat - 397642</span>
          <button>Deliver here</button>
        </div>
        <div className="checkout-info">
          <span>Add New Address</span>
          <span>Botad Gujarat- 397642</span>
          <button>Add New</button>
        </div>
      </div>
      <div className="cart-items-container">
        <div className="cart-title">
          <h3>Cart</h3>
          <h5>{Object.keys(cartItems).length} ITEMS</h5>
        </div>
        <div className="cart-items-details">
          {Object.values(cartItems).map((ele) => {
            console.log(ele);
            return (
              <div key={ele.id} className="cart-items-info">
                <span>{ele.name}</span>
                <div className="add-remove-item">
                  <FiMinus onClick={() => handleRemoveItem(ele)} />
                  <span>
                    {cartItems?.[ele.name]?.count > 0
                      ? cartItems?.[ele.name]?.count
                      : 0}
                  </span>
                  <FiPlus onClick={() => handleAddItem(ele)} />
                </div>
                <div style={{ marginRight: "5px" }}>
                  ₹{" "}
                  <span>
                    {" "}
                    {(ele?.price / 100) * cartItems?.[ele.name]?.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="suggestion-container">
          <textarea placeholder="Any Suggestions? We will pass to our restaurant partner."></textarea>
        </div>
        <div className="no-contact-container">
          <p>Opt in for No-contact Delivery</p>
          <p>
            Unwell, or avoiding contact? Please select no-contact delivery.
            Partner will safely place the order outside your door (not for COD)
          </p>
        </div>
        <div className="apply-coupon">
          <input placeholder="APPLY COUPON CODE" />
        </div>
        <div className="bill-details">
          <h2>Bill Details</h2>
          <div className="payment">
            <span>Item Total</span>
            <span>
              <BsCurrencyRupee />{" "}
              {Object.values(cartItems).reduce(
                (previousValue, currentValue) => {
                  return (
                    previousValue +
                    (currentValue.price / 100) * currentValue.count
                  );
                },
                0
              )}
            </span>
          </div>
          <hr />
          <div className="payment">
            <span>Total Pay</span>
            <span>
              <BsCurrencyRupee />{" "}
              {Object.values(cartItems).reduce(
                (previousValue, currentValue) => {
                  return (
                    previousValue +
                    (currentValue.price / 100) * currentValue.count
                  );
                },
                0
              )}
            </span>
          </div>
          <button>Place Your Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
