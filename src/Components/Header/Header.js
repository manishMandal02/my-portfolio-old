
import Navigation from './Navigation/Navigation';
import Title from './Title/Title';
import Avatar from './Avatar/Avatar';
import MainImage from './MainImage/MainImage';
import classes from './Header.module.css';

const header = () => (
    <div className={classes.Container}>
        <Navigation />
        <Title />
        <Avatar />
        <MainImage />
    </div>
);

export default header;