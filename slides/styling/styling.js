import React from 'react';
import Code from '../components/Code';

const slides = [
  () => (
    <section>
      <h2>styling.</h2>
      <p className="change-colors">the big controversy.</p>
    </section>
  ),
  () => (
    <section>
      <h2>inline styles.</h2>
      <p>betting hard.</p>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/inline-styles.js')} />
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">no media queries.</h4>
      <h4 className="bullet">no pseudoelements.</h4>
      <h4 className="bullet">no cascade.</h4>
      <h4 className="bullet">difficult to customize.</h4>
      <h4 className="bullet">bad performance.</h4>
      <h4 className="bullet">no cache.</h4>
    </section>
  ),
  () => (
    <section>
      <h1>💩</h1>
    </section>
  ),
  () => (
    <section>
      <h2>css.</h2>
      <p className="secondary">same as always.</p>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/css.js')} />
    </section>
  ),
  () => (
    <section>
      <img style={{ maxWidth: 250 }} src={require('./images/webpack.png')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/import-css.js')} />
    </section>
  ),
  () => (
    <section>
      <h2>resolves in... ?</h2>
    </section>
  ),
  () => (
    <section>
      <img style={{ maxWidth: 250 }} src={require('./images/css-modules-logo.png')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=scss!./code/css-modules.scss')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/css-resolved.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/css-modules.js')} />
    </section>
  )
];

export default slides.reduce((result, slide, idx) => (
  { ...result, [`styling-${idx}`]: slide }
), {});
