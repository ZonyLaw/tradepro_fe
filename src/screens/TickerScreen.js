import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect, useState } from 'react';
import {listTickers} from '../actions/tickerActions'

function TickerScreen() {

const dispatch = useDispatch();
const tickerlist = useSelector(state => state.tickerList)
const {error, loading, tickers} = tickerlist

useEffect(()=>{

    dispatch(listTickers())

    }, [dispatch])

  return (
    <div>
      <p>Tickers</p>

      <ul>
        {tickers.map((ticker, index) => (
          <li key={index}>{ticker.full_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TickerScreen;
