const initialState = {
  error: null,
  data: null,
  fetching: false
}

function Store_Reducer(state=initialState, action){
  switch(action.type){
    case 'GET_ITEM_INFO_REQUEST': /*Will fix after*/
     return { ...state, fetching: false, error: null, data: action.payload }
     break;
    case "GET_ITEM_INFO_FAILURE":
      return { ...state, fetching: false, ISError: null,  error: action.error };
      break;
    default:
      return state;
  }
}
 export default Store_Reducer;
