import {
    MODEL_RESULTS_REQUEST,
    MODEL_RESULTS_SUCCESS,
    MODEL_RESULTS_FAIL,
    
  } from '../constants/modelConstants';
  
  export const modelResultsReducer = (state = { model: [] }, action) => {
    switch (action.type) {
      case MODEL_RESULTS_REQUEST:
        return { loading: true, model: [] };
  
      case MODEL_RESULTS_SUCCESS:
        return { loading: false, model: action.payload };
  
      case MODEL_RESULTS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  