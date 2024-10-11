// src/hooks/useFlashClass.js
import { useState, useEffect } from 'react';
import '../styles/FlashingMessage.css';

export function useFlashClass(trade) {
  const [flashClass, setFlashClass] = useState('');

  useEffect(() => {
    if (trade === 'Sell') {
      setFlashClass('flash-background-red');
    } else if (trade === 'Buy') {
      setFlashClass('flash-background-green');
    } else {
      setFlashClass('');
    }

    if (flashClass) {
      const intervalId = setInterval(() => {
        setFlashClass((prevClass) =>
          prevClass === '' ? (trade === 'Sell' ? 'flash-background-red' : 'flash-background-green') : ''
        );
      }, 500); // Flash every 500ms

      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }
  }, [trade, flashClass]);

  return flashClass;
}