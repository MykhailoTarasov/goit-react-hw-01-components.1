import css from './friendList.module.css';
import PropTypes from "prop-types";
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({friends}) {
  return <ul className={css.friendList}>
    {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />
        </li>
      ))}
  </ul>;
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
  }))
};