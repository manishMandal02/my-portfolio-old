import React from 'react';

import classes from './Portfolio.module.scss';

//images
import deskTopImg from '../../../Asset/Images/portfolio-desktop-mockup.png';
import mobileImg from '../../../Asset/Images/portfolio-mobile-mockup.png';
import growmartAdmin from '../../../Asset/Images/growmart-admin-desktop-mockup.png';
import todo from '../../../Asset/Images/todo-desktop-mockup.png';
import growmart from '../../../Asset/Images/growmart-desktop-mockup.png';

//techstack
import html from '../../../Asset/Images/html5.png';
import css from '../../../Asset/Images/css.png';
import javascript from '../../../Asset/Images/javascript.png';
import react from '../../../Asset/Images/react.png';
import matrialUi from '../../../Asset/Images/material-ui.png';
import sass from '../../../Asset/Images/sass.png';
import heroku from '../../../Asset/Images/heroku.png';
import vsCode from '../../../Asset/Images/vs-code.png';
import git from '../../../Asset/Images/git.png';
import npm from '../../../Asset/Images/npm.png';
import chrome from '../../../Asset/Images/chrome.png';
import { Link } from 'react-router-dom';

const PortfolioProject = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.TopContainer}>
        <div className={classes.LeftWrapper}>
          <p>My Portfolio Site</p>
          <p>Portfolio Site with ReactJs</p>
          <span>
            <p>ReactJs</p>
            <p>HTML</p>
            <p>JavaScript</p>
            <p>SCSS</p>
            <p>Frontend</p>
            <p>MobileFirst</p>
          </span>
          <div className={classes.ButtonWrapper}>
            <a
              href='https://github.com/manishMandal02/my-portfolio'
              rel='noreferrer'
              target='_blank'
            >
              View Code on GitHub<i className='fab fa-github'></i>
            </a>
            <a
              href='https://manishmandal.netlify.app/'
              rel='noreferrer'
              target='_blank'
            >
              Visit Site<i className='fas fa-external-link-alt'></i>
            </a>
          </div>
        </div>
        <div className={classes.RightWrapper}>
          <img src={mobileImg} alt='mobileVeiw' loading='lazy' />
          <img src={deskTopImg} alt='desktopVeiw' loading='lazy' />
        </div>
        <div className={classes.RightWrapperMobile}>
          <img src={deskTopImg} alt='desktopVeiw' loading='lazy' />
        </div>
      </div>
      <div className={classes.BottomContainer}>
        <p>
          <i className='fas fa-layer-group'></i>Technology Stack
        </p>

        <div className={classes.ListContainer}>
          <p className={classes.List}>
            <img loading='lazy' src={html} alt='' />
            HTML
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={css} alt='' />
            CSS
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={javascript} alt='' />
            JavaScript
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={react} alt='' />
            ReactJs
          </p>

          <p className={classes.List}>
            <img loading='lazy' src={sass} alt='' />
            Sass
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={matrialUi} alt='' />
            Material-UI
          </p>
          <p className={classes.List}>
            <img
              loading='lazy'
              src={vsCode}
              alt=''
              style={{ width: '40px', height: '40px' }}
            />
            VS Code
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={git} alt='' />
            Git
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={heroku} alt='' />
            Heroku
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={npm} alt='' />
            npm
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={chrome} alt='' />
            Developer Tools
          </p>
        </div>
        <p>
          <i className='fas fa-link'></i>Links
        </p>
        <ul>
          <li>
            Website Live demo -{' '}
            <a
              href='https://manishmandal.netlify.com/'
              rel='noreferrer'
              target='_blank'
            >
              https://manishmandal.netlify.com
            </a>
          </li>
          <li>
            Github respository -{' '}
            <a
              href='https://github.com/manishMandal02/my-portfolio'
              rel='noreferrer'
              target='_blank'
            >
              https://github.com/manishMandal02/my-portfolio
            </a>
          </li>
        </ul>
        <p>
          <i className='fas fa-list-alt'></i>Features
        </p>
        <ul className={classes.Features}>
          <li>My Personal Portfolio Website</li>
          <li>Contact page, Projects page, Mobile-First design</li>
        </ul>
        <p>
          <i className='fas fa-briefcase'></i>More Projects
        </p>
      </div>
      <div className={classes.MoreProjects}>
        <div className={classes.Card}>
          <img
            src={growmartAdmin}
            className={classes.Image}
            alt='recent-works'
          />
          <div className={classes.HoveredCard}>
            <span>
              <p>Ecommerce</p>
              <p>AdminPanel</p>
              <p>ReactJs</p>
              <p>SCSS</p>
              <p>Fullstack</p>
              <p>RestAPI</p>
              <p>Authentication</p>
            </span>
            <span>
              <Link to='/project/growmartAdmin'>More Info</Link>
              <a
                href='https://growmartadmin.netlify.app/'
                rel='noreferrer'
                target='_blank'
              >
                Visit Site<i className='fas fa-external-link-alt'></i>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.Card}>
          <img src={growmart} className={classes.Image} alt='recent-works' />
          <div className={classes.HoveredCard}>
            <span>
              <p>ReactJs</p>
              <p>Ecommerce</p>
              <p>SCSS</p>
              <p>Fullstack</p>
              <p>RestAPI</p>
              <p>Authentication</p>
              <p>MobileFirst</p>
              <p>PaymentGateway</p>
            </span>
            <span>
              <Link to='/project/growmart'>More Info</Link>
              <a
                href='https://growmart.netlify.app/'
                rel='noreferrer'
                target='_blank'
              >
                Visit Site<i className='fas fa-external-link-alt'></i>
              </a>
            </span>
          </div>
        </div>

        <div className={classes.Card}>
          <img src={todo} className={classes.Image} alt='recent-works' />
          <div className={classes.HoveredCard}>
            <span>
              <p>TodoList</p>
              <p>VoiceAssistant</p>
              <p>VoiceAssistant</p>
              <p>ReactJs</p>
              <p>Fullstack</p>
              <p>CRUD</p>
              <p>RestAPI</p>
              <p>MobileFirst</p>
            </span>
            <span>
              <Link to='/project/todo'>More Info</Link>
              <a
                href='https://todo-voice.netlify.app/'
                rel='noreferrer'
                target='_blank'
              >
                Visit Site<i className='fas fa-external-link-alt'></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
