// components/BlurCompo.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurCompo = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position
  const { width, height } = size 

  return (
    <div
      className="blur-component"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
      }}
    >
      <div
        className="blob"
      ></div>
    </div>
  );
};

// Define prop types
BlurCompo.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurCompo;

