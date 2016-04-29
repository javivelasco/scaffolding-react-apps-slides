import React from 'react';

const Polygon = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <polygon className="polygon" points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25 50,0" fill="#99E2DB">
      <animate id="shape01" begin="0;shape02.end + 1s" attributeName="points" dur="0.5s" fill="freeze" to="50,0 71.65,37.5 93.3,75 50,75 6.7,75 28.35,37.5 50,0" />
      <animate id="shape02" begin="shape01.end + 1s" attributeName="points" dur="0.5s" fill="freeze" to="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25 50,0" />
      <set attributeName="shape02" begin="shape01.end + 1s"/>
      <animateTransform id="rotate" attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" begin="0;rotate.end" dur="10s" fill="remove" />
    </polygon>
  </svg>
);

export default Polygon;
