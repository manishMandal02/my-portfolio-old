
import classes from './Logo.module.css';
import Logo from '../../../../Asset/Images/m-logo.png';

const logo = (props) => (
    <a href='/' className={classes.Logo} >
        <img src={Logo} alt='Mylogo' />
    </a>
);  

export default logo;