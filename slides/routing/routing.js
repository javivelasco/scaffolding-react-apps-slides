import React from 'react';
import Code from '../components/Code';

const slides = [
  () => (
    <section>
      <h2>routing.</h2>
      <p className="change-colors">just more data to decide</p>
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">the view depends on the stored data.</h4>
      <h4 className="bullet">with routing, it depends on the url as well.</h4>
      <h4 className="bullet">
        components talk to the <span className="change-colors">history api.</span>
      </h4>
    </section>
  ),
  () => (
    <section>
      <h2>react-router.</h2>
      <p>keep in sync your ui with the url.</p>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/react-router.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/user-route.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/link.js')} />
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">what happens when a link is clicked?</h4>
      <h4 className="bullet">and what about redirections?</h4>
      <h4 className="bullet">strictly speaking, those are actions.</h4>
      <h4 className="bullet">the route is application state.</h4>
      <h4 className="bullet">but react-router <span className="change-colors">does not know</span> about redux.</h4>
    </section>
  ),
  () => (
    <section>
      <h2>react-redux-router.</h2>
      <p>keep in sync redux and react-router</p>
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/react-router-redux.js')} />
    </section>
  ),
  () => (
    <section>
      <Code html={require('!!prismjs?lang=jsx!./code/action-redirect.js')} />
    </section>
  ),
  () => (
    <section>
      <h4 className="bullet">so...</h4>
        <p className="bullet">a route is mapped to a component tree.</p>
        <p className="bullet">a component can be connected to the store.</p>
        <p className="bullet">renders data depending on the store.</p>
        <p className="bullet">has actions creators bound to dispatch.</p>
        <p className="bullet">actions generate side effects changing store.</p>
        <p className="bullet">re-render happens depending on new state.</p>
    </section>
  )
];

export default slides.reduce((result, slide, idx) => (
  { ...result, [`routing-${idx}`]: slide }
), {});
