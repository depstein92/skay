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

    let databaseRef = fireDatabase.ref("Appointment"),
        times = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM'],
        bookedTimes = [],
        doesTimeMatch,
        doesMonthMatch,
        doesDayMatch

    let { currentDay: day, currentMonth: month } = this.props.match.params;

    const getFBData = (callback) => {
      databaseRef.orderByValue().on("value", snapshot => {
          callback(snapshot.val());
        })
     }

    getFBData(obj => {
        let { monthSelected, daySelected, timeSelected } = obj;
        let dayArr = [],
            monthArr = [],
            timeArr = [];

        console.log('this is obj', obj);
        monthArr.push(monthSelected);
        dayArr.push(daySelected);
        timeArr.push(timeSelected);

        for(let i = 0; i < monthArr; i++){
          if(monthArr[i] === currentMonth){
            if(dayArr[i] === currentDay){
              if(timeArr[i] === timeSelected){

              }
            }
          }
        }

    });

    // const compare = () => {
    //      times.forEach((time) => {
    //        if(snapshot.timeSelected === time && params_Month === snapshot.monthSelected
    //            && params_Day === snapshot.daySelected){
    //             bookedTimes.push(
    //                  <li onClick={this.openModal}
    //                      data-time={time}
    //                      className="time">{time}Appointment Booked<hr/>
    //                 </li>
    //             )
    //           } else {
    //             bookedTimes.push(
    //                  <li onClick={this.openModal}
    //                      data-time={time}
    //                      className="time">{time}<hr/>
    //                 </li>
    //             )
    //           }
    //      })
    // }

     //compare();
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
       { this.renderTimes() }
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
