import React from 'react';

import { Link } from 'react-router-dom';

import NotFoundPageImage from '../../Asset/Images/404.svg';

import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={classes.Container}>
      <img src={NotFoundPageImage} alt='404' />
      <p>Page Not Found</p>
      <Link to='/'>Return Home</Link>
    </div>
  );
};

export default NotFoundPage;
