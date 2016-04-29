import React from 'react';
import './Card.scss';

const Card = ({ heading, footer, children, ...other }) => (
  <div {...other}>
    <header className="Card--Heading">{heading}</header>
    <div className="Card--Body">{children}</div>
    <footer className="Card--Footer">{footer}</footer>
  </div>
);

export default Card;
