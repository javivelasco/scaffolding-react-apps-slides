import React from 'react';
import Code from '../components/Code';

const slides = [
  () => (
    <section>
      <h2>data fetching.</h2>
      <p className="change-colors">universal modeling.</p>
    </section>
  ),
  () => (
    <section>
      <h2>how?</h2>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/typical-response.js')} />
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">nesting in the collection.</h4>
      <h4 className="bullet">author is a role.</h4>
      <h4 className="bullet">duplication.</h4>
    </section>
  ),
  () => (
    <section>
      <h2>normalizr.</h2>
      <p className="secondary">normalizes nested json api responses according to a schema</p>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/normalizr.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/normalizr-response.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/normalizr-reducer.js')} />
    </section>
  ),
  () => (
    <section>
      <h2>when?</h2>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/fetch-cycle.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/fetch-cycle-connect.js')} />
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">the component knows too much.</h4>
      <h4 className="bullet">it needs an extra prop.</h4>
      <h4 className="bullet">it does not work in the server.</h4>
      <h4 className="bullet">it does not fetch until mounted.</h4>
    </section>
  ),
  () => (
    <section>
      <h2>redial.</h2>
      <p>universal data fetching and route lifecycle management.</p>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/redial.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/redial-config.js')} />
    </section>
  ),
  () => (
    <section>
      <h4>a component triggers <span className="change-colors">always</span> the action needed to fetch its data.</h4>
    </section>
  )
];

export default slides.reduce((result, slide, idx) => (
  { ...result, [`data-fetching-${idx}`]: slide }
), {});
