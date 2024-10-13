import { useState, useEffect } from 'react';

function useBuyOrSell(openPrices =[], closePrices =[]) {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    if (openPrices.length === closePrices.length) {
      const results = openPrices.map((openPrice, index) => {
        const closePrice = closePrices[index];
        return closePrice - openPrice > 0 ? 'Buy' : 'Sell';
      });

      setSignals(results);
    }
  }, [openPrices, closePrices]);

  return signals;
}

export default useBuyOrSell;
