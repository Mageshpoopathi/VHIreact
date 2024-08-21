import { AnyAction, combineReducers } from 'redux';
import { FETCH_SUCCESS_RESPONSE } from '../actions';

const initialState = {
 jsonResponse : '',
}

const appReducer = (state = initialState, action:any) => {
   switch (action.type) {
      case FETCH_SUCCESS_RESPONSE:
        return {
          ...state,
          jsonResponse: action.payload,
        };
      default:
      return state;
   }
}

// Export the reducer using combineReducers
export default combineReducers({
   vHIReducer: appReducer,
 });
 
