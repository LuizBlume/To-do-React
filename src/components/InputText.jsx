// src/components/InputText.jsx
import React from 'react';
const Input = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Enter a task"
    />
  );
};

export default Input;
