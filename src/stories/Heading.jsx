import './Heading.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({ level, children }) => {
  return <h1 className="heading">{children}</h1>;
};

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  level: 1,
};
