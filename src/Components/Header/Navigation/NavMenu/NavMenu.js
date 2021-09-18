import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideMenu from '../../MobileMenu/MobileMenu';

import classes from './NavMenu.module.scss';

const NavMenu = () => {
  //initialize
  const location = useLocation();

  //state
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (el) => {
    const elNode = document.querySelector(el);
    if (elNode) {
      elNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  };
  let testimonials = '#testimonials';
  let projects = '#recentWorks';
  let about = '#about';

  useEffect(() => {
    if (location.pathname === '/about') {
      navigateTo(about);
    } else if (location.pathname === '/recentWork') {
      navigateTo(projects);
    } else if (location.pathname === '/testimonials') {
      navigateTo(testimonials);
    } else {
      document.body.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'start',
      });
    }
  }, [location, about, projects, testimonials]);

  return (
    <div className={classes.Container}>
      <div className={classes.NavMenu} id='navmenu'>
        <ul>
          <Link to='/about'>AboutMe</Link>
          <Link to='/recentWork'>RecentWork</Link>
          <Link to='/testimonials'>Testimonials</Link>
          <a href='/manish-mandal-resume.pdf' rel='noreferrer' target='_blank'>
            <i style={{ marginRight: '.1em', color: 'e4e4e4' }} class='fas fa-file-pdf'></i>
            Resume
          </a>
          <Link to='/contact'>Say Hello</Link>
        </ul>
      </div>

      <div className={classes.MobileMenuContainer}>
        <SideMenu open={menuOpen} close={() => setMenuOpen(false)} />
        <div
          onClick={() => {
            setMenuOpen(true);
          }}
          className={classes.MenuIcon}
        >
          <i className='fas fa-bars'></i>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
