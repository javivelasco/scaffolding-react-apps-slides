import React from 'react';
import Code from '../components/Code';

const slides = [
  () => (
    <section>
      <h2>server side rendering.</h2>
      <p className="change-colors">the final boss</p>
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">react uses a virtual dom.</h4>
      <h4 className="bullet">in can render into a string.</h4>
      <h4 className="bullet">that string can be interpolated in the page</h4>
      <h4 className="bullet">when react loads it reuses the markup</h4>
      <h4 className="bullet change-colors">same routing.</h4>
    </section>
  ),
  () => (
    <section>
      <Code
        style={{ fontSize: 14 }}
        html={require('!!prismjs?lang=jsx!./code/resolve-routes.js')}
      />
    </section>
  ),
  () => (
    <section>
      <Code style={{ fontSize: 14 }} html={require('!!prismjs?lang=jsx!./code/render-full-page.js')} />
    </section>
  ),
  () => (
    <section>
      <h2>and what about fetching?</h2>
    </section>
  ),
  () => (
    <section>
      <Code
        style={{ fontSize: 14 }}
        html={require('!!prismjs?lang=jsx!./code/server-side-fetching.js')}
      />
    </section>
  ),
  () => (
    <section>
      <Code style={{ fontSize: 14 }} html={require('!!prismjs?lang=jsx!./code/get-api-client.js')} />
    </section>
  ),
  () => (
    <section>
      <h2>but... es6 in the server?</h2>
    </section>
  ),
  () => (
    <section>
      <Code style={{ fontSize: 14 }} html={require('!!prismjs?lang=jsx!./code/require-es6.js')} />
    </section>
  ),
  () => (
    <section>
      <Code style={{ fontSize: 14 }} html={require('!!prismjs?lang=jsx!./code/require-css.js')} />
    </section>
  )
];

export default slides.reduce((result, slide, idx) => (
  { ...result, [`server-side-${idx}`]: slide }
), {});
