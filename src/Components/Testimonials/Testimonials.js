
import classes from './Testimonials.module.css';

import Heading from "./Heading/Heading";
import TestimonialsSlider from './TestimonialsSlider/TestimonialsSlider';


const testimonials = () => (
    <div className={classes.Testimonials} id='testimonials'>
        <Heading />
        <TestimonialsSlider />
    </div>
);

export default testimonials;