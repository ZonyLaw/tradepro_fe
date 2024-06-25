import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
        <h1>Prices for Ticker ID: {prices.full_name}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : prices && prices.prices ? ( // Check if prices and prices.prices are defined
          <ul>
            {prices.prices.map((price) => (
              <li key={price.id}>
             {/*    <p>Date: {new Date(price.date).toLocaleString()}</p> */}
                <p>Open: {price.open}</p>
                <p>Close: {price.close}</p>
                <p>Volume: {price.volume}</p>
                <p>Trade: {price.trade}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No prices available.</p> // Add a fallback message in case there are no prices
        )}
      </div>
    );
  }
  
  export default PriceScreen;