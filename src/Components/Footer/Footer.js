import SocialIcons from './SocialIcons/SocialIcons';

import classes from './Footer.module.scss';
import Logo from '../../Asset/Images/m-logo.png';

const footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.LogoContent}>
        <img src={Logo} alt='footer Logo' />
        <p>
          Living, learning, & leveling up <br />
          one day at a time.
        </p>
      </div>

      <SocialIcons />

      <p className={classes.Credits}>
        made with{' '}
        <span>
          <i className='fas fa-heart'></i>
        </span>
        by Manish Mandal
      </p>
    </div>
  );
};

export default footer;
