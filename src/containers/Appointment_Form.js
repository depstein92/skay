import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    let alphabet  = ['A', 'B', 'C','D','E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let char = alphabet[Math.floor(Math.random() * 28)]
    let num = `${ Math.floor(Math.random() * 1000)}`;
    let id = `_${char}${num}`;
    this.props.bookAppointment(id, email, firstName, lastName);
  }

  render(){
    let { closeModal, timeSelected, dayselected, monthselected } = this.props;
    let { email, firstName, lastName } =this.state;

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

const mapDispatchToProps = (dispatch) => {
  return {
    bookAppointment: (id, email, firstName, lastName) =>
     dispatch({ type: "BOOK_APPOINTMENT_REQUEST",  payload: { id, email, firstName, lastName } })
  }
}


export default connect(null, mapDispatchToProps)(Appointment_Form);
