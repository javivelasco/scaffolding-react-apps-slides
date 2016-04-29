import './style.scss';

import React from 'react';

const slides = [
  () => (
    <section>
      <h2>conclusion.</h2>
      <p className="change-colors">what do we have.</p>
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">universal app.</h4>
      <h4 className="bullet">renders in client and server.</h4>
      <h4 className="bullet">able to prefetch data.</h4>
      <h4 className="bullet">fully reactive.</h4>
      <h4 className="bullet">with scoped css.</h4>
      <h4 className="bullet">base in small components.</h4>
      <h4 className="bullet">logic and view separated.</h4>
    </section>
  ),
  () => (
    <section>
      <div className="final-list">
        <div>
          <h4 className="bullet">react.</h4>
          <h4 className="bullet">redux.</h4>
          <h4 className="bullet">react-redux.</h4>
          <h4 className="bullet">react-router</h4>
          <h4 className="bullet">react-router-redux.</h4>
        </div>
        <div>
          <h4 className="bullet">normalizr.</h4>
          <h4 className="bullet">redial.</h4>
          <h4 className="bullet">webpack.</h4>
          <h4 className="bullet">css-modules.</h4>
          <h4 className="bullet">express.</h4>
        </div>
      </div>
    </section>
  ),
  () => (
    <section data-bespoke-backdrop="frank">
      <h3 style={{ width: 650 }}>first class monster.</h3>
      <p>thank u!</p>
    </section>
  )
];

export default slides.reduce((result, slide, idx) => (
  { ...result, [`conclusion-${idx}`]: slide }
), {});
