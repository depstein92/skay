import * as actionType from './action-types';
import fireDatabase from '../firebase/index';
import axios from 'axios';


export function bookAppointment(email, firstName, lastName){
  let databaseRef = fireDatabase.ref("appointment");
  databaseRef.push({
    email: email,
    firstName: firstName,
    lastName: lastName
  });
}
