import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { modelResults } from '../actions/modelActions'; // Assuming this is your action creator

function ModelReportScreen() {
  const [currencyId, setCurrencyId] = useState('USDJPY');
  const dispatch = useDispatch();

  // Use useSelector to access the state where modelResults are stored
  const { error, loading, model } = useSelector(state => state.modelResults);

  useEffect(() => {
    dispatch(modelResults(currencyId)); // Dispatch action to fetch model results using the 'id'
  }, [dispatch, currencyId]);

  
  const handleInputChange = (e) => {
    setCurrencyId(e.target.value); // Update currencyId state with user input
  };
  
  console.log(model.cont_1h)
  const hist_1h = model.hist_1h?.pred_historical?.trade_results?.['Potential Trade'] || [];
  const hist_v4 = model.hist_v4?.pred_historical?.trade_results?.['Potential Trade'] || [];
  const hist_v5 = model.hist_v5?.pred_historical?.trade_results?.['Potential Trade'] || [];
  const hist_headers = model.hist_1h?.pred_historical?.trade_headers || [];
  const cont_1h = model.cont_1h?.pred_continue?.trade_results?.['Potential Trade'] || [];
  const cont_v4 = model.cont_v4?.pred_continue?.trade_results?.['Potential Trade'] || [];
  const cont_v5 = model.cont_v5?.pred_continue?.trade_results?.['Potential Trade'] || [];
  const cont_headers = model.cont_1h?.pred_continue?.trade_headers || [];


  return (
    <div>

    <h1>Model Report</h1>
      <input
        type="text"
        value={currencyId}
        onChange={handleInputChange}
        placeholder="Enter Currency ID"
      />
      <button onClick={() => dispatch(modelResults(currencyId))}>Fetch Data</button> {/* Button to fetch data */}
      

    <h1>History to Current </h1>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {hist_1h && hist_1h.length > 0 ? (
      <table className="table table-striped table-bordered">
        <thead className="thead-dark font-weight-bold">
          <tr>
          <th>Model</th>
          {hist_headers ? hist_headers.map((item, index) => (
                <th key={index} className="font-weight-bold text-center">{item}</th> // Render each trade header in a cell
            )) : null}
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>v4</td>
          {hist_v4 ? hist_v4.map((item, index) => (
                <td key={index}  className="text-center">{item}</td> // Render each trade result in a cell
              )) : null}
          </tr>
          <tr>
          <td>v5</td>
          {hist_v5 ? [...hist_v5].reverse().map((item, index) => (
                <td key={index}  className="text-center">{item}</td> // Render each trade result in a cell
              )) : null}
          </tr>
          <tr>
          <td>1h_v5</td>
          {hist_1h ? [...hist_1h].reverse().map((item, index) => (
                <td key={index}  className="text-center">{item}</td> // Render each trade result in a cell
              )) : null}
          </tr>
        </tbody>
      </table>
    ) : (
      <p>No trades available.</p>
    )}

    <h1>Continuation of a Buy</h1>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {cont_1h && cont_1h.length > 0 ? (
      <table className="table table-striped table-bordered">
        <thead className="thead-dark font-weight-bold">
          <tr>
          <th>Model</th>
          {cont_headers ? [...cont_headers].reverse().map((item, index) => (
                <th key={index} className="font-weight-bold text-center">{item}</th> // Render each trade header in a cell
              )) : null}
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>v4</td>
          {cont_v4 ? [...cont_v4].reverse().map((item, index) => (
                <td key={index}  className="text-center">{item}</td> // Render each trade result in a cell
              )) : null}
          </tr>
          <tr>
          <td>v5</td>
          {cont_v5 ? [...cont_v5].reverse().map((item, index) => (
                <td key={index}  className="text-center">{item}</td> // Render each trade result in a cell
              )) : null}
          </tr>
          <tr>
          <td>1h_v5</td>
          {cont_1h ? [...cont_1h].reverse().map((item, index) => (
                <td key={index}  className="text-center">{item}</td> // Render each trade result in a cell
              )) : null}
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
