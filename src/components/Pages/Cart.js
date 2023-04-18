import React from 'react'
import {BsCurrencyRupee} from "react-icons/bs"

const Cart = () => {
  return (
    <div className='cart-container'>
      <div className='delivery-container'>
      <div className="checkout-info">
              <span>Work</span>
              <span>Raipur Road, Dehradun Uttarakhand - 248008</span>
              <button>Deliver here</button>
            </div>
            <div className="checkout-info">
              <span>Add New Address</span>
              <span>Dehradun Uttarakhand - 248008</span>
              <button>Add New</button>
        </div>
      </div>
      <div className='cart-items-container'>
          <div className='cart-title'>
                <h3>Cart</h3>
                <h5>0 ITEMS</h5>
          </div>
          <div className='cart-items-details'>
                <div></div>
                <div></div>
                <div></div>
          </div>
          <div className='suggestion-container'>
            <textarea placeholder='Any Suggestions? We will pass to our restaurant partner.'></textarea>
          </div>
          <div className='no-contact-container'>
                <p>Opt in for No-contact Delivery</p>
                <p>Unwell, or avoiding contact? Please select no-contact delivery.
          Partner will safely place the order outside your door (not for COD)</p>
          </div>
          <div className='apply-coupon'>
          <input placeholder='APPLY COUPON CODE'/>
          </div>
          <div className='bill-details'>
               <h2>Bill Details</h2>
               <div className='payment'>
                  <span>Item Total</span>
                  <span><BsCurrencyRupee/> 110</span>
               </div>
               <hr/>
               <div className='payment'>
                  <span>Total Pay</span>
                  <span><BsCurrencyRupee/> 110</span>
               </div>
               <button>Place Your Order</button>
          </div>
      </div>
    </div>
  )
}

export default Cart