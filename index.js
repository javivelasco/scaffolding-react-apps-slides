import './bespoke/theme.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import bespoke from './bespoke';
import slides from './slides/index';

const Presentation = () => {
  const Slides = Object.keys(slides).map(key => (
    typeof slides[key] === 'function'
      ? React.createElement(slides[key], { key })
      : null
  ));
  return <article>{Slides}</article>;
};

ReactDOM.render(<Presentation />, document.getElementById('presentation'));
bespoke();
