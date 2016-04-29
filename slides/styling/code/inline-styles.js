import React from 'react';

const style = {
  backgroundColor: 'aliceblue',
  fontSize: 16,
  lineHeight: 1.5,
  marginLeft: 15
};

const Highlighted = (props) => (
  <span style={style} { ...props } />
);

export default Highlighted;
