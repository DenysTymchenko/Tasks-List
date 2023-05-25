import { useState } from 'react';

export default function useFormValidation() {
  const [inputValue, setInputValue] = useState('');

  const isInputValid = (minLength, maxLength) => {
    if (inputValue.length < minLength || inputValue > maxLength) return false;
    else return true;
  }

  return [setInputValue, isInputValid];
}
