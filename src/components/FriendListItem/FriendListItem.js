import css from './friendListItem.module.css';
import PropTypes from "prop-types";

export default function FriendListItem({ avatar, name, isOnline, id }) {
  const classStatus = isOnline ? css.statusOnline: css.statusOff;

  return (
    <li className={css.item} key= {id}>
      <span className={`${css.status} ${classStatus}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" height="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};