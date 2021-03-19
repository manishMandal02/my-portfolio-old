import classes from './WorkCard.module.scss';

import growmart from '../../../Asset/Images/growmart-desktop-mockup.png';
import todo from '../../../Asset/Images/todo-desktop-mockup.png';
import portfolio from '../../../Asset/Images/portfolio-desktop-mockup.png';
import growmartAdmin from '../../../Asset/Images/growmart-admin-desktop-mockup.png';
import { Link } from 'react-router-dom';

const workCard = () => (
  <div className={classes.CardContainer}>
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
      <img src={portfolio} className={classes.Image} alt='recent-works' />
      <div className={classes.HoveredCard}>
        <span>
          <p>PortfolioSite</p>
          <p>ReactJs</p>
          <p>HTML</p>
          <p>SCSS</p>
          <p>Frontend</p>
          <p>MobileFirst</p>
        </span>
        <span>
          <Link to='/project/portfolio'>More Info</Link>
          <a
            href='https:/manishmandal.netlify.com/'
            rel='noreferrer'
            target='_blank'
          >
            Visit Site<i className='fas fa-external-link-alt'></i>
          </a>
        </span>
      </div>
    </div>
    <div className={classes.Card}>
      <img src={growmartAdmin} className={classes.Image} alt='recent-works' />
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
);

export default workCard;
