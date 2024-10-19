// src/hooks/useFlashClass.js
import { useState, useEffect } from 'react';
import '../styles/FlashingMessage.css';

// This flashing class is for dealing with buy and sell condition.
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

// This flashing class is for dealing with buy, sell, and neutral condition.
export function useCommentFlashClass(trade, comment) {
  const [flashClass, setFlashClass] = useState('');

  useEffect(() => {

    if (comment?.includes('weak') || comment?.includes('retrace')) {
      setFlashClass('flash-background-blue');
    }
    else if (trade === 'Sell') {
      setFlashClass('flash-background-red');
    } else if (trade === 'Buy') {
      setFlashClass('flash-background-green');
    } else {
      setFlashClass('');
    }

  }, [trade, comment]);

  return flashClass;
}