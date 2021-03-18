import { Link } from 'react-router-dom';

import classes from './FloatingSocialIcons.module.scss';

const FloatingSocialIcons = () => {
  const open = () => {
    const listItem = document.getElementsByClassName('list');
    const opener = document.getElementById('opener');
    opener.style.left = '-100%';
    listItem[0].style.left = '-0%';
    listItem[1].style.left = '-0%';
    listItem[2].style.left = '-0%';
    listItem[3].style.left = '-0%';
  };

  const close = () => {
    const listItem = document.getElementsByClassName('list');
    const opener = document.getElementById('opener');
    console.log(listItem[0]);
    listItem[0].style.left = '-100%';
    listItem[1].style.left = '-100%';
    listItem[2].style.left = '-100%';
    listItem[3].style.left = '-100%';
    opener.style.left = '0%';
  };

  return (
    <div className={`${classes.Container}`}>
      <div className={classes.List}>
        <button id='opener' onClick={open}>
          <i className='fas fa-angle-right'></i>
        </button>

        <a
          href='https://www.linkedin.com/in/manish-mandal/'
          target='blank'
          className='list'
        >
          <i style={{ color: '#0A66C2' }} className='fab fa-linkedin'></i>
        </a>
        <a
          href='https://github.com/manishMandal02'
          target='blank'
          className='list'
        >
          <i style={{ color: '#000000' }} className='fab fa-github-square'></i>
        </a>
        <a href='mailto:manishmandalj@gmail.com' className='list'>
          <i style={{ fontSize: '2.16em' }} className='fas fa-envelope'></i>
        </a>
        <Link to='#' className='list' onClick={close}>
          <i
            style={{ color: '#414141', fontSize: '2.16em' }}
            className='fas fa-times-circle'
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default FloatingSocialIcons;
