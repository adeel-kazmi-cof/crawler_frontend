import React from 'react';
import '../../css/switch.css';

function Switch({ name, checked, onChange }) {
  return (
    <label className="switch">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;
