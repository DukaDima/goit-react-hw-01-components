import PropTypes from 'prop-types';

const FrendlistItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div>
      <span className="status">{isOnline ? 'в сети' : 'не в сети'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

FrendlistItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FrendlistItem;
