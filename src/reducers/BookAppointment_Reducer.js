
const initialState = {
        loading: true,
        data: null,
        error: null
      }

function Book_Appointment_Reducer(state=initialState, action){
    switch(action.type){
      case 'GET_BOOK_APPOINTMENT_SUCCESS':
        return { ...state, data: action.payload, loading: false, error: null }
        break;
      case 'GET_BOOK_APPOINTMENT_ERROR':
        return { ...state, data: action.payload, loading: false, error: true }
        break;
      default:
        return state;
    }
}

export default Book_Appointment_Reducer;
