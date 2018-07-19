import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Landing_Best_Seller extends React.Component{
  constructor(props){
    super(props);

    this.state={ value: '' }
  }

  render(){
    return (
<div className="landing-best-seller">
  <span id="high-quality">High quality mink Lashs </span>
    <Link to="/shop">
      <button>Shop Mink Lashs</button>
   </Link>
</div>
    )
  }
}
export default Landing_Best_Seller;
