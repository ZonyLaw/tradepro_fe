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

  }, [trade]);

  return flashClass;
}