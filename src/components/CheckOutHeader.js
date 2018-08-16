import React from 'react';
import { Link } from 'react-router-dom';


const CheckOutHeader = () => {
  return(
    <div className="checkout-header">
    <Link className="exit"to="/shop">
      <i className="far fa-arrow-alt-circle-left"></i>
     </Link>
     <span className="checkout-logo">
       CheckOut
     </span>
    </div>
  )
}

export default CheckOutHeader;
