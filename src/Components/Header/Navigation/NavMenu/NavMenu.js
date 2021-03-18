import { useHistory, Link, useLocation } from 'react-router-dom';

import classes from './NavMenu.module.scss';

const NavMenu = () => {
  //initialize
  const history = useHistory();
  const location = useLocation();

  const scrollBy = () => {
    window.scrollBy(0, 40);
  };

  const navigateTo = (el) => {
    if (location.pathname !== '/') {
      history.push('/');
    }

    document.querySelector(el).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end',
    });
  };

  let testimonials = '#testimonials';
  let recentWork = '#recentWorks';
  let about = '#about';

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   testimonials = document.querySelector('#testimonials');
  //   // eslint-disable-next-line
  //   recentWork = document.querySelector('#recent-work');
  //   // eslint-disable-next-line
  //   about = document.querySelector('#about');
  //   // eslint-disable-next-line
  // }, []);

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
    <div className={classes.Container}>
      <div className={classes.NavMenu} id='navmenu'>
        <ul>
          <Link to='/' onClick={() => navigateTo(about)}>
            AboutMe
          </Link>
          <Link to='/' onClick={() => navigateTo(recentWork)}>
            RecentWorks
          </Link>
          <Link to='/' onClick={() => navigateTo(testimonials)}>
            Testimonials
          </Link>
          <button onClick={() => history.push('/contact')}>Say Hello</button>
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
              <Link
                to='#about-me'
                onClick={() => navigateTo(about)}
                className={classes.active}
              >
                AboutMe
              </Link>
              <Link
                to='#recent-work'
                onClick={() => {
                  navigateTo(recentWork);
                }}
                className={classes.active}
              >
                RecentWorks
              </Link>
              <Link
                to='#testimonials'
                onClick={() => navigateTo(testimonials)}
                className={classes.active}
              >
                Testimonials
              </Link>

              <button onClick={() => history.push('/contact')}>
                Say Hello
              </button>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavMenu;
