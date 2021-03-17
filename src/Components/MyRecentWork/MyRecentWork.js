
import classes from './MyRecentWork.module.css';

import HeadingContent from './HeadingContent/HeadingContent';
import WorkCard from './WorkCard/WorkCard';

const myRecentWork = () => (
    <div className={classes.Works} id='recent-work'>
        <HeadingContent />
        <WorkCard />
    </div>
);

export default myRecentWork;