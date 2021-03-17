import classes from './SocialIcons.module.scss';

const socialIcons = () => (
  <div className={classes.SocialIcons}>
    <a
      href='https://www.linkedin.com/in/manish-mandal/'
      target='blank'
      className={classes.Icons}
    >
      <i className='fab fa-linkedin-in'></i>
    </a>
    <a
      href='https://github.com/manishMandal02'
      target='blank'
      className={classes.Icons}
    >
      <i className='fab fa-github'></i>
    </a>
    <a
      href='mailto:manishmandalj@gmail.com'
      target='blank'
      className={classes.Icons}
    >
      <i className='far fa-envelope'></i>
    </a>
  </div>
);

export default socialIcons;
