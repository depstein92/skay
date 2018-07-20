import { combineReducers } from 'redux';
import Bowls_Reducer from './Bowls_Reducer';
import Knives_Reducer from './Knives_Reducer';
import Statues_Reducer from './Statues_Reducer';
import Appointment_Reducer from './Appointment_Reducer';

const rootReducer = combineReducers({
   Bowls_Reducer,
   Knives_Reducer,
   Statues_Reducer,
   Appointment_Reducer
});

export default rootReducer;
