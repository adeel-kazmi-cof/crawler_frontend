import React from 'react';
import StarRating from 'react-rating-stars-component';

const CustomRating = ({ handleRatingChange, value = 0 }) => {
  return (
    <>
      <StarRating
        value={value}
        count={5}
        size={20}
        onChange={handleRatingChange}
        activeColor="#FFD700"
      />
    </>
  );
};

export default CustomRating;
