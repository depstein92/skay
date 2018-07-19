import { combineReducers } from 'redux';
import Bowls_Reducer from './Bowls_Reducer';
import Knives_Reducer from './Knives_Reducer';
import Statues_Reducer from './Statues_Reducer';
import Specified_Date_Reducer from './Specified_Date_Reducer';

const rootReducer = combineReducers({
   Bowls_Reducer,
   Knives_Reducer,
   Statues_Reducer,
   Specified_Date_Reducer
});

export default rootReducer;
