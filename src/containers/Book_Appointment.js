import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Appointment_Form from './Appointment_Form';
import SocialMediaIcons from '../components/Social_Media_Icons';
import '../styles/index.scss';

class Book_Appointment extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isModalOpen: false,
      time: '' };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e){
    this.setState({ isModalOpen: true, time: e.target.dataset.time });
  }

  closeModal(){
    this.setState({ isModalOpen: false });
  }

  render(){
   let { day, month } = this.props.match.params;
   let { isModalOpen, time } = this.state;

    return(
<div className="appointment-modal">
  <div className="logo">
    Skay
  </div>
  <ul className="date">
    <li>{ day }</li>
    <li>{ month }</li>
  </ul>
  <Link to="/appointment" className="exit">
    Exit
  </Link>
  { isModalOpen === true &&
    <Appointment_Form
       timeSelected={time}
       closeModal={this.closeModal}
       dayselected={day}
       monthselected={month} /> }
   <ul className="time-zones">
      <li onClick={this.openModal}
          data-time={'9AM'}
          className="time">9AM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'10AM'}
          className="time">10AM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'11AM'}
          className="time">11AM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'12PM'}
          className="time">12PM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'1PM'}
          className="time">1PM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'2PM'}
          className="time">2PM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'3PM'}
          className="time">3PM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'4PM'}
          className="time">4PM<hr/>
     </li>
      <li onClick={this.openModal}
          data-time={'5PM'}
          className="time">5PM<hr/>
      </li>
      </ul>
       <SocialMediaIcons />
    </div>
    )
  }
}

export default Book_Appointment;
