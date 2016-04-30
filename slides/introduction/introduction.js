import './style.scss';

import React from 'react';
import Code from '../components/Code';
import ReactLogo from './components/ReactLogo';
import Shark from './components/Shark';

const slides = [
  () => (
    <section data-bespoke-backdrop="globe">
      <h1 style={{ marginBottom: 0, paddingBottom: 0 }}>react.</h1>
    </section>
  ),
  () => (
    <section>
      <ReactLogo style={{ width: 100 }} />
      <h3>a javascript library for building user interfaces.</h3>
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">just the ui.</h4>
      <h4 className="bullet">one way reactive data flow.</h4>
      <h4 className="bullet">virtual dom.</h4>
      <h4 className="bullet">the app is a component tree.</h4>
    </section>
  ),
  () => (
    <section style={{ fontSize: 16 }}>
      <Code html={require('!!prismjs?lang=jsx!./code/counter.js')} />
    </section>
  ),
  () => (
    <section>
      <h4>re-rendering means no more <span className="change-colors">double data binding</span>.</h4>
    </section>
  ),
  () => (
    <section>
      <img style={{ width: 280 }} src={require('./images/traditional.png')} />
    </section>
  ),
  () => (
    <section>
      <h1 style={{margin: 0, padding: 0}}>flux.</h1>
      <Shark style={{width: 240}} />
    </section>
  ),
  () => (
    <section>
      <img style={{ width: 420 }} src={require('./images/flux.png')} />
    </section>
  ),
  () => (
    <section>
      <span style={{marginBottom: 20, transform: 'scale(3)'}}>🤔</span>
      <h4>an spa with react?</h4>
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">store and effects.</h4>
      <h4 className="bullet">routing.</h4>
      <h4 className="bullet">data fetching.</h4>
      <h4 className="bullet">styling.</h4>
      <h4 className="bullet">server side rendering.</h4>
    </section>
  ),
  () => (
    <section data-bespoke-backdrop="lego">
      <h3 style={{ width: 650 }}>scaffolding complex applications with react</h3>
      <p>@javivelasco</p>
    </section>
  )
];

export default slides.reduce((result, slide, idx) => (
  { ...result, [`introduction-${idx}`]: slide }
), {});
