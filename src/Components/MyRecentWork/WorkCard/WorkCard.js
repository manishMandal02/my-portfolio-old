
import classes from "./WorkCard.module.css";

import RecentWork from '../../../Asset/Images/wfdesignbuild.png';
import RecentWorkChronicled from '../../../Asset/Images/chronicled.png';

const workCard = () => (
    <div className={classes.CardContainer}>
        <div className={classes.Card}>
            <img src={RecentWork} className={classes.Image} alt="recent-works" />
            <div className={classes.HoveredCard}>
                <p>High-end, custom residential renovaters <br/>serving Fraser Valley homeowners.</p>
                <button>See More</button>
            </div>
        </div>
        <div className={classes.Card}>
            <img src={RecentWorkChronicled} className={classes.Image} alt="recent-works" />
            <div className={classes.HoveredCard}>
                <p>High-end, custom residential renovaters <br/>serving Fraser Valley homeowners.</p>
                <button>See More</button>
            </div>
        </div>
        <div className={classes.Card}>
            <img src={RecentWork} className={classes.Image} alt="recent-works" />
            <div className={classes.HoveredCard}>
                <p>High-end, custom residential renovaters <br/>serving Fraser Valley homeowners.</p>
                <button>See More</button>
            </div>
        </div>
        <div className={classes.Card}>
            <img src={RecentWorkChronicled} className={classes.Image} alt="recent-works" />
            <div className={classes.HoveredCard}>
                <p>High-end, custom residential renovaters <br/>serving Fraser Valley homeowners.</p>
                <button>See More</button>
            </div>
        </div>
        <div className={classes.Card}>
            <img src={RecentWork} className={classes.Image} alt="recent-works" />
            <div className={classes.HoveredCard}>
                <p>High-end, custom residential renovaters <br/>serving Fraser Valley homeowners.</p>
                <button>See More</button>
            </div>
        </div>
        <div className={classes.Card}>
            <img src={RecentWorkChronicled} className={classes.Image} alt="recent-works" />
            <div className={classes.HoveredCard}>
                <p>High-end, custom residential renovaters <br/>serving Fraser Valley homeowners.</p>
                <button>See More</button>
            </div>
        </div>
    </div>
);

export default workCard;