import { Link } from 'react-router-dom';

import classes from './Logo.module.css';
import Logo from '../../../../Asset/Images/m-logo.png';

const logo = (props) => (
  <Link to='/' className={classes.Logo}>
    <img src={Logo} alt='Mylogo' />
  </Link>
);

export default logo;
