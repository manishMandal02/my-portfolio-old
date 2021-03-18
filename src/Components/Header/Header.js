import { useLocation } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Title from './Title/Title';
import Avatar from './Avatar/Avatar';
import MainImage from './MainImage/MainImage';
import classes from './Header.module.css';
import FloatingSocialIcons from './FloatingSocialIcons/FloatingSocialIcons';

const Header = () => {
  const location = useLocation();
  return (
    <div className={classes.Container}>
      <Navigation />
      {location.pathname === '/' && (
        <>
          {' '}
          <Title />
          <Avatar />
          <MainImage />{' '}
        </>
      )}
      <FloatingSocialIcons />
    </div>
  );
};

export default Header;
