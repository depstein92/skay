import { combineReducers } from 'redux';
import Store_Reducer from './Store_Reducer';
import Appointment_Reducer from './Appointment_Reducer';

const rootReducer = combineReducers({
   Store_Reducer,
   Appointment_Reducer
});

export default rootReducer;
