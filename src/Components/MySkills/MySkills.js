import classes from './MySkills.module.css';

import MyIntro from './MyIntro/MyIntro';
import Skills from './Skills/Skills';

const mySkills = () => (
  <div className={classes.MySkills} id='about'>
    <MyIntro />
    <Skills />
  </div>
);

export default mySkills;
