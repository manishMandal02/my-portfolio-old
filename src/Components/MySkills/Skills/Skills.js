import classes from './Skills.module.scss';

import frontend from '../../../Asset/Images/html-dev.svg';
import backend from '../../../Asset/Images/backend.png';
import app from '../../../Asset/Images/app-developer.png';
import designer from '../../../Asset/Images/designer-pencil.svg';

//techstack
import html from '../../../Asset/Images/html5.png';
import css from '../../../Asset/Images/css.png';
import javascript from '../../../Asset/Images/javascript.png';
import react from '../../../Asset/Images/react.png';
import redux from '../../../Asset/Images/redux.png';
import matrialUi from '../../../Asset/Images/material-ui.png';
import sass from '../../../Asset/Images/sass.png';
import nodeJs from '../../../Asset/Images/node-js.png';
import express from '../../../Asset/Images/express.png';
import mongodb from '../../../Asset/Images/mongodb.png';
import jwt from '../../../Asset/Images/jwt.png';
import heroku from '../../../Asset/Images/heroku.png';
import vsCode from '../../../Asset/Images/vs-code.png';
import git from '../../../Asset/Images/git.png';
import xd from '../../../Asset/Images/adobe-xd.png';
import npm from '../../../Asset/Images/npm.png';
import chrome from '../../../Asset/Images/chrome.png';
import electron from '../../../Asset/Images/electron.png';
import androidStudio from '../../../Asset/Images/android-studio.png';
import graphql from '../../../Asset/Images/graphql.png';
import socketIO from '../../../Asset/Images/socket-io.png';

const skills = () => (
  <div className={classes.Skills}>
    <div className={classes.Card}>
      <img src={frontend} alt='front-end' />
      <p>Front-end Developer</p>
      <p className={classes.Heading}>Languages, Libraries & Tools</p>
      <div className={classes.ListContainer}>
        <p className={classes.List}>
          <img src={html} alt='' />
          HTML
        </p>
        <p className={classes.List}>
          <img src={css} alt='' />
          CSS
        </p>
        <p className={classes.List}>
          <img src={javascript} alt='' />
          JavaScript
        </p>
        <p className={classes.List}>
          <img src={react} alt='' />
          ReactJs
        </p>
        <p className={classes.List}>
          <img src={redux} alt='' />
          Redux
        </p>
        <p className={classes.List}>
          <img src={sass} alt='' />
          Sass
        </p>
        <p className={classes.List}>
          <img src={matrialUi} alt='' />
          Material-UI
        </p>
      </div>
    </div>
    <div className={classes.Line}> </div>
    <div className={classes.Card}>
      <img src={backend} alt='front-end' />
      <p>Back-end Developer</p>
      <p className={classes.Heading}>Languages, Libraries & Tools</p>
      <div className={classes.ListContainer}>
        <p className={classes.List} style={{ marginBottom: '.2em' }}>
          <img src={nodeJs} alt='' />
          NodeJs
        </p>
        <p className={classes.List} style={{ marginBottom: '.2em' }}>
          <img src={express} alt='' />
          Express
        </p>
        <p className={classes.List}>
          {' '}
          <img src={javascript} alt='' />
          JavaScript
        </p>
        <p className={classes.List}>
          <img
            src={mongodb}
            alt=''
            style={{ width: '20px', marginRight: '10px' }}
          />
          MongoDB
        </p>
        <p className={classes.List}>
          {' '}
          <img src={socketIO} alt='' />
          Socket.io
        </p>
        <p className={classes.List}>
          {' '}
          <img src={graphql} alt='' />
          GraphQl*
        </p>
        <p className={classes.List}>
          {' '}
          <img src={jwt} alt='' style={{ width: '28px', marginRight: '6px' }} />
          JWT
        </p>
      </div>
    </div>
    <div className={classes.Line}> </div>
    <div className={classes.Card}>
      <img src={app} alt='front-end' />
      <p>App Developer</p>
      <p className={classes.Heading}>Languages, Libraries & Tools</p>
      <div className={classes.ListContainer}>
        <p className={classes.List}>
          <img src={nodeJs} alt='' />
          NodeJs
        </p>
        <p className={classes.List}>
          <img src={javascript} alt='' />
          JavaScript
        </p>
        <p className={classes.List}>
          <img src={react} alt='' />
          React Native*
        </p>
        <p className={classes.List}>
          <img src={electron} alt='' />
          ElectronJs*
        </p>
        <p className={classes.List}>
          <img src={androidStudio} alt='' />
          Android Studio
        </p>
      </div>
    </div>
    <div className={classes.Line}> </div>
    <div className={classes.Card}>
      <img src={designer} alt='front-end' />
      <p>Other</p>
      <p className={classes.Heading}>Libraries & Tools</p>
      <div className={classes.ListContainer} style={{ paddingLeft: '26px' }}>
        <p className={classes.List}>
          <img src={vsCode} alt='' />
          VS Code
        </p>
        <p className={classes.List}>
          <img src={git} alt='' />
          Git
        </p>
        <p className={classes.List}>
          <img src={react} alt='' />
          React Native
        </p>
        <p className={classes.List}>
          <img src={heroku} alt='' />
          Heroku
        </p>
        <p className={classes.List}>
          <img src={npm} alt='' />
          npm
        </p>
        <p className={classes.List}>
          <img src={xd} alt='' />
          Adobe XD
        </p>
        <p className={classes.List}>
          <img src={chrome} alt='' />
          Developer Tools
        </p>
      </div>
    </div>
  </div>
);

export default skills;
