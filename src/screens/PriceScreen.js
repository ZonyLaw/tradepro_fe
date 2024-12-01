import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import {listPrices} from '../actions/priceActions'

function PriceScreen(tickerId) {

const { id } = useParams();
const dispatch = useDispatch();
const pricelist = useSelector(state => state.priceList)
const {error, loading, prices} = pricelist

useEffect(()=>{
    dispatch(listPrices(id))

    }, [dispatch, id])

    return (
      <div>
        <h1>Prices for Ticker ID: {prices?.full_name || "Unknown"}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : prices && prices.prices ? ( // Check if prices and prices.prices are defined
          <table className="table-bordered-custom" >
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Close</th>
                <th>Sentiment</th>
                <th>Trade</th>
              </tr>
            </thead>
            <tbody>
              {prices.prices.map((price) => (
                <tr key={price.id}>
                  <td>{new Date(price.date).toLocaleString()}</td>
                  <td>{price.open.toFixed(2)}</td>
                  <td>{price.close.toFixed(2)}</td>
                  <td>{price.buy_sentiment.toFixed(0)}%</td>
                  <td>{price.trade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No prices available.</p> // Add a fallback message in case there are no prices
        )}
      </div>
    );
  }
  
  export default PriceScreen;