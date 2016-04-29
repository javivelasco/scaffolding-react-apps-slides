import './style.scss';

import React from 'react';
import Code from '../components/Code';
import AudienseLogo from './components/AudienseLogo';
import Polygon from './components/Polygon';
import ToolboxLogo from './components/ToolboxLogo';

const slides = [
  () => (
    <section>
      <Polygon className="speaker-polygon" />
      <h1 className="speaker-hi">Hi.</h1>
    </section>
  ),
  () => (
    <section>
      <div className="speaker-card">
        <img className="speaker-avatar" src={require('./images/javivelasco.png')} />
        <Code
          className="speaker-code"
          html={require('!!prismjs?lang=jsx!./code/speaker.js')}
        />
      </div>
    </section>
  ),
  () => (
    <section>
      <ToolboxLogo className="toolbox-logo" />
      <h3 className="toolbox-name">react toolbox.</h3>
      <p className="toolbox-subtitle">
        bootstrap your application with beautiful material design components.
      </p>
      <div className="toolbox-stars">
        <iframe
          frameBorder='0'
          scrolling='0'
          src='https://ghbtns.com/github-btn.html?user=react-toolbox&amp;repo=react-toolbox&amp;type=star&amp;count=true'
        />
      </div>
  </section>
  ),
  () => (
    <section>
      <AudienseLogo className="audiense-logo" />
      <p className="change-colors">smart social intelligence.</p>
  </section>
  )
];

export default slides.reduce((result, slide, idx) => (
  { ...result, [`speaker-${idx}`]: slide }
), {});
