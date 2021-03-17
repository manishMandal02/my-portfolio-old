// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import Slide from './Slides/Slides';
import male from '../../../Asset/Images/male-avatar.png';
import female from '../../../Asset/Images/female-avatar.png';
import classes from './TestimonialsSlider.module.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const testimonialsSlider = () => (
  <div className={classes.Slider}>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Slide
          image={male}
          imageAlt='slide2'
          despriction={
            '“Manish was a real pleasure to work with and we look forward to working with him again. \n He’s definitely the kind of developer you can trust with a project from start to finish.”'
          }
          name='John Doe'
          designation='CTO, Example Inc'
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slide
          image={female}
          imageAlt='slide3'
          despriction={
            '"Manish was a real pleasure to work with and we look forward to working with him again. \n He’s definitely the kind of developer you can trust with a project from start to finish.”'
          }
          name='Jane Doe'
          designation='Tech Lead, ABC Corporation'
        />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default testimonialsSlider;
