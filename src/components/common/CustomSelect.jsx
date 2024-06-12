import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ option, value, onChange }) => {
  const transformedOptions = option.map(option => ({
    value: option.id,
    label: option.name
  }));

  const handleChange = selectedOption => {
    onChange(selectedOption); // Pass the selected option back to the parent component
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      options={transformedOptions}
      placeholder="Enter the question or search"
    />
  );
}

export default CustomSelect;
