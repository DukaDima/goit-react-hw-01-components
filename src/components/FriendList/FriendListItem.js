import PropTypes from 'prop-types';
import s from './FrendList.module.css';

const FrendlistItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div className={s.frendCard}>
      <span
        className={s.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
};

FrendlistItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FrendlistItem;
