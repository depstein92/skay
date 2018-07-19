const initialState = {
 error: 'Error would appear here',
 data: 'No data',
}

 export default function Specified_Date_Reducer(state=initialState, action){
  switch(action.type){
    case "GET_SPECIFIED_DATE":
     return { ...state, data: action.data };
     break;
    case "GET_SPECIFIED_DATE_ERROR":
     return { ...state, error: action.error };
     break;
    default:
     return state;
  }
}
