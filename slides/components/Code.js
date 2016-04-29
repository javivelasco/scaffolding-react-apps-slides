import React, { PropTypes } from 'react';

const Code = ({ className, html, ...other }) => (
  <pre className={`language-jsx ${className}`} style={{ fontSize: 16 }} {...other}>
    <code dangerouslySetInnerHTML={{__html: html}} />
  </pre>
);

Code.propTypes = {
  className: PropTypes.string,
  html: PropTypes.string.isRequired
};

export default Code;
