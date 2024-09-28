import React from 'react';

const CorouselImage = ({ text,imgUrl }) => {
  return (
    <img
      className="d-block w-100"
      src={imgUrl}
      alt={text}
    />
  );
};

export default CorouselImage;
