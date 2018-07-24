import React, { Component } from 'react';
import Book_Appointment from './Book_Appointment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/index.scss';

class Appointment extends Component {

 constructor() {
    super();

    this.state = {
      date: new Date(),
      month: 0,
      day: 1
    };
   this.showMonthAndYear = this.showMonthAndYear.bind(this);
   this.showDays = this.showDays.bind(this);
   this.addMonth = this.addMonth.bind(this);
   this.subMonth = this.subMonth.bind(this);
   this.getDay = this.getDay.bind(this);
  }

 addMonth(){
   this.setState({ month: this.state.month + 1 });
  }

 subMonth(){
   this.setState({ month: this.state.month - 1 });
  }

 getDay(e){
   this.setState({ day: e.target.dataset.key });
  }


 showMonthAndYear(){

  let months = ['January','Febuary',
   'March', 'April', 'May',
   'June', 'July', 'August',
   'September', 'October', 'November',
   'December' ];

  let date = new Date(),
      dateMonth = date.getMonth(),
      dateYear = date.getYear(),
      { month } = this.state;

  return (
   <ul>
     <li onClick={this.subMonth} className="prev">&#10094;</li>
     <li onClick={this.addMonth} className="next">&#10095;</li>
     <li>{ months[ dateMonth + month ] }<br />
     <span> { date.getFullYear() }</span></li>
   </ul>)
  }


showDays(){

 let arr =[],
     date = new Date(),
     todaysDate = date.getDay(),
     feb = date.getUTCFullYear() % 4 !== 0 ? 28 : 29, //leap year
     elemStyle = { backgroundColor: 'pink' },
     year = date.getUTCFullYear(),
     { month, day } = this.state,
     dateMonth = date.getMonth(),
     monthsInDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
     currentMonth = monthsInDays[ date.getMonth() - 1 + month ],
     months = ['January','Febuary','March', 'April', 'May',
               'June', 'July', 'August','September', 'October',
               'November', 'December' ],
     monthInString = months[ dateMonth + month ];


 for(let i = 1; i < currentMonth; i++){

   if(i === todaysDate){

    arr.push(
     <Link to={`/book_appointment/${day}/${monthInString}`}
           data-key={i}
           onMouseOver={ this.getDay }>
      <li key={ i } style={elemStyle} data-key={i}>
          <span data-key={i}>{ i }</span>
       </li>
     </Link>)
   } else {

    arr.push(
    <Link to={`/book_appointment/${day}/${monthInString}`}
          data-key={i}
          onMouseOver={ this.getDay }>
      <li data-key={i} key={ i }>
        <span data-key={i}>{ i }</span>
       </li>
    </Link>);
      }
   }
    return arr;
  }

  render() {
   return (
<div className="month">
 { this.showMonthAndYear() }
 <ul className="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
 </ul>
 <ul className="days">
 { this.showDays() }
 </ul>
</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Appointment_Set: state.Appointment_Reducer
  }
}


export default connect(mapStateToProps)(Appointment);
