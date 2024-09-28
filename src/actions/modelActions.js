import axios from 'axios'

import {
    MODEL_RESULTS_REQUEST,
    MODEL_RESULTS_SUCCESS,
    MODEL_RESULTS_FAIL,


  } from '../constants/modelConstants';



export const modelResults = () => async (dispatch) => {



    try {
      dispatch({ type: MODEL_RESULTS_REQUEST });


      const { data } = await axios.get(`https://trade-pro-4909851596e5.herokuapp.com/api/report/USDJPY_pred_continue_1h_v5/`);
    //   console.log(data)
      dispatch({
          type: MODEL_RESULTS_SUCCESS,
          payload: data,
        });
    } catch (error) {
        dispatch({
        type: MODEL_RESULTS_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
}
