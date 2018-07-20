

const initialState = {
  error: null,
  data: null,
  fetching: false
};

function Appointment_Reducer(state = initialState, action){
  switch(action.type){
    case "BOOK_APPOINTMENT_REQUEST":
      return { ...state, fetching: true, error: null };
      break;
    case "BOOK_APPOINTMENT_SUCCESS":
      return { ...state, fetching: false, error: null, data: action.data };
      break;
    case "BOOK_APPOINTMENT_FAILURE":
      return { ...state, fetching: false, error: action.error };
      break;
    default:
      return state;
  }
}

export default Appointment_Reducer;
