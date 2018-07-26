import * as actionType from './action-types';
import fireDatabase from '../firebase/index';
import axios from 'axios';


//   databaseRef.orderByValue().on("value", (date) => {
//   let databaseRef = fireDatabase.ref("appointment");

export function getBookedDates(dateInfo){
  let databaseRef = fireDatabase.ref("appointment");
  let time = false,
      day = false,
      month = false;
  databaseRef.orderByValue().on("value", (snapshot) => {
    let { time, day, month } = snapshot.val();
    if(time === dateInfo.time){
         time = true;
    }
    if(day === dateInfo.day){
         day = true;
    }
    if(month === dateInfo.month){
         month = true;
    }
  });

  if(time && day && month){
    return true;
  } else {
    return false;
  }
}

export function bookAppointment(email, firstName, lastName, timeSelected, dayselected, monthselected){
  let databaseRef = fireDatabase.ref("appointment");
  let searchValue = [timeSelected, dayselected, monthSelected];
  databaseRef.push({
    email: email,
    firstName: firstName,
    lastName: lastName,
    timeSelected: timeSelected,
    dayselected: dayselected,
    monthselected: monthselected
  });
}
