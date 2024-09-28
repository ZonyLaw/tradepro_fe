import axios from 'axios';

import {
  MODEL_RESULTS_REQUEST,
  MODEL_RESULTS_SUCCESS,
  MODEL_RESULTS_FAIL,
} from '../constants/modelConstants';

export const modelResults = (currency_id) => async (dispatch) => {
  try {
    dispatch({ type: MODEL_RESULTS_REQUEST });

    const [hist_1hFetch, hist_v4Fetch,hist_v5Fetch, cont_1hFetch, cont_v4Fetch, cont_v5Fetch] =
      await Promise.all([
        axios.get(
          `https://trade-pro-4909851596e5.herokuapp.com/api/report/${currency_id}_pred_historical_1h_v5/`
        ),
        axios.get(
          `https://trade-pro-4909851596e5.herokuapp.com/api/report/${currency_id}_pred_historical_v4/`
        ),
        axios.get(
          `https://trade-pro-4909851596e5.herokuapp.com/api/report/${currency_id}_pred_historical_v5/`
        ),
        axios.get(
          `https://trade-pro-4909851596e5.herokuapp.com/api/report/${currency_id}_pred_continue_1h_v5/`
        ),
        axios.get(
          `https://trade-pro-4909851596e5.herokuapp.com/api/report/${currency_id}_pred_continue_v4/`
        ),
        axios.get(
          `https://trade-pro-4909851596e5.herokuapp.com/api/report/${currency_id}_pred_continue_v5/`
        ),
        // Add more axios calls as needed
      ]);

    // Destructure the data from the responses
    const hist_1h = hist_1hFetch.data;
    const hist_v4 = hist_v4Fetch.data;
    const hist_v5 = hist_v5Fetch.data;
    const cont_1h = cont_1hFetch.data;
    const cont_v4 = cont_v4Fetch.data;
    const cont_v5 = cont_v5Fetch.data;

    dispatch({
      type: MODEL_RESULTS_SUCCESS,
      payload: { hist_1h, hist_v4, hist_v5, cont_1h, cont_v4, cont_v5 },
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
};
