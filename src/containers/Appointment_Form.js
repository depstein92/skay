import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';

class Appointment_Form extends Component{
  constructor(props){
    super(props)

    this.state = {
       email: '',
       firstName: '',
       lastName: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
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

  onFormSubmit(){
    let { email, firstName, lastName } = this.state;
    let { book } = this.props;
    book(email, firstName, lastName);
  }

  render(){
    let { closeModal, timeSelected, dayselected, monthselected } = this.props;
    let { email, firstName, lastName } = this.state;

    return(
      <div className="appointment-form-background">
        <div className="appointment-form-exit" onClick={closeModal}>
          Exit
        </div>
        <ul className="date-time-info">
         <li>{ timeSelected }</li>
         <li>{ dayselected }</li>
         <li>{ monthselected }</li>
        </ul>
        <form className="appointment-form" onSubmit={this.onFormSubmit}>
          <input name="email" value={ email }
                 onChange={this.onChangeEmail} />
          <input name="firstName" value={ firstName }
                 onChange={this.onChangeFirstName} />
          <input name="lastName" value={ lastName }
                 onChange={this.onChangeLastName} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ book: actions.bookAppointment }, dispatch);
}


export default connect(null, mapDispatchToProps)(Appointment_Form);
