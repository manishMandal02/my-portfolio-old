import avatarImg from '../../../Asset/Images/my-avatar.svg';
import classes from './Avatar.module.css';

const avatar = () => (
  <div className={classes.Avatar}>
    <img src={avatarImg} alt='manishMandal' />
  </div>
);

export default avatar;
