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
    const times = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    const bookedTimes = new Array();
    const parsedDay = JSON.parse(day);

       if(loading === true){
         return (
           <div className="appointment-loader"
            style={{ position: 'absolute', top: "50%", left: "50%"}}>
           <DotLoader loading={ loading } />
           </div>
         )
       } else{
        const { timeSelected,
                daySelected,
                monthSelected } = this.props.bookedAppointmentData.data;
           times.forEach(time => {
            if(monthSelected === month){
              if(daySelected === parsedDay){
                if(timeSelected === time){
                  bookedTimes.push(
                    <li data-time={time}
                        className="time">{ time }<hr/>
                        ___Appointment Booked
                    </li>
                  )
                }
              }
            } else {
              bookedTimes.push(
                <li onClick={this.openModal}
                    data-time={time}
                    className="time">{ time }<hr/>
                </li>
              )
            }
          })
       }
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

const mapStateToProps = state => {
  return {
    bookedAppointmentData: state.Book_Appointment_Reducer
  }
}

const mapDispatchToProps = dispatch => {
 return bindActionCreators({getAppointments: getBookedDates}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Book_Appointment);
