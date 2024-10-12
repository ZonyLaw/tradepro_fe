import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { modelResults } from '../actions/modelActions'; // Assuming this is your action creator
import { useFlashClass } from '../components/useFlashClass';
import { FormatDate } from '../components/FormatDate';
import '../styles/ModelTables.css';

function ModelReportScreen() {
  const [currencyId, setCurrencyId] = useState('USDJPY');
  const dispatch = useDispatch();

  // Use useSelector to access the state where modelResults are stored
  const { error, loading, model } = useSelector((state) => state.modelResults);

  useEffect(() => {
    dispatch(modelResults(currencyId)); // Dispatch action to fetch model results using the 'id'
  }, [dispatch, currencyId]);

  const handleInputChange = (e) => {
    setCurrencyId(e.target.value); // Update currencyId state with user input
  };


  const model_date = model.hist_1h?.pred_historical?.['date']
  const formatted_date = FormatDate(model_date)


  const hist_1h =
    model.hist_1h?.pred_historical?.trade_results?.['Potential Trade'] || [];
  const hist_v4 =
    model.hist_v4?.pred_historical?.trade_results?.['Potential Trade'] || [];
  const hist_v5 =
    model.hist_v5?.pred_historical?.trade_results?.['Potential Trade'] || [];
  const hist_headers = model.hist_1h?.pred_historical?.trade_headers || [];
  const cont_1h =
    model.cont_1h?.pred_continue?.trade_results?.['Potential Trade'] || [];
  const cont_v4 =
    model.cont_v4?.pred_continue?.trade_results?.['Potential Trade'] || [];
  const cont_v5 =
    model.cont_v5?.pred_continue?.trade_results?.['Potential Trade'] || [];
  const cont_headers = model.cont_1h?.pred_continue?.trade_headers || [];
  const rev_1h =
    model.rev_1h?.pred_reverse?.trade_results?.['Potential Trade'] || [];
  const rev_v4 =
    model.rev_v4?.pred_reverse?.trade_results?.['Potential Trade'] || [];
  const rev_v5 =
    model.rev_v5?.pred_reverse?.trade_results?.['Potential Trade'] || [];
  const rev_headers = model.rev_1h?.pred_reverse?.trade_headers || [];
  const comments = model.key_results?.comments || [];
  const key_results = model.key_results || [];

  const histflashClass = useFlashClass(key_results?.potential_trade?.hist);
  const contflashClass = useFlashClass(key_results?.potential_trade?.cont);
  const revflashClass = useFlashClass(key_results?.potential_trade?.rev);

  return (
    <div>

   
          <div className="price-notifications">
            <div className="price-notification">
              <span className="label">Date:</span>
              <span className="value">date</span>
            </div>
            <div className="price-notification">
              <span className="label">Open Price:</span>
              <span className="value">£{parseFloat(key_results?.current_market?.open_prices[3]).toFixed(2)}</span>
            </div>
            <div className="price-notification">
              <span className="label">Current Price:</span>
              <span className="value">£{parseFloat(key_results?.current_market?.close_prices[3]).toFixed(2)}</span>
            </div>
            <div className="price-notification">
              <span className="label">Estimated Volume:</span>
              <span className="value">{parseFloat(key_results?.current_market?.projected_volume).toFixed(0)}</span>
            </div>

            {/* {volume && secondVolume > 3000 && (
              <div className="price-notification">
                <div className="flash-container-orange">
                  <div className="flash-box-orange">
                    <span className="label">Previous Volume:</span>
                    <span>{secondVolume}</span>
                  </div>
                </div>
              </div>
            )} */}
          </div>







      <h1>Model Report</h1>
      <input
        type="text"
        value={currencyId}
        onChange={handleInputChange}
        placeholder="Enter Currency ID"
      />
      <button onClick={() => dispatch(modelResults(currencyId))}>
        Fetch Report
      </button>{' '}
      {/* Button to fetch data */}



      <h1>Trade Opportunity </h1>
      <p style={{ fontSize: '20px', color: 'Red', fontWeight: 'bold' }}>
      Last update: {formatted_date} UTC
      </p>


      <table className="table-bordered-custom" >
        <tbody  >
          <tr className="purple-row">
            <td>Trade direction:</td>
            <td>
              <b>{key_results?.potential_trade?.hist}</b>
            </td>
          </tr>
          <tr className="red-row">
            <td>Stop loss:</td>
            <td>
              <b>£{parseFloat(key_results?.trade_strategy?.stop_loss).toFixed(2)}</b>
            </td>
          </tr>
          <tr className="blue-row">
            <td>Best Entry point:</td>
            <td>
              <b>
                £
                {parseFloat(key_results?.trade_strategy?.open_price) >
                parseFloat(key_results?.trade_strategy?.entry_point)
                  ? `${parseFloat(key_results?.trade_strategy?.entry).toFixed(2)} - ${parseFloat(
                      key_results?.trade_strategy?.open_price
                    ).toFixed(2)}`
                  : `${parseFloat(key_results?.trade_strategy?.open_price).toFixed(2)} - ${parseFloat(
                      key_results?.trade_strategy?.entry
                    ).toFixed(2)}`}
              </b>
            </td>
          </tr>
          <tr className="green-row">
            <td>Target point:</td>
            <td>
              <b>£{parseFloat(key_results?.trade_strategy?.exit).toFixed(2)}</b>
            </td>
          </tr>
          <tr className="orange-row">
            <td>Risk Reward ratio:</td>
            <td>
              <b>{parseFloat(key_results?.trade_strategy?.risk_reward).toFixed(2)}</b>
            </td>
          </tr>
          <tr>
            <td>Average Open Price:</td>
            <td>
              <b>£{parseFloat(key_results?.current_market?.average_open_price).toFixed(2)}</b>
            </td>
          </tr>
          <tr className="pink-row">
            <td>1hr Upper Bollinger Band:</td>
            <td>
              <b>£{parseFloat(key_results?.bb_target1?.hist?.upper_bb1).toFixed(2)}</b>
            </td>
          </tr>
          <tr className="pink-row">
            <td>1hr Lower Bollinger Band:</td>
            <td>
              <b>£{parseFloat(key_results?.bb_target1?.hist?.lower_bb1).toFixed(2)}</b>
            </td>
          </tr>
          <tr className="pink-row">
            <td>4hr Upper Bollinger Band:</td>
            <td>
              <b>£{parseFloat(key_results?.bb_target4?.hist?.upper_bb4).toFixed(2)}</b>
            </td>
          </tr>
          <tr className="pink-row">
            <td>4hr Lower Bollinger Band:</td>
            <td>
              <b>£{parseFloat(key_results?.bb_target4?.hist?.lower_bb4).toFixed(2)}</b>
            </td>
          </tr>
        </tbody>
      </table>

      <h1>History to Current </h1>
      {/* Flashing text for comments.hist */}
      <p className={`comment ${histflashClass}`}>{comments.hist}</p>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {hist_1h && hist_1h.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark font-weight-bold">
            <tr>
              <th>Model</th>
              {hist_headers
                ? hist_headers.map((item, index) => (
                    <th key={index} className="font-weight-bold text-center">
                      {item}
                    </th> // Render each trade header in a cell
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v4</td>
              {hist_v4
                ? hist_v4.map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>v5</td>
              {hist_v5
                ? hist_v5.map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>1h_v5</td>
              {hist_1h
                ? hist_1h.map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>Volume</td>
              {key_results?.current_market?.volume
                ? key_results?.current_market?.volume.map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>v4 Profit / Loss</td>
              {key_results?.hist_trade_outcome?.v4_pl
                ? key_results?.hist_trade_outcome?.v4_pl.map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>v5 Profit / Loss</td>
              {key_results?.hist_trade_outcome?.v5_pl
                ? key_results?.hist_trade_outcome?.v5_pl.map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No trades available.</p>
      )}
      <h1>Continuation of a Buy</h1>
      <p className={`comment ${contflashClass}`}>{comments.cont}</p>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cont_1h && cont_1h.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark font-weight-bold">
            <tr>
              <th>Model</th>
              {cont_headers
                ? [...cont_headers].reverse().map((item, index) => (
                    <th key={index} className="font-weight-bold text-center">
                      {item}
                    </th> // Render each trade header in a cell
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v4</td>
              {cont_v4
                ? [...cont_v4].reverse().map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>v5</td>
              {cont_v5
                ? [...cont_v5].reverse().map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>1h_v5</td>
              {cont_1h
                ? [...cont_1h].reverse().map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No trades available.</p>
      )}
      <h1>Continuation of a Buy</h1>
      <p className={`comment ${revflashClass}`}>{comments.rev}</p>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {rev_1h && rev_1h.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark font-weight-bold">
            <tr>
              <th>Model</th>
              {rev_headers
                ? [...rev_headers].reverse().map((item, index) => (
                    <th key={index} className="font-weight-bold text-center">
                      {item}
                    </th> // Render each trade header in a cell
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v4</td>
              {rev_v4
                ? [...rev_v4].reverse().map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>v5</td>
              {rev_v5
                ? [...rev_v5].reverse().map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
            <tr>
              <td>1h_v5</td>
              {rev_1h
                ? [...rev_1h].reverse().map((item, index) => (
                    <td key={index} className="text-center">
                      {item}
                    </td> // Render each trade result in a cell
                  ))
                : null}
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No trades available.</p>
      )}
    </div>
  );
}

export default ModelReportScreen;
