import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { modelResults } from '../actions/modelActions'; // Assuming this is your action creator

function ModelReportScreen() {
//   const { id } = useParams(); // Fetch the 'id' from the route params
  const dispatch = useDispatch();

  // Use useSelector to access the state where modelResults are stored
  const { error, loading, model } = useSelector(state => state.modelResults);

  useEffect(() => {
    dispatch(modelResults()); // Dispatch action to fetch model results using the 'id'
  }, [dispatch]);

  
 

  const trades = model?.pred_continue?.[2]?.trade_results?.['Potential Trade'];
  const headers = model?.pred_continue?.[1]?.trade_headers;


  return (
    <div>
    <h1>Continuation of a Buy</h1>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {trades && trades.length > 0 ? (
      <table className="table table-striped table-bordered">
        <thead className="thead-dark font-weight-bold">
          <tr>
          {headers ? [...headers].reverse().map((item, index) => (
                <th key={index} className="font-weight-bold text-center">{item}</th> // Render each trade header in a cell
              )) : null}
          </tr>
        </thead>
        <tbody>
          <tr>
          {trades ? [...trades].reverse().map((item, index) => (
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
