import Logo from './Logo/Logo';
import NavMenu from '../Navigation/NavMenu/NavMenu';

import classes from './Navigation.module.css';

const Navigation = () => {
  let myButton;

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    myButton = document.getElementById('myBtn');
    if (myButton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        myButton.style.display = 'block';
      } else {
        myButton.style.display = 'none';
      }
    }
  }

  function moveToTop() {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  return (
    <div className={classes.Navigation}>
      <Logo />
      <NavMenu />
      <button
        onClick={() => moveToTop()}
        id='myBtn'
        className={classes.MoveToTop}
        title='Go to top'
      >
        <i className='fas fa-arrow-up'></i>
      </button>
    </div>
  );
};

export default Navigation;
