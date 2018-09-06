import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fireDatabase from '../firebase/index';
import Appointment_Form from './Appointment_Form';
import SocialMediaIcons from '../components/Social_Media_Icons';
import { getBookedDates } from '../actions/index';
import { DotLoader } from 'react-spinners';
import _ from 'lodash';
import '../styles/BookAppointment.scss';

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

  componentDidMount(){
    this.props.getAppointments();
  }

  openModal(e){
    this.setState({ isModalOpen: true, time: e.target.dataset.time });
  }

  closeModal(){
    this.setState({ isModalOpen: false });
  }

  renderTimes(){
    const { day, month } = this.props.match.params;
    const { getAppointments } = this.props;
    const { loading } = this.props.bookedAppointmentData;
    const bookedTimes = new Array();
    const times = [{time: '9AM', month: month, day: day},
                   {time: '10AM', month: month, day: day},
                   {time: '11AM', month: month, day: day},
                   {time: '12AM', month: month, day: day},
                   {time: '1PM', month: month, day: day},
                   {time: '2PM', month: month, day: day},
                   {time: '3PM', month: month, day: day},
                   {time: '4PM', month: month, day: day},
                   {time: '5PM', month: month, day: day}];

    const compareDates = (date1, date2) => {
      if(!date2.monthselected ||
         !date2.dayselected ||
         !date2.timeSelected){
        return false;
      }
      if(date1.month === date2.monthselected){
       if(date1.day === date2.dayselected){
        if(date1.time === date2.timeSelected){
        return true;
         }
       }
      } else {
       return false;
     }
   }

   const removeFirstDuplicate = (arr) => {
    for(let i = 0; i < arr.length; i++){
     for(let j = i + 1; j < arr.length; j++){
      if(arr[i].key === arr[j].key){
       arr.splice(arr.indexOf(arr[i]), 1);
      }
     }
    }
   return arr;
  }

    if(loading === true){
         return (
           <div className="appointment-loader"
            style={{ position: 'absolute', top: "50%", left: "50%"}}>
           <DotLoader loading={ loading } />
           </div>
         )
       } else{
         const countTimes = [];

         times.forEach(dates => {
           _.mapValues(this.props.bookedAppointmentData.data, (o) => {

             if(!o){ return; }

             if(compareDates(dates, o)){
                countTimes.push(dates.time);
                bookedTimes.push(
                  <li data-time={dates.time}
                      key={dates.time}
                      className="time">{ dates.time }<hr/>
                      Appointment Booked
                  </li>)
             } else {
             if(!countTimes.includes(dates.time)){
                countTimes.push(dates.time);
                bookedTimes.push(
                 <li onClick={this.openModal}
                   key={dates.time}
                   data-time={dates.time}
                   className="time">{ dates.time }<hr/>
               </li>)

              }
             }
           });
        });
    }
        return removeFirstDuplicate(bookedTimes);
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
    <i className="far fa-arrow-alt-circle-left"></i>
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

const mapStateToProps = state => {
  return {
    bookedAppointmentData: state.Book_Appointment_Reducer
  }
}

const mapDispatchToProps = dispatch => {
 return bindActionCreators({getAppointments: getBookedDates}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Book_Appointment);
