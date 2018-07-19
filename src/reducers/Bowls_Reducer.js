
const initialState = {
  error: null,
  data: null,
  fetching: false
};

function Bowls_Reducer(state = initialState, action){
  switch(action.type){
    case "BOWLS_API_REQUEST":
      return { ...state, fetching: true, error: null };
      break;
    case "BOWLS_API_SUCCESS":
      return { ...state, fetching: false, error: null, data: action.data };
      break;
    case "BOWLS_API_FAILURE":
      return { ...state, fetching: false, error: action.error };
      break;
    default:
      return state;
  }
}

export default Bowls_Reducer;
