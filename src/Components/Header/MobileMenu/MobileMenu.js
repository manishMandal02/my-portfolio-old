import { Link, useHistory } from 'react-router-dom';

import classes from './MobileMenu.module.scss';

const SideMenu = ({ open, close }) => {
  const history = useHistory();
  //handel close
  const closeMenuHandler = () => {
    const sideMenu = document.getElementById('sideMenu');
    const backdrop = document.getElementById('sideMenuBackdrop');
    if (sideMenu && backdrop) {
      sideMenu.style.width = '0';
      backdrop.style.display = 'none';
      document.body.style.overflowY = 'scroll';
    }
  };

  if (open) {
    const sideMenu = document.getElementById('sideMenu');
    const backdrop = document.getElementById('sideMenuBackdrop');
    if (sideMenu && backdrop) {
      sideMenu.style.width = '100%';
      backdrop.style.display = 'block';
      document.body.style.overflowY = 'hidden';
    }
  }
  if (!open) {
    closeMenuHandler();
  }
  //
  const closeMenu = () => {
    close();
  };
  //userInfo login status

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        id='sideMenuBackdrop'
        className={classes.Backdrop}
      ></div>
      <div id='sideMenu' className={classes.Container}>
        <div className={classes.CloseMenu} onClick={closeMenu}>
          <i className='fas fa-times'></i>
        </div>

        <ul>
          <Link
            to='#'
            onClick={() => {
              closeMenu();
              history.push('/about');
            }}
          >
            AboutMe
          </Link>
          <Link
            to='#'
            onClick={() => {
              closeMenu();

              history.push('/recentWork');
            }}
          >
            Projects
          </Link>
          <Link
            to='#'
            onClick={() => {
              closeMenu();

              history.push('/testimonials');
            }}
          >
            Testimonials
          </Link>
          <a href='/my-resume.pdf' rel='noreferrer' target='_blank'>
            <i
              style={{ marginRight: '.1em', color: 'e4e4e4' }}
              class='fas fa-file-pdf'
            ></i>
            Resume
          </a>
          <Link to='/contact' onClick={closeMenu}>
            Say Hello
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
