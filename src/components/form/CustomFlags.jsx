// Flag.js
import React from 'react';
import Flags from 'react-flags-select';

const CustomFlags= ({ countryCode, onSelect }) => {
  const allCountryCodes = ['AF', 'AL', 'DZ', 'AD', 'AO', 'AR', /* ... add more codes */ ];

  const options = {};
  allCountryCodes.forEach(code => {
    options[code] = code;
  });

  return (
    <div>
      <Flags
        selected={countryCode}
        onSelect={onSelect}  // Make sure to pass the onSelect prop
        options={options}
      />
    </div>
  );
};

export default CustomFlags;
