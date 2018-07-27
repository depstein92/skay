import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fireDatabase from '../firebase/index';
import Appointment_Form from './Appointment_Form';
import SocialMediaIcons from '../components/Social_Media_Icons';
import * as action from '../actions/index';
import _ from 'lodash';
import '../styles/index.scss';

class Book_Appointment extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isModalOpen: false,
      loading: false,
      time: '' };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderTimes = this.renderTimes.bind(this);
  }

  openModal(e){
    this.setState({ isModalOpen: true, time: e.target.dataset.time });
  }

  closeModal(){
    this.setState({ isModalOpen: false });
  }


  renderTimes(){

    const databaseRef = fireDatabase.ref("Appointment"),
        times = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM'],
        bookedTimes = [];
    const { day, month } = this.props.match.params;
    const parsedDay = JSON.parse(day);
    const getFBData = (callback) => {
      databaseRef.orderByValue().on("value", snapshot => {
          callback(snapshot.val());
        })
     }

    getFBData(snapshot => {
        times.forEach((time) => {
          if(snapshot.timeSelected === time && month === snapshot.monthSelected
              && parsedDay === snapshot.daySelected){
               bookedTimes.push(
                    <li className="time">
                    {time}{'\u00A0'}Appointment Booked<hr/>
                   </li>
               )
             } else {
               bookedTimes.push(
                    <li onClick={this.openModal}
                        data-time={time}
                        className="time">{time}<hr/>
                   </li>
               )
             }
        })
    });
      return bookedTimes;
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
       <SocialMediaIcons />
       <ul className="time-zones">
       { this.renderTimes() }
       </ul>
    </div>
    )
  }
}

// const mapStateToProps = () => {
//   return {
//     isNull: null
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//  return bindActionCreators({getAppointments: action.getBookedDates}, dispatch);
// }
export default Book_Appointment;
