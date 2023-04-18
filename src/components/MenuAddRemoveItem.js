import React from 'react';
import {BsPlus} from 'react-icons/bs'
import {FiMinus} from 'react-icons/fi'

const MenuAddRemoveItem = ({items}) => {
  return (
    <div className="menu_cart_section">
        {/* <i className="fa-solid fa-minus" onClick={() => removeItems(items)}></i> */}
         <span><FiMinus/></span>
        <span>0</span>
         <span><BsPlus/></span>
        {/* <i className="fa-solid fa-plus" onClick={() => addItems(items)}></i> */}
      </div>
  )
}

export default MenuAddRemoveItem;