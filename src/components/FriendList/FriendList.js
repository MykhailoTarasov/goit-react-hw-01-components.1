import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({friends}) {
  return <ul class="friend-list">
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
