import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingBookAppointment.scss'

class Landing_Book_Appointment extends React.Component{
  constructor(props){
    super(props);

    this.state={ value: '' }
  }

  render(){
    return (
<div className="landing-best-seller">
    <Link to="/appointment">
      <div className="model-women"></div>
      <button>Book Appointment</button>
   </Link>
</div>
    )
  }
}
export default Landing_Book_Appointment;
