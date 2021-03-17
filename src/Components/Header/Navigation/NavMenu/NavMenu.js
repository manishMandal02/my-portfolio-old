import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './NavMenu.module.scss';

const NavMenu = () => {
  //initialize
  const history = useHistory();

  const navigateTo = (el) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  };

  let testimonials;
  let recentWork;
  let about;

  useEffect(() => {
    // eslint-disable-next-line
    testimonials = document.querySelector('#testimonials');
    // eslint-disable-next-line
    recentWork = document.querySelector('#recent-work');
    // eslint-disable-next-line
    about = document.querySelector('#about');
    // eslint-disable-next-line
  }, []);

  const menuOpen = (e) => {
    let icon = e.target.closest('section');
    icon.style.display = 'none';
    icon.nextSibling.style.display = 'block';
  };

  const menuClosed = (e) => {
    let icon = e.target.closest('section');
    icon.style.display = 'none';
    icon.previousSibling.style.display = 'block';
  };

  return (
    <div>
      <div className={classes.NavMenu} id='navmenu'>
        <ul>
          <a href='#about-me' onClick={() => navigateTo(about)}>
            AboutMe
          </a>
          <a
            href='#recent-work'
            onClick={() =>
              recentWork.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start',
              })
            }
          >
            RecentWorks
          </a>
          <a href='#testimonials' onClick={() => navigateTo(testimonials)}>
            Testimonials
          </a>
          <button onClick={() => history.push('/contact-me')}>Say Hello</button>
        </ul>
      </div>

      <div className={classes.MobileMenuContainer}>
        <section
          className={classes.BurgerIconContainer}
          onClick={(e) => menuOpen(e)}
        >
          <div className={classes.BurgerIcon}></div>
          <div className={classes.BurgerIcon}></div>
          <div className={classes.BurgerIcon}></div>
        </section>

        <section className={classes.BurgerMenuContainer}>
          <div className={classes.Cancel} onClick={(e) => menuClosed(e)}></div>

          <div className={classes.MenuLine}></div>

          <div className={classes.BurgerMenu}>
            <ul>
              <a
                href='#about-me'
                onClick={() => navigateTo(about)}
                className={classes.active}
              >
                AboutMe
              </a>
              <a
                href='#recent-work'
                onClick={() => navigateTo(recentWork)}
                className={classes.active}
              >
                RecentWorks
              </a>
              <a
                href='#testimonials'
                onClick={() => navigateTo(testimonials)}
                className={classes.active}
              >
                Testimonials
              </a>

              <button>Say Hello</button>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavMenu;
