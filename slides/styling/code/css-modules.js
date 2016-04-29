import React from 'react';
import style from './Card.scss';

const Card = ({ heading, footer, children, ...other }) => (
  <div {...other}>
    <header className={style.header}>{heading}</header>
    <div className={style.body}>{children}</div>
    <footer className={style.footer}>{footer}</footer>
  </div>
);

export default Card;
