import React, { Component } from 'react';
import { bookAppointment } from '../actions/index';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import '../styles/BookAppointment.scss'

class Appointment_Form extends Component{
  constructor(props){
    super(props)

    this.state = {
       email: '',
       firstName: '',
       lastName: '',
       time: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.getTimeOfDay = this.getTimeOfDay.bind(this);
  }

  
  onChangeEmail(e){
    this.setState({ email: e.target.value });
  }

  onChangeFirstName(e){
    this.setState({ firstName: e.target.value })
  }

  onChangeLastName(e){
    this.setState({ lastName: e.target.value });
  }
  getTimeOfDay(e){
    this.setState({ time: e.target.dataset.key })
  }

  onFormSubmit(){
    let { email, firstName, lastName } = this.state;
    let { book, timeSelected, dayselected, monthselected, closeModal } = this.props;
    closeModal();
    book(email, firstName, lastName, timeSelected, dayselected, monthselected);
    sendFeedback(
     process.env.DB_EMAIL_TEMPLATE_ID,
     process.env.DB_EMAIL_SENDER_EMAIL,
     email,
     { timeSelected, dayselected, monthselected }
    )


  function sendFeedback (templateId, senderEmail, receiverEmail, data){
   window.emailjs.send(
     'mailgun',
     templateId,
     {
       receiverEmail,
       timeSelected: data.timeSelected,
       dayselected: data.dayselected,
       monthselected: data.monthselected
     })
     .then(res => {
       console.log('Email sent successfully mate');
     })
     .catch(err => console.error('Failed to send feedback. Error: ', err))
  }
}

  render(){
    let { closeModal, timeSelected, dayselected, monthselected } = this.props;
    let { email, firstName, lastName } = this.state;

    return(
      <div className="appointment-form-background">
        <div className="appointment-form-exit" onClick={closeModal}>
          Exit
        </div>
        <form className="appointment-form" onSubmit={this.onFormSubmit}>
        <ul className="date-time-info">
         <li>{ monthselected }</li>
         <li>{`${ dayselected }th`}</li>
         <li>{ timeSelected }</li>
        </ul>
          <label className="email-label">Email</label>
          <input name="email" value={ email }
                 className="email-input"
                 onChange={this.onChangeEmail} />
          <label className="firstName-label">First Name</label>
          <input name="firstName" value={ firstName }
                 className="firstName-input"
                 onChange={this.onChangeFirstName} />
          <label className="lastName-label">Last Name</label>
          <input name="lastName" value={ lastName }
                 className="lastName-input"
                 onChange={this.onChangeLastName} />
          <input className="submit"
           type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ book: bookAppointment }, dispatch);
}


export default connect(null, mapDispatchToProps)(Appointment_Form);
