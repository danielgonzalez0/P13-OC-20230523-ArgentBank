import React from 'react';
import PropTypes from 'prop-types';

/**
 * React component given the html structure of the features item
 * * @param {PropTypes} imgSrc path of the image
 * * @param {PropTypes} imgAlt alt tag of theimage
 * * @param {PropTypes} title title of the component
 * * @param {PropTypes} text content of the component
 * @returns {React.ReactElement} Features
 *
 */
const Features = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

Features.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Features;
