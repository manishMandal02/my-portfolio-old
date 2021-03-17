
import classes from './MainImage.module.css';
import MainImage from '../../../Asset/Images/hero.svg';

const mainImage = () => (
    <div className={classes.MainImage}>
        <img src={MainImage} alt='mainImage' />
    </div>
);  

export default mainImage;