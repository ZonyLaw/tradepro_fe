import {
    PRICE_LIST_REQUEST,
    PRICE_LIST_SUCCESS,
    PRICE_LIST_FAIL,
    
  } from '../constants/priceConstants';
  
  export const priceListReducer = (state = { prices: [] }, action) => {
    switch (action.type) {
      case PRICE_LIST_REQUEST:
        return { loading: true, prices: [] };
  
      case PRICE_LIST_SUCCESS:
        return { loading: false, prices: action.payload };
  
      case PRICE_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  