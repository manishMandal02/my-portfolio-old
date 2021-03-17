
import classes from "./Slides.module.css";

const slide = (props) => {

    return(
        <div className={classes.Slide}>
            <div className={classes.ImageContainer}>
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <div className={classes.Desc}>{props.despriction}</div>
            <div className={classes.Name}>{props.name}</div>
            <div className={classes.Designation}>{props.designation}</div>
        </div>
    )
};

export default slide;