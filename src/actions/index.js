import * as actionType from './action-types';
import fireDatabase from '../firebase/index';
import axios from 'axios';

export function getItemInfo(payload){
  return {
    type: 'GET_ITEM_INFO_REQUEST',
    payload
  }
}

export function sendItemCheckout(payload){
  return {
    type: 'GET_ITEM_CHECKOUT_REQUEST',
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
     payload: appointments
   }
}
