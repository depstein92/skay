
const initialState = {
  error: null,
  data: null,
  fetching: false
};

 export default function Statues_Reducer(state=initialState, action){
  switch(action.type){
    case "STATUES_API_REQUEST":
      return { ...state, fetching: true, error: null };
      break;
    case "STATUES_API_SUCCESS":
      return { ...state, fetching: false, error: null, data: action.data };
      break;
    case "STATUE_API_FAILURE":
      return { ...state, fetching: false, error: action.error, };
      break;
    default:
      return state;
  }
}
