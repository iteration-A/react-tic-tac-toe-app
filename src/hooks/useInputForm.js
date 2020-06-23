import { useState, useEffect } from 'react';

function useInputForm(charsLimit = 50, initialValue = '') {
  const [input, setInput] = useState(initialValue);
  const [isFull, setIsFull] = useState(false);

  const updateInput = ({ target: { value } }) => {
    if (value.length > charsLimit) return;
    setInput(value);
  };

  useEffect(() => {
    if (input.length >= charsLimit) setIsFull(true);
    else setIsFull(false);
  }, [input, charsLimit]);

  return [input, updateInput, isFull];
}

export default useInputForm;
