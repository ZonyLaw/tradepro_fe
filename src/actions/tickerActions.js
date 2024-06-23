import axios from 'axios'
import {
    TICKER_LIST_REQUEST,
    TICKER_LIST_SUCCESS,
    TICKER_LIST_FAIL,


  } from '../constants/tickerConstants';

export const listProducts = () => async (dispatch) => {
    try {
      dispatch({ type: TICKER_LIST_REQUEST });

      const { data } = await axios.get('https://trade-pro-4909851596e5.herokuapp.com/api/tickers/');

      dispatch({
        type: TICKER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TICKER_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
}
