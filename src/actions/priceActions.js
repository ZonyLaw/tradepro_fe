import axios from 'axios'

import {
    PRICE_LIST_REQUEST,
    PRICE_LIST_SUCCESS,
    PRICE_LIST_FAIL,


  } from '../constants/priceConstants';



export const listPrices = (tickerId) => async (dispatch) => {



    try {
      dispatch({ type: PRICE_LIST_REQUEST });

      const { data } = await axios.get(`https://trade-pro-4909851596e5.herokuapp.com/api/tickers/prices/${tickerId}/`);
      dispatch({
          type: PRICE_LIST_SUCCESS,
          payload: data,
        });
    } catch (error) {
        dispatch({
        type: PRICE_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
}
