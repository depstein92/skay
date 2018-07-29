import * as actionType from './action-types';
import fireDatabase from '../firebase/index';
import axios from 'axios';

export function getItemInfo(payload){
  return {
    type: 'GET_ITEM_INFO_REQUEST',
    payload
  }
}


export function bookAppointment(email, firstName, lastName, timeSelected, dayselected, monthselected){
   let ref = fireDatabase.ref('Appointment');
   ref.push({
     email,
     firstName,
     lastName,
     timeSelected,
     dayselected,
     monthselected
   })

}
/*GET_BOOK_APPOINTMENT_REQUEST
  GET_BOOK_APPOINTMENT_SUCCESS
  GET_BOOK_APPOINTMENT_ERROR*/
/*
const databaseRef = fireDatabase.ref('Appointment');
  databaseRef.on("value", (snapshot) => {
        dataArr.push(snapshot.val());
  });

*/

const getData = () => {
  const databaseRef = fireDatabase.ref('Appointment');
  return databaseRef.once('value').then(snap => {
    return snap.val();
  }).catch(e => {
    console.log(e);
  })
}

export async function getBookedDates(){
   let appointments = await getData();
   return {
     type: 'GET_BOOK_APPOINTMENT_SUCCESS',
     payload: [ appointments ]
   }
}
