// src/components/InputText.jsx
import React from 'react';
const Input = ({ value, onChange }) => {
  // var input = document.getElementById('input');
  // input.addEventListener('keypress', function(e) {
  //   if (KeyboardEvent === "Enter") {
      
  //   }
  // })
  return (
    <input id='input' type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Enter a task"
    />
  );
};

export default Input;
